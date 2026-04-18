import { useContext } from 'react';
import LanguageContext from './LanguageContext';
import { ChevronDown } from 'lucide-react';

const HeroBanner = () => {
  const { t } = useContext(LanguageContext);
  // Imagen horizontal para desktop
  const heroImageDesktop = 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=1600&h=900&fit=crop';
  // Imagen vertical para móvil
  const heroImageMobile = 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=900&fit=crop';

  return (
    <section
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(135deg, rgba(0, 0, 0, 0.5) 0%, rgba(31, 41, 55, 0.6) 100%), url(${heroImageDesktop})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Overlay móvil con imagen vertical */}
      <div
        className="absolute inset-0 sm:hidden"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(0, 0, 0, 0.5) 0%, rgba(31, 41, 55, 0.6) 100%), url(${heroImageMobile})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      <div className="relative text-center text-white px-4 sm:px-6 md:px-12 max-w-3xl z-10">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
          {t.discoverWorld}
        </h1>

        <p className="text-base sm:text-lg md:text-xl text-gray-200 mb-10 font-light">
          {t.uniqueExpeditions}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-6 py-3 sm:px-8 sm:py-4 bg-orange-500 text-white font-bold rounded-lg hover:bg-red-500 transition transform hover:scale-105 shadow-lg min-h-[48px] flex items-center justify-center">
            {t.explorePackages}
          </button>
          <button className="px-6 py-3 sm:px-8 sm:py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-gray-900 transition min-h-[48px] flex items-center justify-center">
            {t.viewTestimonials}
          </button>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown size={32} className="text-white" />
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
