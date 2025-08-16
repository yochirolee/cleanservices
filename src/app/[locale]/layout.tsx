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
        "limpieza confiable Louisville"
      ],
      alternates: {
        languages: {
          en: "/en",
        },
      },
      openGraph: {
        title: "Servicios de Limpieza en Louisville | Nika Llc",
        description:
          "Empresa de limpieza profesional en Louisville, KY. Ofrecemos limpieza profunda, mantenimiento del hogar, oficinas y más.",
        url: "https://nikallc.vercel.app/",
        siteName: "Nika Llc",
        images: [
          {
            url: "https://nikallc.vercel.app/og.jpg",
            width: 1200,
            height: 630,
          },
        ],
        locale: "es_ES",
        type: "website",
      },
      twitter: {
        card: "summary_large_image",
        title: "Servicios de Limpieza en Louisville | Nika Llc",
        description:
          "Empresa de limpieza profesional en Louisville, KY. Ofrecemos limpieza profunda, mantenimiento del hogar, oficinas y más.",
        images: ["https://nikallc.vercel.app/og.jpg"],
      },
    },
    en: {
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
        "reliable cleaning Louisville"
      ],
      alternates: {
        languages: {
          es: "/",
        },
      },
      openGraph: {
        title: "Cleaning Services in Louisville | Nika Llc",
        description:
          "Professional cleaning company in Louisville, KY offering deep cleaning, home and office maintenance, and reliable solutions.",
        url: "https://nikallc.vercel.app/",
        siteName: "Nika Llc",
        images: [
          {
            url: "https://nikallc.vercel.app/og.jpg",
            width: 1200,
            height: 630,
          },
        ],
        locale: "en_US",
        type: "website",
      },
      twitter: {
        card: "summary_large_image",
        title: "Cleaning Services in Louisville | Nika Llc",
        description:
          "Professional cleaning company in Louisville, KY offering deep cleaning, home and office maintenance, and reliable solutions.",
        images: ["https://nikallc.vercel.app/og.jpg"],
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
  params: Promise<{ locale: string }>; // params es una promesa
}) {
  const { locale } = await params; // espera la promesa

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
