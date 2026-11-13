import type { Metadata, Viewport } from "next";
import { DM_Sans, Gilda_Display, Lora } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import RevealObserver from "@/components/RevealObserver";
import BackToTop from "@/components/BackToTop";
import ScrollProgress from "@/components/ScrollProgress";
import "./globals.css";

const gilda = Gilda_Display({
  variable: "--font-gilda",
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://aaradhyaivf.com"),
  title: {
    default: "Aaradhya IVF | Fertility & IVF Centre in New Delhi",
    template: "%s | Aaradhya IVF",
  },
  description:
    "Aaradhya IVF helps individuals and couples achieve their dream of parenthood through advanced fertility treatments, compassionate care and a personalized approach.",
  icons: { icon: "/favicon.ico" },
  openGraph: {
    type: "website",
    siteName: "Aaradhya IVF",
    images: ["/images/hero.jpg"],
  },
};

export const viewport: Viewport = {
  themeColor: "#b42b55",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      // The inline script below adds the `js` class before first paint.
      suppressHydrationWarning
      className={`${gilda.variable} ${lora.variable} ${dmSans.variable} antialiased`}
    >
      <body className="flex min-h-screen flex-col">
        <script
          dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }}
        />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-white"
        >
          Skip to content
        </a>
        <ScrollProgress />
        <Header />
        <main id="main" className="flex-1 overflow-x-clip">
          {children}
        </main>
        <Footer />
        <BackToTop />
        <RevealObserver />
      </body>
    </html>
  );
}
