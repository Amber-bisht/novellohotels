import Head from "next/head";
import Script from "next/script";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import "./globals.css";
import { Playfair_Display, Lato } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const lato = Lato({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-lato",
  display: "swap",
});

export const metadata = {
  title: "Novello Globe Hotels & Resorts",
  description: "Welcome to The Novello by Hotel Evergreen, a serene getaway amidst the hills of Mussoorie.",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Novello Globe Hotels & Resorts",
    description: "A serene getaway amidst the hills of Mussoorie.",
    url: "https://www.novellohotels.com",
    images: [
      {
        url: "/assets/Homepic/bghome.webp",
        width: 1200,
        height: 630,
        alt: "Novello Globe Hotel Mussoorie",
      },
    ],
    site_name: "Novello Globe Hotels & Resorts",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${playfair.variable} ${lato.variable}`}>
      <Head>
        {/* Favicon and metadata */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content={metadata.description} />

        {/* Open Graph Tags */}
        <meta property="og:title" content={metadata.openGraph.title} />
        <meta property="og:description" content={metadata.openGraph.description} />
        <meta property="og:url" content={metadata.openGraph.url} />
        <meta property="og:image" content={metadata.openGraph.images[0].url} />
        <meta property="og:image:width" content={metadata.openGraph.images[0].width} />
        <meta property="og:image:height" content={metadata.openGraph.images[0].height} />
        <meta property="og:site_name" content={metadata.openGraph.site_name} />
      </Head>

      {/* ✅ Google Ads Tag should be added using <Script /> */}
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=AW-17654112764"
      />
      <Script
        id="google-ads-tag"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-17654112764');
          `,
        }}
      />

      <body className="font-sans antialiased text-gray-900 bg-[#F9F9F7]">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
