import type { Metadata } from "next";
import "./globals.css";

const siteUrl = new URL(
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://geologkek-droid.github.io/invite"
);
const previewTitle = "Тут кое-что для вас";
const previewDescription =
  "Маленькая история стала большой. Откройте письмо, когда будете готовы.";

export const metadata: Metadata = {
  metadataBase: siteUrl,
  title: previewTitle,
  description: previewDescription,
  alternates: {
    canonical: "/"
  },
  openGraph: {
    title: previewTitle,
    description: previewDescription,
    url: "/",
    siteName: "Маша + Вадим",
    locale: "ru_RU",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Тут кое-что для вас"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: previewTitle,
    description: previewDescription,
    images: ["/og-image.jpg"]
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}
