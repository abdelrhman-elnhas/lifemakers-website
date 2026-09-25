import type { Metadata } from "next";
import Navbar from "@/components/client/Navbar";
import Footer from "@/components/client/Footer";
import WhatsAppButton from "@/components/client/WhatsAppButton";
import Script from "next/script";


const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

const siteUrl = "https://www.lifemakers-mahalla.org";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "جمعية صناع الحياة - المحلة الكبرى",
    template: "%s | جمعية صناع الحياة",
  },
  description:
    "جمعية صناع الحياة الخيرية - المحلة الكبرى. نعمل على دعم الأسر الأكثر احتياجًا من خلال مشاريع السكن والمياه والحملات الموسمية والتطوع المجتمعي.",
  keywords: [
    "جمعية خيرية",
    "المحلة الكبرى",
    "تبرع",
    "تطوع",
    "صناع الحياة",
    "جمعية أهلية مصر",
  ],
  authors: [{ name: "جمعية صناع الحياة الخيرية" }],
  alternates: {
    canonical: "/",
    languages: {
      "ar-EG": "/",
    },
  },
  openGraph: {
    type: "website",
    locale: "ar_EG",
    url: siteUrl,
    siteName: "جمعية صناع الحياة المحلة الكبرى",
    title: "جمعية صناع الحياة المحلة الكبرى",
    description:
      "نعمل على دعم الأسر الأكثر احتياجًا في المحلة الكبرى من خلال مشاريع مستدامة وحملات موسمية.",
    images: [
      {
        url: "/logo.png", // 1200x630 — لازم يكون موجود في /public
        width: 1200,
        height: 630,
        alt: "جمعية صناع الحياة المحلة الكبرى",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "جمعية صناع الحياة المحلة الكبرى",
    description:
      "نعمل على دعم الأسر الأكثر احتياجًا في المحلة الكبرى من خلال مشاريع مستدامة وحملات موسمية.",
    images: ["/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

// JSON-LD structured data — منظمة غير حكومية (NGO)
function OrganizationJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "NGO",
    name: "جمعية صناع الحياة المحلة الكبرى",
    url: siteUrl,
    logo: `${siteUrl}/logo.png`,
    description:
      "جمعية أهلية خيرية في المحلة الكبرى تعمل على دعم الأسر الأكثر احتياجًا من خلال مشاريع السكن والمياه والحملات الموسمية.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "المحلة الكبرى",
      addressRegion: "الغربية",
      addressCountry: "EG",
    },
    sameAs: [
      "https://www.facebook.com/Sonaa.Mahalla",
    ],
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <OrganizationJsonLd />
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
      <WhatsAppButton />

      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />

      <Script id="google-analytics" strategy="afterInteractive">
        {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());

    gtag('config', '${GA_ID}');
  `}
      </Script>
    </>
  );
}
