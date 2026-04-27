import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-primary-700 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">K</span>
              </div>
              <span className="text-xl font-bold text-white">Kila</span>
            </div>
            <p className="text-gray-400 max-w-md">
              Professionelle 3D-Visualisierungen und virtuelle Touren für Immobilien.
              Wir bringen Ihre Objekte zum Leben.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/services" className="hover:text-white transition-colors">Leistungen</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors">Über uns</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Kontakt</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">Kontakt</h3>
            <ul className="space-y-2">
              <li>info@kila.de</li>
              <li>Deutschland</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Kila. Alle Rechte vorbehalten.
          </p>
          <div className="flex space-x-6 mt-4 sm:mt-0">
            <Link href="/impressum" className="text-gray-500 hover:text-gray-300 text-sm transition-colors">
              Impressum
            </Link>
            <Link href="/datenschutz" className="text-gray-500 hover:text-gray-300 text-sm transition-colors">
              Datenschutz
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
