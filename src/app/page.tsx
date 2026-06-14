import Link from "next/link";

// Escape `<` to prevent any chance of breaking out of the <script> tag
// via embedded `</script>` sequences in JSON-LD strings.
const toJsonLd = (data: unknown) =>
  JSON.stringify(data).replace(/</g, "\\u003c");

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://quilar.de/#organization",
  "name": "Quilar",
  "description": "Professionelle 3D-Visualisierungen, virtuelle Rundgänge und HomeTour-Erlebnisse für Immobilien. Bringen Sie Ihre Objekte zum Leben mit Quilar.",
  "url": "https://quilar.de",
  "logo": "https://quilar.de/favicon.ico",
  "email": "info@quilar.de",
  "areaServed": {
    "@type": "Country",
    "name": "Germany"
  }
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: toJsonLd(organizationJsonLd) }}
      />
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

      {/* Why Quilar Section */}
      <section className="py-16 bg-primary-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
              Warum Quilar?
            </h2>
            <p className="text-primary-100 max-w-xl mx-auto">
              Professionelle Visualisierungen, die überzeugen – vom ersten Entwurf bis zur fertigen Präsentation.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="w-12 h-12 bg-primary-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3l14 9-14 9V3z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-1">Schnelle Umsetzung</h3>
              <p className="text-primary-100 text-sm">Effiziente Workflows für termingerechte Lieferung</p>
            </div>
            <div>
              <div className="w-12 h-12 bg-primary-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-1">Fotorealistische Qualität</h3>
              <p className="text-primary-100 text-sm">Renderings, die Käufer und Investoren begeistern</p>
            </div>
            <div>
              <div className="w-12 h-12 bg-primary-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-1">Persönliche Betreuung</h3>
              <p className="text-primary-100 text-sm">Direkter Ansprechpartner von Anfang bis Ende</p>
            </div>
            <div>
              <div className="w-12 h-12 bg-primary-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-1">Maßgeschneidert</h3>
              <p className="text-primary-100 text-sm">Jedes Projekt individuell nach Ihren Anforderungen</p>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Preview Section */}
      {/* TODO: Replace placeholder cards with real project examples (before/after images or rendered screenshots) */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Ausgewählte Projekte
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Ein Einblick in unsere Arbeit – von der Immobilienvisualisierung bis zum virtuellen Rundgang.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow bg-gray-100 aspect-[4/3] flex items-center justify-center">
              <div className="text-center p-8">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <p className="text-gray-500 text-sm font-medium">Projektbild folgt</p>
                <p className="text-gray-400 text-xs mt-1">Wohnanlage — 3D-Visualisierung</p>
              </div>
            </div>
            <div className="group rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow bg-gray-100 aspect-[4/3] flex items-center justify-center">
              <div className="text-center p-8">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <p className="text-gray-500 text-sm font-medium">Projektbild folgt</p>
                <p className="text-gray-400 text-xs mt-1">Gewerbeimmobilie — HomeTour</p>
              </div>
            </div>
            <div className="group rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow bg-gray-100 aspect-[4/3] flex items-center justify-center">
              <div className="text-center p-8">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <p className="text-gray-500 text-sm font-medium">Projektbild folgt</p>
                <p className="text-gray-400 text-xs mt-1">Einfamilienhaus — Virtuelle Inszenierung</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      {/* TODO: Replace placeholder quotes with real customer testimonials (name, company, role) */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Das sagen unsere Kunden
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Echte Erfahrungen aus erfolgreichen Projekten.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <div className="flex mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <blockquote className="text-gray-700 text-lg italic mb-6">
                „[Kundenzitat einfügen – bitte durch echtes Testimonial ersetzen]"
              </blockquote>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center text-primary-600 font-bold text-sm">
                  ?
                </div>
                <div>
                  <div className="font-semibold text-gray-900">[Name des Kunden]</div>
                  <div className="text-gray-500 text-sm">[Position], [Unternehmen]</div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <div className="flex mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <blockquote className="text-gray-700 text-lg italic mb-6">
                „[Kundenzitat einfügen – bitte durch echtes Testimonial ersetzen]"
              </blockquote>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center text-primary-600 font-bold text-sm">
                  ?
                </div>
                <div>
                  <div className="font-semibold text-gray-900">[Name des Kunden]</div>
                  <div className="text-gray-500 text-sm">[Position], [Unternehmen]</div>
                </div>
              </div>
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
