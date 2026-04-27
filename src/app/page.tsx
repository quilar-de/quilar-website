import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-primary-950 to-gray-900 text-white min-h-[90vh] flex items-center">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Immobilien erleben,{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-primary-200">
                bevor sie entstehen.
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl">
              Wir erstellen fotorealistische 3D-Visualisierungen und interaktive
              virtuelle Touren, die Ihre Immobilienprojekte zum Leben erwecken.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="bg-primary-600 text-white px-8 py-4 rounded-lg hover:bg-primary-500 transition-colors font-semibold text-center"
              >
                Jetzt anfragen
              </Link>
              <Link
                href="/services"
                className="border border-white/20 text-white px-8 py-4 rounded-lg hover:bg-white/10 transition-colors font-semibold text-center"
              >
                Unsere Leistungen
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Unsere Leistungen
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Von der ersten Skizze bis zum fertigen virtuellen Rundgang - wir
              begleiten Sie auf dem gesamten Weg.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                HomeTour
              </h3>
              <p className="text-gray-600">
                Interaktive 360-Grad-Rundgänge durch Ihre Immobilie. Besucher
                erleben jeden Raum, als wären sie vor Ort.
              </p>
            </div>

            {/* Service 2 */}
            <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                3D-Visualisierung
              </h3>
              <p className="text-gray-600">
                Fotorealistische Renderings Ihrer Projekte. Perfekt für
                Marketing, Verkauf und Projektpräsentationen.
              </p>
            </div>

            {/* Service 3 */}
            <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Virtuelle Inszenierung
              </h3>
              <p className="text-gray-600">
                Leere Räume virtuell einrichten und gestalten. Zeigen Sie das
                volle Potenzial Ihrer Immobilie.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-primary-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl sm:text-4xl font-bold text-white mb-1">500+</div>
              <div className="text-primary-100">Projekte</div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-bold text-white mb-1">98%</div>
              <div className="text-primary-100">Zufriedenheit</div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-bold text-white mb-1">24h</div>
              <div className="text-primary-100">Lieferzeit</div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-bold text-white mb-1">50+</div>
              <div className="text-primary-100">Partner</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Bereit für den nächsten Schritt?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Lassen Sie uns gemeinsam Ihre Immobilien in beeindruckende virtuelle
            Erlebnisse verwandeln.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-primary-600 text-white px-8 py-4 rounded-lg hover:bg-primary-700 transition-colors font-semibold"
          >
            Kostenloses Beratungsgespräch
          </Link>
        </div>
      </section>
    </>
  );
}
