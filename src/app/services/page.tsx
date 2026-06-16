import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Leistungen",
  description:
    "Unsere Leistungen: HomeTour virtuelle Rundgänge, 3D-Visualisierungen, virtuelle Inszenierung und Architekturvisualisierung.",
  openGraph: {
    type: "website",
    locale: "de_DE",
    siteName: "Quilar",
    title: "Leistungen | Quilar",
    description:
      "HomeTour, 3D-Visualisierung, virtuelle Inszenierung und Architekturvisualisierung — alle Leistungen von Quilar im Überblick.",
    url: "/services",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Quilar - Professionelle 3D-Visualisierung & Virtuelle Touren für Immobilien",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Leistungen | Quilar",
    description:
      "HomeTour, 3D-Visualisierung, virtuelle Inszenierung und Architekturvisualisierung — alle Leistungen von Quilar im Überblick.",
    images: ["/opengraph-image"],
  },
};

// Escape `<` to prevent any chance of breaking out of the <script> tag
// via embedded `</script>` sequences in JSON-LD strings.
const toJsonLd = (data: unknown) =>
  JSON.stringify(data).replace(/</g, "\\u003c");

// Reference the Organization defined on the homepage by @id so search
// engines treat it as the same entity rather than duplicating it.
const provider = { "@id": "https://quilar.de/#organization" };
const areaServed = { "@type": "Country", "name": "Germany" };

const servicesJsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "HomeTour - Virtuelle Rundgänge",
    "description": "Interaktive 360-Grad-Rundgänge durch Immobilien. Besucher erleben jeden Raum authentisch von zu Hause aus, kompatibel mit allen Geräten und VR-Brillen.",
    "provider": provider,
    "areaServed": areaServed,
    "serviceType": "Virtuelle Tour",
    "url": "https://quilar.de/services"
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "3D-Visualisierung",
    "description": "Fotorealistische 3D-Renderings für Bauprojekte. Außen- und Innenansichten, Tages- und Nachtszenen in druckfähiger Auflösung.",
    "provider": provider,
    "areaServed": areaServed,
    "serviceType": "3D Visualisierung",
    "url": "https://quilar.de/services"
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Virtuelle Inszenierung",
    "description": "Leere Räume virtuell einrichten und gestalten. Kosteneffiziente Alternative zur physischen Möblierung, Lieferung innerhalb 24-48 Stunden.",
    "provider": provider,
    "areaServed": areaServed,
    "serviceType": "Virtual Staging",
    "url": "https://quilar.de/services"
  }
];

export default function ServicesPage() {
  return (
    <>
      {servicesJsonLd.map((service) => (
        <script
          key={service.name}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: toJsonLd(service) }}
        />
      ))}
      {/* Hero */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Unsere Leistungen
            </h1>
            <p className="text-xl text-gray-600">
              Modernste Technologie trifft auf kreative Expertise. Entdecken Sie
              unsere Lösungen für die digitale Immobilienpräsentation.
            </p>
          </div>
        </div>
      </section>

      {/* HomeTour */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-block bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm font-medium mb-4">
                Flagship-Produkt
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                HomeTour - Virtuelle Rundgänge
              </h2>
              <p className="text-gray-600 mb-6">
                Bieten Sie Ihren Interessenten die Möglichkeit, Immobilien
                bequem von zu Hause aus zu besichtigen. Unsere interaktiven
                360-Grad-Touren vermitteln ein authentisches Raumgefühl.
              </p>
              <ul className="space-y-3">
                {[
                  "360-Grad-Panoramaaufnahmen in höchster Qualität",
                  "Interaktive Navigation durch alle Räume",
                  "Einbettbar auf Ihrer Website",
                  "Kompatibel mit allen Geräten und VR-Brillen",
                  "Messfunktion und Grundriss-Integration",
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <svg className="w-5 h-5 text-primary-600 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative rounded-2xl overflow-hidden min-h-[400px]">
              <Image
                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1600&q=80&auto=format&fit=crop"
                alt="Modernes Wohnzimmer – Beispiel für einen virtuellen HomeTour-Rundgang"
                fill
                priority
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 3D Visualization */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 relative rounded-2xl overflow-hidden min-h-[400px]">
              <Image
                src="https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1600&q=80&auto=format&fit=crop"
                alt="Fotorealistische 3D-Visualisierung eines modernen Gebäudes bei Tageslicht"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover rounded-2xl"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                3D-Visualisierung
              </h2>
              <p className="text-gray-600 mb-6">
                Fotorealistische 3D-Renderings erwecken Ihre Bauprojekte zum
                Leben - noch bevor der erste Stein gesetzt wird. Ideal für
                Exposés, Websites und Verkaufspräsentationen.
              </p>
              <ul className="space-y-3">
                {[
                  "Fotorealistische Außen- und Innenansichten",
                  "Tages- und Nachtszenen",
                  "Umgebungsintegration mit echten Standortdaten",
                  "Verschiedene Einrichtungsstile",
                  "Druckfähige Auflösung",
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <svg className="w-5 h-5 text-primary-600 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Virtual Staging */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Virtuelle Inszenierung
              </h2>
              <p className="text-gray-600 mb-6">
                Verwandeln Sie leere Räume in einladende Wohnwelten. Virtual
                Staging ist die kosteneffiziente Alternative zur physischen
                Möblierung und überzeugt Käufer auf den ersten Blick.
              </p>
              <ul className="space-y-3">
                {[
                  "Leere Räume professionell einrichten",
                  "Verschiedene Stilrichtungen wählbar",
                  "Schnelle Lieferung innerhalb 24-48h",
                  "Bis zu 80% günstiger als echtes Staging",
                  "Unbegrenzte Revisionen",
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <svg className="w-5 h-5 text-primary-600 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative rounded-2xl overflow-hidden min-h-[400px]">
              <Image
                src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=1600&q=80&auto=format&fit=crop"
                alt="Virtuell inszeniertes, stilvoll möbliertes Wohnzimmer"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Interesse geweckt?
          </h2>
          <p className="text-primary-100 text-lg mb-8 max-w-2xl mx-auto">
            Kontaktieren Sie uns für ein unverbindliches Beratungsgespräch. Wir
            finden die perfekte Lösung für Ihr Projekt.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-primary-700 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
          >
            Jetzt Kontakt aufnehmen
          </Link>
        </div>
      </section>
    </>
  );
}
