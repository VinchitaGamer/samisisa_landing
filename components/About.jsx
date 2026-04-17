import { useContext } from 'react';
import LanguageContext from './LanguageContext';
import { Users, Globe, HeadphonesIcon } from 'lucide-react';

export default function About() {
  const { t } = useContext(LanguageContext);

  return (
    <main className="min-h-screen bg-white">
      <section className="bg-gray-900 text-white py-12 sm:py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            {t.aboutTitle} <span className="text-red-500">Sami Sisa</span>
          </h1>
          <p className="text-gray-300 text-lg sm:text-xl max-w-2xl">
            Más de 20 años conectando viajeros con experiencias extraordinarias en Sudamérica.
          </p>
        </div>
      </section>

      <section className="py-12 sm:py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">{t.aboutMission}</h2>
              <p className="text-gray-700 text-lg leading-relaxed">
                {t.aboutMissionDesc}
              </p>
            </div>
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop"
              alt="Tour guide"
              loading="lazy"
              className="rounded-lg shadow-lg"
            />
          </div>

          <div className="bg-gradient-to-r from-red-50 to-orange-50 p-12 rounded-lg">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">{t.aboutWhy}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe size={32} className="text-white" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Experiencia Global</h3>
                <p className="text-gray-700">{t.aboutExperts}</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users size={32} className="text-white" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Personalización</h3>
                <p className="text-gray-700">{t.aboutPersonalized}</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <HeadphonesIcon size={32} className="text-white" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Disponibilidad</h3>
                <p className="text-gray-700">{t.aboutSupport}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-orange-500 to-red-500 py-12 sm:py-16 px-6">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">{t.contact}</h2>
          <p className="text-lg mb-8">📧 info@samisisa.com • 📱 +591 60699494 • 📍 La Paz, Bolivia</p>
          <button className="px-8 py-4 bg-gray-900 text-white font-bold rounded-lg hover:bg-black transition transform hover:scale-105">
            Enviar Mensaje
          </button>
        </div>
      </section>
    </main>
  );
}
