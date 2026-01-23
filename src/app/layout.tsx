import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Credit Insurance - Compare Credit Insurance Solutions",
  description: "Protect your business with trade credit insurance. Compare credit insurance policies to safeguard against customer non-payment.",
  keywords: ["credit insurance", "trade credit insurance", "payment protection", "business credit insurance", "debtor insurance"],
  openGraph: {
    title: "Credit Insurance - Compare Credit Insurance Solutions",
    description: "Protect your business with trade credit insurance. Compare credit insurance policies to safeguard against customer non-payment.",
    url: "https://creditinsurance.quest",
    siteName: "Credit Insurance",
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Credit Insurance - Compare Credit Insurance Solutions",
    description: "Protect your business with trade credit insurance. Compare credit insurance policies to safeguard against customer non-payment.",
  },
  alternates: { canonical: "https://creditinsurance.quest" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-GB">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Credit Insurance",
              url: "https://creditinsurance.quest",
              description: "Protect your business with trade credit insurance. Compare credit insurance policies to safeguard against customer non-payment.",
            }),
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
