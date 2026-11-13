"use client";

import { useEffect } from "react";

const SELECTOR = "[data-reveal], .line-reveal";
const EASE = "cubic-bezier(0.22, 1, 0.36, 1)";

type Frames = Keyframe[];
const FROM: Record<string, Keyframe> = {
  up: { opacity: 0, transform: "translateY(48px)" },
  down: { opacity: 0, transform: "translateY(-40px)" },
  left: { opacity: 0, transform: "translateX(-60px)" },
  right: { opacity: 0, transform: "translateX(60px)" },
  zoom: { opacity: 0, transform: "scale(0.88)" },
  blur: { opacity: 0, transform: "translateY(20px)", filter: "blur(12px)" },
  grow: { opacity: 1, transform: "scaleY(0)" },
  flip: { opacity: 0, transform: "perspective(900px) rotateX(-18deg) translateY(30px)" },
};

/** Clip-path wipes — the box stays put while its content is uncovered. */
const MASK: Record<string, string> = {
  mask: "inset(0 100% 0 0 round 22px)",
  "mask-left": "inset(0 0 0 100% round 22px)",
  "mask-up": "inset(100% 0 0 0 round 22px)",
};

function play(el: HTMLElement, reduced: boolean) {
  const delay = reduced ? 0 : parseFloat(getComputedStyle(el).getPropertyValue("--reveal-delay")) || 0;
  const t = (ms: number) => (reduced ? 0 : ms);

  if (el.classList.contains("line-reveal")) {
    const line = el.firstElementChild as HTMLElement | null;
    line?.animate([{ transform: "translateY(105%)" }, { transform: "none" }] as Frames, {
      duration: t(1100), delay, easing: EASE, fill: "both",
    });
    return;
  }

  const type = el.dataset.reveal ?? "up";

  if (type in MASK) {
    // Ends on `clip-path: none` so shadows / rings outside the box show again.
    el.animate(
      [{ clipPath: MASK[type] }, { clipPath: "inset(0 0 0 0 round 22px)", offset: 0.999 }, { clipPath: "none" }],
      { duration: t(1400), delay, easing: "cubic-bezier(0.77, 0, 0.18, 1)", fill: "both" },
    );
    // The image inside settles from a slight zoom as it is uncovered.
    el.querySelector<HTMLElement>("img")?.animate([{ scale: "1.25" }, { scale: "1" }], {
      duration: t(1800), delay, easing: EASE, fill: "backwards",
    });
  } else {
    const from = FROM[type] ?? FROM.up;
    el.animate([from, { opacity: 1, transform: "none", filter: "none" }], {
      duration: t(type === "grow" ? 2200 : 900), delay, easing: EASE, fill: "both",
    });
  }

  // Eyebrow lines next to section labels draw outwards.
  el.querySelectorAll<HTMLElement>(".label-line").forEach((line, i) =>
    line.animate([{ transform: "scaleX(0)" }, { transform: "scaleX(1)" }], {
      duration: t(1000), delay: delay + t(250 + i * 80), easing: EASE, fill: "both",
    }),
  );

  el.querySelectorAll<SVGPathElement>(".arc-draw path").forEach((p) =>
    p.animate([{ strokeDashoffset: 1 }, { strokeDashoffset: 0 }], {
      duration: t(1800), delay: delay + t(500), easing: "cubic-bezier(0.65, 0, 0.35, 1)", fill: "both",
    }),
  );
}

/**
 * Parallax: `data-parallax="0.15"` drifts an element against the scroll.
 * Animates the standalone `translate` property through a held Web Animation,
 * so it composes with any `transform` and never touches React-owned
 * attributes (safe even before the element has hydrated).
 */
