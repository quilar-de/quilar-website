import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Datenschutzerklärung",
  description:
    "Datenschutzerklärung gemäß DSGVO für kila.de – Informationen zur Verarbeitung Ihrer personenbezogenen Daten.",
  robots: { index: false, follow: false },
};

export default function DatenschutzPage() {
  const lastUpdated = "13. Juni 2025";

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Datenschutzerklärung
            </h1>
            <p className="text-gray-500 text-sm">
              Zuletzt aktualisiert: {lastUpdated}
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-10">

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                1. Datenschutz auf einen Blick
              </h2>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Allgemeine Hinweise
              </h3>
              <p className="text-gray-700">
                Die folgenden Hinweise geben einen einfachen Überblick darüber,
                was mit Ihren personenbezogenen Daten passiert, wenn Sie diese
                Website besuchen. Personenbezogene Daten sind alle Daten, mit
                denen Sie persönlich identifiziert werden können. Ausführliche
                Informationen zum Thema Datenschutz entnehmen Sie unserer unter
                diesem Text aufgeführten Datenschutzerklärung.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                2. Verantwortliche Stelle
              </h2>
              <p className="text-gray-700 mb-4">
                Die verantwortliche Stelle für die Datenverarbeitung auf dieser
                Website ist:
              </p>
              <div className="text-gray-700 space-y-1 mb-4">
                <p className="font-semibold">Kila</p>
                <p>[Straße und Hausnummer]</p>
                <p>[PLZ] [Stadt]</p>
                <p>Deutschland</p>
                <p>
                  E-Mail:{" "}
                  <a
                    href="mailto:info@kila.de"
                    className="text-primary-600 hover:text-primary-700"
                  >
                    info@kila.de
                  </a>
                </p>
              </div>
              <p className="text-gray-700">
                Verantwortliche Stelle ist die natürliche oder juristische
                Person, die allein oder gemeinsam mit anderen über die Zwecke
                und Mittel der Verarbeitung von personenbezogenen Daten (z. B.
                Namen, E-Mail-Adressen o. Ä.) entscheidet.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                3. Welche Daten wir erheben und wie
              </h2>

              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Kontaktformular
              </h3>
              <p className="text-gray-700 mb-4">
                Wenn Sie uns über das Kontaktformular auf dieser Website eine
                Anfrage zukommen lassen, werden Ihre Angaben aus dem
                Anfrageformular inklusive der von Ihnen dort angegebenen
                Kontaktdaten (Vorname, Nachname, E-Mail-Adresse, Unternehmen,
                gewünschte Leistung, Nachricht) zum Zweck der Bearbeitung der
                Anfrage und für den Fall von Anschlussfragen bei uns
                gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung
                weiter.
              </p>
              <p className="text-gray-700 mb-6">
                Rechtsgrundlage: Art. 6 Abs. 1 lit. b DSGVO (Vertragsanbahnung)
                sowie Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an der
                Beantwortung von Anfragen).
              </p>

              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Server-Log-Dateien
              </h3>
              <p className="text-gray-700 mb-4">
                Der Provider dieser Website erhebt und speichert automatisch
                Informationen in sogenannten Server-Log-Dateien, die Ihr Browser
                automatisch an uns übermittelt. Dies sind:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-1">
                <li>Browsertyp und Browserversion</li>
                <li>Verwendetes Betriebssystem</li>
                <li>Referrer URL</li>
                <li>Hostname des zugreifenden Rechners</li>
                <li>Uhrzeit der Serveranfrage</li>
                <li>IP-Adresse</li>
              </ul>
              <p className="text-gray-700">
                Diese Daten werden nicht mit anderen Datenquellen
                zusammengeführt. Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO
                (berechtigtes Interesse am sicheren und stabilen Betrieb der
                Website).
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                4. Rechtsgrundlagen der Verarbeitung (DSGVO Art. 6)
              </h2>
              <p className="text-gray-700 mb-4">
                Wir verarbeiten personenbezogene Daten nur, wenn eine der
                folgenden Rechtsgrundlagen vorliegt:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>
                  <span className="font-medium">Art. 6 Abs. 1 lit. a DSGVO</span> –
                  Einwilligung der betroffenen Person
                </li>
                <li>
                  <span className="font-medium">Art. 6 Abs. 1 lit. b DSGVO</span> –
                  Erfüllung eines Vertrags oder vorvertragliche Maßnahmen
                </li>
                <li>
                  <span className="font-medium">Art. 6 Abs. 1 lit. c DSGVO</span> –
                  Erfüllung einer rechtlichen Verpflichtung
                </li>
                <li>
                  <span className="font-medium">Art. 6 Abs. 1 lit. f DSGVO</span> –
                  Wahrung berechtigter Interessen des Verantwortlichen
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                5. Speicherdauer
              </h2>
              <p className="text-gray-700">
                Soweit innerhalb dieser Datenschutzerklärung keine speziellere
                Speicherdauer genannt wurde, verbleiben Ihre personenbezogenen
                Daten bei uns, bis der Zweck für die Datenverarbeitung entfällt.
                Wenn Sie ein berechtigtes Löschersuchen geltend machen oder eine
                Einwilligung zur Datenverarbeitung widerrufen, werden Ihre Daten
                gelöscht, sofern wir keine anderen rechtlich zulässigen Gründe
                für die Speicherung Ihrer personenbezogenen Daten haben (z. B.
                steuer- oder handelsrechtliche Aufbewahrungsfristen); im
                letztgenannten Fall erfolgt die Löschung nach Fortfall dieser
                Gründe.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                6. Ihre Rechte als betroffene Person
              </h2>
              <p className="text-gray-700 mb-4">
                Sie haben gegenüber uns folgende Rechte hinsichtlich der Sie
                betreffenden personenbezogenen Daten:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
                <li>Recht auf Auskunft (Art. 15 DSGVO)</li>
                <li>Recht auf Berichtigung (Art. 16 DSGVO)</li>
                <li>Recht auf Löschung (Art. 17 DSGVO)</li>
                <li>
                  Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO)
                </li>
                <li>Recht auf Datenübertragbarkeit (Art. 20 DSGVO)</li>
                <li>Recht auf Widerspruch (Art. 21 DSGVO)</li>
                <li>
                  Recht auf Widerruf einer erteilten Einwilligung (Art. 7 Abs.
                  3 DSGVO)
                </li>
              </ul>
              <p className="text-gray-700 mb-4">
                Zur Ausübung Ihrer Rechte wenden Sie sich bitte an:{" "}
                <a
                  href="mailto:info@kila.de"
                  className="text-primary-600 hover:text-primary-700"
                >
                  info@kila.de
                </a>
              </p>
              <p className="text-gray-700">
                Außerdem haben Sie das Recht, sich bei einer
                Datenschutz-Aufsichtsbehörde über die Verarbeitung Ihrer
                personenbezogenen Daten durch uns zu beschweren. Die zuständige
                Aufsichtsbehörde richtet sich nach dem Bundesland Ihres
                Wohnsitzes oder Aufenthaltsortes bzw. dem Standort unseres
                Unternehmens.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                7. SSL- bzw. TLS-Verschlüsselung
              </h2>
              <p className="text-gray-700">
                Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der
                Übertragung vertraulicher Inhalte, wie zum Beispiel
                Bestellungen oder Anfragen, die Sie an uns als Seitenbetreiber
                senden, eine SSL- bzw. TLS-Verschlüsselung. Eine verschlüsselte
                Verbindung erkennen Sie daran, dass die Adresszeile des Browsers
                von „http://" auf „https://" wechselt und an dem Schloss-Symbol
                in Ihrer Browserzeile.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                8. Cookies
              </h2>
              <p className="text-gray-700">
                Diese Website verwendet keine Cookies, die über technisch
                notwendige Cookies hinausgehen. Es werden keine
                Tracking-Cookies oder Cookies von Drittanbietern eingesetzt.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                9. Änderungen dieser Datenschutzerklärung
              </h2>
              <p className="text-gray-700">
                Wir behalten uns das Recht vor, diese Datenschutzerklärung
                anzupassen, damit sie stets den aktuellen rechtlichen
                Anforderungen entspricht oder um Änderungen unserer Leistungen
                in der Datenschutzerklärung umzusetzen, z. B. bei der
                Einführung neuer Services. Für Ihren erneuten Besuch gilt dann
                die neue Datenschutzerklärung.
              </p>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
