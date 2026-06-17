import type { Locale } from "@/lib/i18n";
import { getDictionary } from "@/lib/i18n";

export default async function ServicesPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const locale = lang as Locale;
  const t = await getDictionary(locale);

  return (
    <div className="container mx-auto px-4 py-20 space-y-12 text-center">
      <h1 className="text-4xl font-bold">{t.nav.services}</h1>
      <p className="text-[#94A3B8] max-w-2xl mx-auto">
        {locale === "ar" ? "قريباً: تفاصيل الخدمات البرمجية وحلول الأعمال المخصصة التي أقدمها." : "Coming Soon: Details of custom development services and business solutions."}
      </p>
    </div>
  );
}
