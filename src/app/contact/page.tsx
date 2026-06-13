import type { Metadata } from "next";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Kontakt",
  description:
    "Kontaktieren Sie Quilar für ein unverbindliches Beratungsgespräch zu 3D-Visualisierungen und virtuellen Touren.",
  openGraph: {
    title: "Kontakt | Quilar",
    description:
      "Starten Sie Ihr 3D-Visualisierungsprojekt — sprechen Sie uns an für ein unverbindliches Beratungsgespräch.",
    url: "/contact",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kontakt | Quilar",
    description:
      "Starten Sie Ihr 3D-Visualisierungsprojekt — sprechen Sie uns an für ein unverbindliches Beratungsgespräch.",
  },
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Kontakt
            </h1>
            <p className="text-xl text-gray-600">
              Haben Sie Fragen oder möchten ein Projekt besprechen? Wir freuen
              uns auf Ihre Nachricht.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            {/* Form */}
            <div className="lg:col-span-2">
              <ContactForm />
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Kontaktdaten
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <svg className="w-5 h-5 text-primary-600 mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <div>
                      <p className="text-gray-900 font-medium">E-Mail</p>
                      <a href="mailto:info@quilar.de" className="text-primary-600 hover:text-primary-700">
                        info@quilar.de
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <svg className="w-5 h-5 text-primary-600 mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <div>
                      <p className="text-gray-900 font-medium">Standort</p>
                      <p className="text-gray-600">Deutschland</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-2xl p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Schnelle Antwort
                </h3>
                <p className="text-gray-600 text-sm">
                  Wir antworten in der Regel innerhalb von 24 Stunden auf Ihre
                  Anfrage. Für dringende Anfragen rufen Sie uns gerne an.
                </p>
              </div>

              <div className="bg-primary-50 rounded-2xl p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Kostenlose Beratung
                </h3>
                <p className="text-gray-600 text-sm">
                  Unser Erstgespräch ist immer kostenlos und unverbindlich. Wir
                  beraten Sie gerne zu den besten Optionen für Ihr Projekt.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
