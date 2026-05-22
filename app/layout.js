import "./globals.css";
import SiteHeader from "@/components/layout/SiteHeader";
import Footer from "@/components/layout/Footer";
import FloatingWhatsApp from "@/components/ui/FloatingWhatsApp";
import StickyMobileCTA from "@/components/ui/StickyMobileCTA";
import { buildMetadata } from "@/lib/seo";
import { WebsiteJsonLd } from "@/components/seo/JsonLd";
import { bodyFont, fontVariables } from "@/lib/fonts";

export const metadata = buildMetadata({});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={fontVariables}>
      <body className={bodyFont.className}>
        <WebsiteJsonLd />
        <div className="container">
          <SiteHeader />
          {children}
          <Footer />
        </div>
        <FloatingWhatsApp />
        <StickyMobileCTA />
      </body>
    </html>
  );
}
