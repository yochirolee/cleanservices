import { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import { Toaster } from "sonner";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

const SITE = "https://nikallc.vercel.app";
const OG_IMAGE = `${SITE}/og.jpg`; // pon aquí tu imagen 1200x630 en /public/og.jpg

export async function generateMetadata(props: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await props.params;

  const isES = locale === "es";
  const urlByLocale = isES ? `${SITE}/` : `${SITE}/en`;

  const common: Metadata = {
    metadataBase: new URL(SITE),
    alternates: { languages: { es: "/", en: "/en" } },
    robots: { index: true, follow: true },
    openGraph: {
      url: urlByLocale,
      siteName: "Nika Llc",
      images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "Nika Llc - Cleaning Services" }],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      images: [OG_IMAGE],
    },
  };

  const es: Metadata = {
    title: "Servicios de Limpieza en Louisville | Nika Llc",
    description:
      "Empresa de limpieza profesional en Louisville, KY. Ofrecemos limpieza profunda, mantenimiento del hogar, oficinas y más. ¡Calidad, confianza y eficiencia!",
    keywords: [
      "servicios de limpieza Louisville",
      "limpieza profesional Louisville",
      "limpieza residencial Louisville",
      "limpieza comercial Louisville",
      "limpieza profunda Louisville",
      "empresa de limpieza en Kentucky",
      "mantenimiento de oficinas Louisville",
      "Nika Llc",
      "limpieza confiable Louisville",
    ],
    openGraph: {
      title: "Servicios de Limpieza en Louisville | Nika Llc",
      description:
        "Empresa de limpieza profesional en Louisville, KY. Ofrecemos limpieza profunda, mantenimiento del hogar, oficinas y más.",
      locale: "es_ES",
    },
    twitter: {
      title: "Servicios de Limpieza en Louisville | Nika Llc",
      description:
        "Empresa de limpieza profesional en Louisville, KY. Ofrecemos limpieza profunda, mantenimiento del hogar, oficinas y más.",
    },
  };

  const en: Metadata = {
    title: "Cleaning Services in Louisville | Nika Llc",
    description:
      "Professional cleaning company in Louisville, KY offering deep cleaning, home and office maintenance, and reliable solutions. Quality and trust guaranteed!",
    keywords: [
      "cleaning services Louisville",
      "professional cleaning Louisville",
      "residential cleaning Louisville",
      "commercial cleaning Louisville",
      "deep cleaning Louisville",
      "cleaning company Kentucky",
      "office maintenance Louisville",
      "Nika Llc",
      "reliable cleaning Louisville",
    ],
    openGraph: {
      title: "Cleaning Services in Louisville | Nika Llc",
      description:
        "Professional cleaning company in Louisville, KY offering deep cleaning, home and office maintenance, and reliable solutions.",
      locale: "en_US",
    },
    twitter: {
      title: "Cleaning Services in Louisville | Nika Llc",
      description:
        "Professional cleaning company in Louisville, KY offering deep cleaning, home and office maintenance, and reliable solutions.",
    },
  };

  return { ...common, ...(isES ? es : en) };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return (
    <html lang={locale}>
      <head>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-32x32.png" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="theme-color" content="#ffffff" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
        <Toaster position="top-right" />
      </body>
    </html>
  );
}
