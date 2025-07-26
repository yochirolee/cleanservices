import { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import { Toaster } from "sonner";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export async function generateMetadata(props: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await props.params;
  const metadataByLocale = {
    es: {
    title: "Servicios de Limpieza en Sarasota - Daxia Clean Services | Limpieza Residencial y Comercial",
    description: "Empresa de limpieza profesional en Sarasota. Ofrecemos limpieza profunda, mantenimiento del hogar, oficinas y más. ¡Calidad, confianza y eficiencia!",
    keywords: [
      "servicios de limpieza Sarasota",
      "limpieza profesional Sarasota",
      "limpieza residencial Sarasota",
      "limpieza comercial Sarasota",
      "limpieza profunda Sarasota",
      "empresa de limpieza en Florida",
      "mantenimiento de oficinas Sarasota",
      "Daxia Clean Services",
      "limpieza confiable Sarasota"
    ],
      alternates: {
        languages: {
          en: "/en",
        },
      },
      openGraph: {
        title: "Servicios de Limpieza en Sarasota - Daxia Clean Services | Limpieza Residencial y Comercial",
        description: "Empresa de limpieza profesional en Sarasota. Ofrecemos limpieza profunda, mantenimiento del hogar, oficinas y más.",
        url: "https://landscapingproy.vercel.app/",
        siteName: "Daxia Clean Services",
        images: [
          {
            url: "https://landscapingproy.vercel.app/Additional-dusting-tips-scaled.webp",
            width: 1200,
            height: 630,
          },
        ],
        locale: "es_ES",
        type: "website",
      },
      twitter: {
        card: "summary_large_image",
        title: "Servicios de Limpieza en Sarasota - Daxia Clean Services | Limpieza Residencial y Comercial",
        description: "Empresa de limpieza profesional en Sarasota. Ofrecemos limpieza profunda, mantenimiento del hogar, oficinas y más.",
        images: ["https://landscapingproy.vercel.app/Additional-dusting-tips-scaled.webp"],
      },
    },
    en: {
    title: "Cleaning Services in Sarasota - Daxia Clean Services | Residential & Commercial Cleaning",
    description: "Professional cleaning company in Sarasota offering deep cleaning, home and office maintenance, and reliable cleaning solutions. Quality and trust guaranteed!",
    keywords: [
      "cleaning services Sarasota",
      "professional cleaning Sarasota",
      "residential cleaning Sarasota",
      "commercial cleaning Sarasota",
      "deep cleaning Sarasota",
      "cleaning company Florida",
      "office maintenance Sarasota",
      "Daxia Clean Services",
      "reliable cleaning Sarasota"
    ],
      alternates: {
        languages: {
          es: "/",
        },
      },
      openGraph: {
        title: "Cleaning Services in Sarasota - Daxia Clean Services | Residential & Commercial Cleaning",
        description: "Professional cleaning company in Sarasota offering deep cleaning, home and office maintenance, and reliable cleaning solutions.",
        url: "https://landscapingproy.vercel.app/",
        siteName: "Daxia Clean Services",
        images: [
          {
            url: "https://landscapingproy.vercel.app/Additional-dusting-tips-scaled.webp",
            width: 1200,
            height: 630,
          },
        ],
        locale: "en_US",
        type: "website",
      },
      twitter: {
        card: "summary_large_image",
        title: "Cleaning Services in Sarasota - Daxia Clean Services | Residential & Commercial Cleaning",
        description: "Professional cleaning company in Sarasota offering deep cleaning, home and office maintenance, and reliable cleaning solutions.",
        images: ["https://landscapingproy.vercel.app/Additional-dusting-tips-scaled.webp"],
      },
    },
  };

  return metadataByLocale[locale as "es" | "en"];
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;  // params es una promesa
}) {
  const { locale } = await params;  // espera la promesa

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