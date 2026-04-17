import { useState, useContext } from 'react';
import { useRouter } from 'next/router';
import LanguageContext from './LanguageContext';

const Layout = ({ children }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { language, setLanguage, t } = useContext(LanguageContext);
  const router = useRouter();

  const navItems = [
    { label: t.home, path: '/' },
    { label: t.national, path: '/national' },
    { label: t.international, path: '/international' },
    { label: t.flights, path: '/flights' },
    { label: t.insurance, path: '/insurance' },
    { label: t.concerts, path: '/concerts' },
    { label: t.about, path: '/about' }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Header Sticky */}
      <header className="sticky top-0 z-50 bg-white border-b-2 border-gray-900 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          {/* Logo */}
          <button
            onClick={() => router.push('/')}
            className="flex items-center gap-2 hover:opacity-80 transition"
          >
            <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">SS</span>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-gray-900 font-bold text-lg">Sami Sisa</h1>
              <p className="text-orange-500 text-xs font-semibold">Expeditions</p>
            </div>
          </button>

          {/* Nav Desktop */}
          <nav className="hidden lg:flex gap-8 items-center">
            {navItems.map((item, i) => (
              <button
                key={i}
                onClick={() => router.push(item.path)}
                className={`text-sm font-medium transition ${
                  router.pathname === item.path
                    ? 'text-red-500 border-b-2 border-red-500'
                    : 'text-gray-900 hover:text-red-500'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Language + Hamburger */}
          <div className="flex items-center gap-4">
            <div className="flex gap-2 border-l-2 border-gray-900 pl-4">
              {['ES', 'EN', 'PT'].map((l) => (
                <button
                  key={l}
                  onClick={() => setLanguage(l)}
                  className={`text-xs font-bold px-2 py-1 rounded transition ${
                    language === l ? 'bg-red-500 text-white' : 'text-gray-900 hover:bg-orange-500 hover:text-white'
                  }`}
                >
                  {l}
                </button>
              ))}
            </div>

            {/* Hamburger Mobile */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden p-2 text-gray-900 hover:bg-red-500 hover:text-white rounded transition"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <nav className="lg:hidden bg-gray-900 text-white px-4 py-4 flex flex-col gap-2">
            {navItems.map((item, i) => (
              <button
                key={i}
                onClick={() => {
                  router.push(item.path);
                  setMenuOpen(false);
                }}
                className={`text-left py-2 border-b border-gray-700 transition ${
                  router.pathname === item.path
                    ? 'text-orange-500'
                    : 'hover:text-orange-500'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-1">{children}</main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Column 1: Brand */}
          <div>
            <h3 className="text-lg font-bold text-red-500 mb-4">Sami Sisa Expeditions</h3>
            <p className="text-gray-400 text-sm">Descubre el mundo con nosotros.</p>
          </div>

          {/* Column 2: Links */}
          <div>
            <h4 className="text-sm font-bold text-orange-500 mb-4">Enlaces</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-orange-500 transition">Paquetes</a></li>
              <li><a href="#" className="hover:text-orange-500 transition">Contacto</a></li>
              <li><a href="#" className="hover:text-orange-500 transition">Blog</a></li>
            </ul>
          </div>

          {/* Column 3: Social */}
          <div>
            <h4 className="text-sm font-bold text-orange-500 mb-4">Síguenos</h4>
            <div className="flex gap-4">
              {['F', 'I', 'T'].map((icon) => (
                <a
                  key={icon}
                  href="#"
                  className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center hover:bg-orange-500 transition text-white text-xs font-bold"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400 text-xs">
          <p>&copy; 2026 Sami Sisa Expeditions. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
