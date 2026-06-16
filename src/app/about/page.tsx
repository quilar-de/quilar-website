import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Über uns",
  description:
    "Erfahren Sie mehr über Quilar - Ihr Partner für professionelle 3D-Visualisierungen und virtuelle Immobilientouren.",
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Über Quilar
            </h1>
            <p className="text-xl text-gray-600">
              Wir verbinden Technologie und Kreativität, um Immobilien digital
              erlebbar zu machen.
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Unsere Mission
              </h2>
              <p className="text-gray-600 mb-4">
                Bei Quilar glauben wir daran, dass die Zukunft der
                Immobilienpräsentation digital ist. Unsere Mission ist es,
                Immobilienunternehmen mit modernster Visualisierungstechnologie
                auszustatten, die den Verkaufsprozess beschleunigt und das
                Kundenerlebnis revolutioniert.
              </p>
              <p className="text-gray-600 mb-4">
                Gegründet mit der Vision, die Lücke zwischen physischer
                Besichtigung und digitaler Präsentation zu schließen, entwickeln
                wir Lösungen, die Interessenten begeistern und Verkäufern einen
                echten Wettbewerbsvorteil verschaffen.
              </p>
              <p className="text-gray-600">
                Mit unserem Flagship-Produkt HomeTour ermöglichen wir es,
                Immobilien jederzeit und von überall aus virtuell zu begehen -
                so authentisch, als wäre man vor Ort.
              </p>
            </div>
            <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-2xl p-12 flex items-center justify-center min-h-[350px]">
              <div className="text-center">
                <div className="w-24 h-24 bg-primary-200 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-12 h-12 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zM12.75 12a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                  </svg>
                </div>
                <p className="text-primary-700 font-medium">Team Quilar</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Unsere Werte
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Innovation
              </h3>
              <p className="text-gray-600">
                Wir nutzen die neueste Technologie, um stets die beste Qualität
                und modernste Lösungen zu liefern.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Qualität
              </h3>
              <p className="text-gray-600">
                Jedes Projekt wird mit höchster Sorgfalt und Liebe zum Detail
                umgesetzt. Kompromisse gibt es bei uns nicht.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Partnerschaft
              </h3>
              <p className="text-gray-600">
                Wir verstehen uns als Partner unserer Kunden und arbeiten eng
                zusammen, um die besten Ergebnisse zu erzielen.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Lassen Sie uns zusammenarbeiten
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Haben Sie ein Projekt im Sinn? Wir freuen uns darauf, von Ihnen zu
            hören.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-primary-600 text-white px-8 py-4 rounded-lg hover:bg-primary-700 transition-colors font-semibold"
          >
            Kontakt aufnehmen
          </Link>
        </div>
      </section>
    </>
  );
}
