import type { CSSProperties } from "react";

/** Inline style that staggers a `data-reveal` element. */
export const delay = (ms: number) => ({ "--reveal-delay": `${ms}ms` }) as CSSProperties;

export const cn = (...classes: Array<string | false | null | undefined>) => classes.filter(Boolean).join(" ");

/** Inline style that staggers a CSS keyframe animation (`.bob`, `.twinkle`, `.pop-in`, `.header-in-item`). */
export const animDelay = (ms: number) => ({ "--d": `${ms}ms` }) as CSSProperties;
