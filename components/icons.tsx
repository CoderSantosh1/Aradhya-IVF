import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & { size?: number };

function base({ size = 20, ...props }: IconProps) {
  return {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.7,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
    ...props,
  };
}

export const ArrowRight = (p: IconProps) => (
  <svg {...base(p)}><path d="M4 12h16M14 6l6 6-6 6" /></svg>
);
export const ArrowLeft = (p: IconProps) => (
  <svg {...base(p)}><path d="M20 12H4M10 6l-6 6 6 6" /></svg>
);
export const ArrowUpRight = (p: IconProps) => (
  <svg {...base(p)}><path d="M7 17 17 7M8 7h9v9" /></svg>
);
export const ArrowUp = (p: IconProps) => (
  <svg {...base(p)}><path d="M12 19V5M6 11l6-6 6 6" /></svg>
);
export const ChevronLeft = (p: IconProps) => (
  <svg {...base(p)}><path d="m15 6-6 6 6 6" /></svg>
);
export const ChevronRight = (p: IconProps) => (
  <svg {...base(p)}><path d="m9 6 6 6-6 6" /></svg>
);
export const ChevronDown = (p: IconProps) => (
  <svg {...base(p)}><path d="m6 9 6 6 6-6" /></svg>
);
export const Menu = (p: IconProps) => (
  <svg {...base(p)}><path d="M4 7h16M4 12h16M4 17h16" /></svg>
);
export const Close = (p: IconProps) => (
  <svg {...base(p)}><path d="M6 6l12 12M18 6 6 18" /></svg>
);
export const Plus = (p: IconProps) => (
  <svg {...base(p)}><path d="M12 5v14M5 12h14" /></svg>
);
export const Minus = (p: IconProps) => (
  <svg {...base(p)}><path d="M5 12h14" /></svg>
);
export const Check = (p: IconProps) => (
  <svg {...base(p)}><path d="m5 12.5 4.5 4.5L19 7.5" /></svg>
);
export const MapPin = (p: IconProps) => (
  <svg {...base(p)} fill="currentColor" stroke="none">
    <path d="M12 2a7 7 0 0 0-7 7c0 5.2 7 13 7 13s7-7.8 7-13a7 7 0 0 0-7-7Zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5Z" />
  </svg>
);
export const Phone = (p: IconProps) => (
  <svg {...base(p)} fill="currentColor" stroke="none">
    <path d="M6.6 10.8a15.1 15.1 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.25 11.4 11.4 0 0 0 3.6.57 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.57a1 1 0 0 1-.25 1L6.6 10.8Z" />
  </svg>
);
export const Mail = (p: IconProps) => (
  <svg {...base(p)}><rect x="3" y="5" width="18" height="14" rx="2.5" /><path d="m3.5 6.5 8.5 6.5 8.5-6.5" /></svg>
);
export const Calendar = (p: IconProps) => (
  <svg {...base(p)}>
    <rect x="3.5" y="5" width="17" height="15.5" rx="2.5" />
    <path d="M3.5 10h17M8 3v4M16 3v4" />
    <path d="M8 13.5h.01M12 13.5h.01M16 13.5h.01M8 17h.01M12 17h.01M16 17h.01" strokeWidth={2.4} />
  </svg>
);
export const Clock = (p: IconProps) => (
  <svg {...base(p)}><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></svg>
);
export const User = (p: IconProps) => (
  <svg {...base(p)}><circle cx="12" cy="8" r="4" /><path d="M4 21a8 8 0 0 1 16 0" /></svg>
);
export const Users = (p: IconProps) => (
  <svg {...base(p)}>
    <circle cx="12" cy="7.5" r="3" /><circle cx="5.5" cy="10" r="2.3" /><circle cx="18.5" cy="10" r="2.3" />
    <path d="M7 20a5 5 0 0 1 10 0M1.8 19a3.8 3.8 0 0 1 5-3.6M22.2 19a3.8 3.8 0 0 0-5-3.6" />
  </svg>
);
export const Tag = (p: IconProps) => (
  <svg {...base(p)}><path d="M3 12V4a1 1 0 0 1 1-1h8l9 9-9 9-9-9Z" /><circle cx="7.5" cy="7.5" r="1.5" /></svg>
);
export const Heart = (p: IconProps) => (
  <svg {...base(p)}><path d="M12 20s-7.5-4.6-9.3-9.2C1.4 7.3 3.6 4 7 4c2 0 3.6 1.1 5 3 1.4-1.9 3-3 5-3 3.4 0 5.6 3.3 4.3 6.8C19.5 15.4 12 20 12 20Z" /></svg>
);
export const Shield = (p: IconProps) => (
  <svg {...base(p)}><path d="M12 3 4.5 6v6c0 4.5 3.2 8 7.5 9 4.3-1 7.5-4.5 7.5-9V6L12 3Z" /><path d="m8.8 12 2.3 2.3 4.3-4.6" /></svg>
);
export const ChartUp = (p: IconProps) => (
  <svg {...base(p)}><path d="M4 20h16M7 17v-4M11 17v-6M15 17v-3M19 17V9" /><path d="m5 10 4-4 4 3 6-5M16 4h3v3" /></svg>
);
export const HandsHeart = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M12 10.5s-3-1.9-3-4a1.8 1.8 0 0 1 3-1.3 1.8 1.8 0 0 1 3 1.3c0 2.1-3 4-3 4Z" />
    <path d="M3 11v5l4 4h3v-3l-3-3M21 11v5l-4 4h-3v-3l3-3M3 11a1.5 1.5 0 0 1 3 0v3M21 11a1.5 1.5 0 0 0-3 0v3" />
  </svg>
);
export const Clipboard = (p: IconProps) => (
  <svg {...base(p)}><rect x="5" y="4" width="14" height="17" rx="2" /><path d="M9 4V3h6v1M8 13h2l1.5-3 2 5 1.5-2h1" /></svg>
);
export const Flask = (p: IconProps) => (
  <svg {...base(p)}><path d="M9 3v6l-5 9a2 2 0 0 0 1.8 3h12.4A2 2 0 0 0 20 18l-5-9V3M8 3h8M7 15h10" /></svg>
);
export const Embryo = (p: IconProps) => (
  <svg {...base(p)}><circle cx="12" cy="12" r="9" /><path d="M14 8.5a3 3 0 1 0-3 3c-2 0-3 1.5-3 3a3 3 0 0 0 5 2.2c1.5-1.4 2-4 1-8.2Z" /></svg>
);
export const Baby = (p: IconProps) => (
  <svg {...base(p)}><circle cx="12" cy="6.5" r="3" /><path d="M6 13c1.5 3 3.5 4 6 4s4.5-1 6-4M12 10v3" /><path d="M9 21c0-2 1.3-3 3-3s3 1 3 3" /></svg>
);
export const Pencil = (p: IconProps) => (
  <svg {...base(p)}><path d="m4 20 4-1 11-11-3-3L5 16l-1 4ZM14 7l3 3" /></svg>
);
export const FileText = (p: IconProps) => (
  <svg {...base(p)}><path d="M6 3h8l4 4v14H6V3Z" /><path d="M14 3v4h4M9 12h6M9 16h6" /></svg>
);
export const Share = (p: IconProps) => (
  <svg {...base(p)} fill="currentColor" stroke="none">
    <circle cx="18" cy="5.5" r="3" /><circle cx="6" cy="12" r="3" /><circle cx="18" cy="18.5" r="3" />
    <path d="m8.6 10.7 6.8-3.9M8.6 13.3l6.8 3.9" stroke="currentColor" strokeWidth={2} />
  </svg>
);
export const Quote = (p: IconProps) => (
  <svg {...base(p)} fill="currentColor" stroke="none">
    <path d="M10 6c-3.3 1.2-6 4-6 8.5V19h6v-6H7c.2-2.4 1.5-4 3.6-5L10 6Zm10 0c-3.3 1.2-6 4-6 8.5V19h6v-6h-3c.2-2.4 1.5-4 3.6-5L20 6Z" />
  </svg>
);
export const Star = (p: IconProps) => (
  <svg {...base(p)} fill="currentColor" stroke="none">
    <path d="m12 2.8 2.8 5.8 6.3.9-4.6 4.4 1.1 6.3L12 17.2l-5.6 3 1.1-6.3L2.9 9.5l6.3-.9L12 2.8Z" />
  </svg>
);
export const Sparkle = (p: IconProps) => (
  <svg {...base(p)} strokeWidth={1.4}><path d="M12 2v20M2 12h20M4.9 4.9l14.2 14.2M19.1 4.9 4.9 19.1" /></svg>
);
export const Lotus = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M12 4.5s-3 1.7-3 4.3a3 3 0 0 0 6 0c0-2.6-3-4.3-3-4.3Z" />
    <path d="M12 21c-4.5 0-8-2.5-8-6 2.5 0 5 1 8 6Zm0 0c4.5 0 8-2.5 8-6-2.5 0-5 1-8 6ZM12 21v-9" />
  </svg>
);
export const ZoomIn = (p: IconProps) => (
  <svg {...base(p)}><circle cx="11" cy="11" r="7" /><path d="m20 20-4-4M11 8v6M8 11h6" /></svg>
);
export const Facebook = (p: IconProps) => (
  <svg {...base(p)} fill="currentColor" stroke="none">
    <path d="M13.5 21v-7.5H16l.4-3h-2.9V8.6c0-.9.3-1.5 1.5-1.5h1.5V4.4A20 20 0 0 0 14.3 4c-2.2 0-3.8 1.4-3.8 3.9v2.6H8v3h2.5V21h3Z" />
  </svg>
);
export const Instagram = (p: IconProps) => (
  <svg {...base(p)}><rect x="3.5" y="3.5" width="17" height="17" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.3" cy="6.7" r="0.9" fill="currentColor" /></svg>
);
export const Linkedin = (p: IconProps) => (
  <svg {...base(p)} fill="currentColor" stroke="none">
    <path d="M6.9 8.8H3.7V20h3.2V8.8ZM5.3 3.5a1.9 1.9 0 1 0 0 3.8 1.9 1.9 0 0 0 0-3.8ZM20.3 13.6c0-3-1.6-5-4.4-5-1.4 0-2.4.7-2.9 1.5V8.8H9.9V20h3.2v-5.6c0-1.5.6-2.7 2.1-2.7s1.9 1.2 1.9 2.8V20h3.2v-6.4Z" />
  </svg>
);
export const Youtube = (p: IconProps) => (
  <svg {...base(p)} fill="currentColor" stroke="none">
    <path d="M21.6 7.2a2.6 2.6 0 0 0-1.8-1.8C18.2 5 12 5 12 5s-6.2 0-7.8.4A2.6 2.6 0 0 0 2.4 7.2 27 27 0 0 0 2 12c0 1.6.1 3.2.4 4.8a2.6 2.6 0 0 0 1.8 1.8c1.6.4 7.8.4 7.8.4s6.2 0 7.8-.4a2.6 2.6 0 0 0 1.8-1.8c.3-1.6.4-3.2.4-4.8s-.1-3.2-.4-4.8ZM10 15V9l5.2 3L10 15Z" />
  </svg>
);

export const socialIcons = {
  facebook: Facebook,
  instagram: Instagram,
  linkedin: Linkedin,
  youtube: Youtube,
};
