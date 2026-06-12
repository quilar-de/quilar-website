import type { Metadata } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Quilar - 3D-Visualisierung & Virtuelle Touren für Immobilien",
    template: "%s | Quilar",
  },
  description:
    "Professionelle 3D-Visualisierungen, virtuelle Rundgänge und HomeTour-Erlebnisse für Immobilien. Bringen Sie Ihre Objekte zum Leben mit Quilar.",
  keywords: [
    "3D Visualisierung",
    "Virtuelle Tour",
    "Immobilien",
    "HomeTour",
    "Rundgang",
    "Real Estate",
    "Architektur",
  ],
  authors: [{ name: "Quilar" }],
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: "https://quilar.de",
    siteName: "Quilar",
    title: "Quilar - 3D-Visualisierung & Virtuelle Touren",
    description:
      "Professionelle 3D-Visualisierungen und virtuelle Rundgänge für Immobilien.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className="h-full">
      <body className="min-h-full flex flex-col font-sans antialiased">
        <Header />
        <main className="flex-1 pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
