import type { Metadata } from "next";
import { Inter, Cairo } from "next/font/google";
import "../globals.css";
import type { Locale } from "@/lib/i18n";
import { getDictionary } from "@/lib/i18n";
import Link from "next/link";
import LanguageSwitcher from "@/components/ui/LanguageSwitcher";
import MobileMenu from "@/components/ui/MobileMenu";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const cairo = Cairo({ subsets: ["arabic"], variable: "--font-cairo" });

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const locale = lang as Locale;
  const t = await getDictionary(locale);
  return {
    title:
      locale === "ar"
        ? "محمد ناصر | مطوّر WordPress وWooCommerce"
        : "Muhammed Nasser | WordPress & WooCommerce Developer",
    description: t.home.heroTitle,
    icons: {
      icon: "/favicon.png",
      shortcut: "/favicon.png",
      apple: "/favicon.png",
    },
  };
}

export async function generateStaticParams() {
  return [{ lang: "en" }, { lang: "ar" }];
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const locale = lang as Locale;
  const t = await getDictionary(locale);
  const dir = locale === "ar" ? "rtl" : "ltr";

  const fontClass =
    locale === "ar"
      ? `${cairo.variable} font-cairo`
      : `${inter.variable} font-inter`;

  const logoSrc =
    locale === "ar"
      ? "/demo/logos/logo-desktop-ar.png"
      : "/demo/logos/logo-desktop-en.png";
  const logoAlt =
    locale === "ar" ? "شعار محمد ناصر" : "Muhammed Nasser Logo";

  return (
    <html lang={locale} dir={dir} className="dark">
      <body
        className={`${fontClass} bg-[#05070D] text-[#F8FAFC] antialiased min-h-screen flex flex-col`}
      >
        <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-[#0B1020]/80 backdrop-blur">
          <div className="container mx-auto px-4 h-14 flex items-center justify-between gap-4">
            {/* Logo — plain img to avoid Next.js image optimizer issues with local PNGs */}
            <Link
              href={`/${lang}`}
              className="flex items-center flex-shrink-0 min-w-0"
              style={{ maxWidth: "clamp(160px, 50vw, 300px)" }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={logoSrc}
                alt={logoAlt}
                width={300}
                height={48}
                className="h-10 md:h-12 w-auto object-contain"
                style={{ maxWidth: "100%" }}
              />
            </Link>

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-6 flex-shrink-0">
              <Link
                href={`/${lang}/services`}
                className="hover:text-[#38BDF8] transition-colors whitespace-nowrap text-sm font-medium"
              >
                {t.nav.services}
              </Link>
              <Link
                href={`/${lang}/work`}
                className="hover:text-[#38BDF8] transition-colors whitespace-nowrap text-sm font-medium"
              >
                {t.nav.work}
              </Link>
              <Link
                href={`/${lang}/about`}
                className="hover:text-[#38BDF8] transition-colors whitespace-nowrap text-sm font-medium"
              >
                {t.nav.about}
              </Link>
              <Link
                href={`/${lang}/lab`}
                className="hover:text-[#38BDF8] transition-colors whitespace-nowrap text-sm font-medium"
              >
                {t.nav.lab}
              </Link>
              <Link
                href={`/${lang}/backend`}
                className="hover:text-[#38BDF8] transition-colors whitespace-nowrap text-sm font-medium"
              >
                {t.nav.backend}
              </Link>
              {/* Start a Project CTA Button */}
              <Link
                href={`/${lang}/contact`}
                className="px-4 py-2 bg-[#38BDF8]/10 hover:bg-[#38BDF8] text-[#38BDF8] hover:text-[#020617] border border-[#38BDF8]/20 hover:border-transparent rounded-lg text-sm font-bold transition-all whitespace-nowrap"
              >
                {lang === "ar" ? "ابدأ مشروعك" : "Start a Project"}
              </Link>
              <LanguageSwitcher currentLang={locale} />
            </nav>

            {/* Mobile hamburger */}
            <MobileMenu lang={lang} locale={locale} nav={t.nav} />
          </div>
        </header>
        <main className="flex-1">{children}</main>
        <footer className="border-t border-white/10 bg-[#0B1020] py-8 mt-12">
          <div className="container mx-auto px-4 text-center text-[#94A3B8]">
            <p>
              {lang === "ar" ? (
                "© 2026 محمد ناصر. جميع الحقوق محفوظة."
              ) : (
                <>© {new Date().getFullYear()} Muhammed Nasser. All rights reserved.</>
              )}
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