function setupParallax(reduced: boolean): { stop: () => void; refresh: () => void } {
  if (reduced) return { stop: () => {}, refresh: () => {} };
  let els: HTMLElement[] = [];
  let raf = 0;
  const state = new WeakMap<HTMLElement, { anim: Animation; offset: number }>();
  const collect = () => {
    els = Array.from(document.querySelectorAll<HTMLElement>("[data-parallax]"));
  };
  const update = () => {
    raf = 0;
    const vh = window.innerHeight;
    for (const el of els) {
      const s = state.get(el);
      const rect = el.getBoundingClientRect();
      // Measure the untranslated position so the offset doesn't feed back into itself.
      const top = rect.top - (s?.offset ?? 0);
      if (top + rect.height < -200 || top > vh + 200) continue;
      const speed = parseFloat(el.dataset.parallax ?? "0.15") || 0.15;
      const offset = Math.round((top + rect.height / 2 - vh / 2) * -speed);
      if (s?.offset === offset) continue;
      const frame = [{ translate: `0 ${offset}px` }];
      if (s) {
        (s.anim.effect as KeyframeEffect).setKeyframes(frame);
        s.offset = offset;
      } else {
        state.set(el, { anim: el.animate(frame, { duration: 1, fill: "forwards" }), offset });
      }
    }
  };
  const onScroll = () => {
    if (!raf) raf = requestAnimationFrame(update);
  };
  collect();
  update();
  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onScroll);
  return {
    stop: () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(raf);
    },
    refresh: () => {
      collect();
      onScroll();
    },
  };
}

/**
 * Tilt: `data-tilt` cards lean towards the pointer. Delegated so it works for
 * content rendered later, and skipped on touch / reduced-motion.
 */
function setupTilt(reduced: boolean) {
  if (reduced || !window.matchMedia("(hover: hover) and (pointer: fine)").matches) return () => {};
  let current: HTMLElement | null = null;
  const reset = (el: HTMLElement) => {
    el.style.rotate = "";
    el.style.transform = "";
  };
  const onMove = (e: PointerEvent) => {
    const el = (e.target as Element | null)?.closest<HTMLElement>("[data-tilt]") ?? null;
    if (current && current !== el) reset(current);
    current = el;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    const max = parseFloat(el.dataset.tilt || "6") || 6;
    el.style.transform = `perspective(1000px) rotateX(${(-y * max).toFixed(2)}deg) rotateY(${(x * max).toFixed(2)}deg)`;
  };
  const onLeave = () => {
    if (current) reset(current);
    current = null;
  };
  document.addEventListener("pointermove", onMove, { passive: true });
  document.documentElement.addEventListener("pointerleave", onLeave);
  return () => {
    document.removeEventListener("pointermove", onMove);
    document.documentElement.removeEventListener("pointerleave", onLeave);
  };
}

/**
 * One shared IntersectionObserver for every scroll-reveal element.
 *
 * Server components just add `data-reveal="up|down|left|right|zoom|blur|grow|flip|mask|mask-left|mask-up"`
 * (plus an optional `style={delay(ms)}`) or the `line-reveal` class. Entrances
 * use the Web Animations API, so nothing React rendered is mutated — no
 * hydration mismatches even when this runs before a streamed Suspense boundary
 * has hydrated. A MutationObserver picks up content added later (client
 * navigation, pagination).
 */
export default function RevealObserver() {
  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const seen = new WeakSet<Element>();

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          io.unobserve(entry.target);
          play(entry.target as HTMLElement, reduced);
        }
      },
      // Tall images can stay clipped when a short viewport never reaches a
      // percentage visibility threshold. Reveal as soon as they enter view.
      { threshold: 0, rootMargin: "0px" },
    );

    const watch = (el: Element) => {
      if (seen.has(el)) return;
      seen.add(el);
      io.observe(el);
    };
    const scan = (root: ParentNode) => root.querySelectorAll(SELECTOR).forEach(watch);

    scan(document);
    const parallax = setupParallax(reduced);
    const tilt = setupTilt(reduced);

    const mo = new MutationObserver((mutations) => {
      let added = false;
      for (const m of mutations) {
        m.addedNodes.forEach((node) => {
          if (!(node instanceof Element)) return;
          added = true;
          if (node.matches(SELECTOR)) watch(node);
          scan(node);
        });
      }
      if (added) parallax.refresh();
    });
    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      io.disconnect();
      mo.disconnect();
      parallax.stop();
      tilt();
    };
  }, []);

  return null;
}
