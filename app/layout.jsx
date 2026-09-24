import "./globals.css";

const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || "https://kudupray.com").replace(
  /\/$/,
  "",
);
const siteName = "KuduPray";
const siteDescription =
  "KuduPray is a peaceful Islamic companion with accurate prayer times, a Qibla finder, Qur’an reading, Adhan audio, daily duas, Ruqyah, and practical Muslim guidance.";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "KuduPray | Premium Islamic Companion",
    template: "%s | KuduPray",
  },
  description: siteDescription,
  applicationName: siteName,
  authors: [{ name: "Mufasa Khan", url: siteUrl }],
  creator: "Mufasa Khan",
  publisher: "KuduPray",
  keywords: [
    "Islamic prayer times",
    "Muslim prayer times",
    "prayer time calculator",
    "Qibla finder",
    "Qur'an reader online",
    "Quran reader",
    "Adhan player",
    "daily duas",
    "Islamic duas",
    "Ruqyah",
    "Arabic transliteration",
    "Sunnah guidance",
    "Islamic companion",
    "free Islamic app",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName,
    title: "KuduPray | Premium Islamic Companion",
    description: siteDescription,
    images: [
      {
        url: "/brand/kudupray-lockup.png",
        width: 1440,
        height: 1024,
        alt: "KuduPray logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "KuduPray | Premium Islamic Companion",
    description: siteDescription,
    images: ["/brand/kudupray-lockup.png"],
  },
  manifest: "/manifest.webmanifest",
  category: "lifestyle",
  classification: "Islamic prayer and Qur'an study companion",
  referrer: "origin-when-cross-origin",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: "/brand/kudupray-emblem.png",
    apple: "/brand/kudupray-emblem.png",
  },
  verification: process.env.GOOGLE_SITE_VERIFICATION
    ? { google: process.env.GOOGLE_SITE_VERIFICATION }
    : undefined,
};
export const viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#047857",
};

export default function RootLayout({ children }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${siteUrl}/#organization`,
        name: siteName,
        url: siteUrl,
        logo: `${siteUrl}/brand/kudupray-emblem.png`,
        founder: { "@type": "Person", name: "Mufasa Khan" },
      },
      {
        "@type": "WebApplication",
        "@id": `${siteUrl}/#application`,
        name: siteName,
        applicationCategory: "LifestyleApplication",
        operatingSystem: "Web",
        url: siteUrl,
        description: siteDescription,
        image: `${siteUrl}/brand/kudupray-lockup.png`,
        featureList: [
          "Prayer times and Adhan audio",
          "Qibla finder",
          "Online Qur'an reader",
          "Daily duas and Ruqyah",
          "Arabic transliteration and translations",
        ],
        offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
        publisher: { "@id": `${siteUrl}/#organization` },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${siteUrl}/#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: siteName,
            item: siteUrl,
          },
        ],
      },
    ],
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          rel="preconnect"
          href="https://images.unsplash.com"
          crossOrigin=""
        />
        <link rel="preconnect" href="https://alfurqan.online" crossOrigin="" />
        <link rel="preconnect" href="https://cdn.islamic.network" />
        <link rel="dns-prefetch" href="https://cdn.islamic.network" />
        <link rel="dns-prefetch" href="//alfurqan.online" />
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Amiri:ital,wght@0,400;0,700;1,400&family=Poppins:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
