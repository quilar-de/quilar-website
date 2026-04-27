import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Leistungen",
  description:
    "Unsere Leistungen: HomeTour virtuelle Rundgänge, 3D-Visualisierungen, virtuelle Inszenierung und Architekturvisualisierung.",
};

export default function ServicesPage() {
  return (
    <>
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
            <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-2xl p-12 flex items-center justify-center min-h-[400px]">
              <div className="text-center">
                <svg className="w-24 h-24 text-primary-300 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
                <p className="text-primary-600 font-medium">HomeTour Demo</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3D Visualization */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl p-12 flex items-center justify-center min-h-[400px]">
              <div className="text-center">
                <svg className="w-24 h-24 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
                <p className="text-gray-500 font-medium">3D Rendering Beispiel</p>
              </div>
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
            <div className="bg-gradient-to-br from-amber-50 to-orange-100 rounded-2xl p-12 flex items-center justify-center min-h-[400px]">
              <div className="text-center">
                <svg className="w-24 h-24 text-amber-300 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <p className="text-amber-600 font-medium">Staging Vorher/Nachher</p>
              </div>
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
