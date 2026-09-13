import "./globals.css";

export const metadata = {
  title: "KuduPray | Premium Islamic Companion",
  description:
    "Prayer times, Qur’an reading and audio, duas, daily remembrance, and practical Islamic guides.",
};
export const viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#047857",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
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
