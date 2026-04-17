import { useContext } from 'react';
import LanguageContext from './LanguageContext';

const HeroBanner = () => {
  const { t } = useContext(LanguageContext);
  const heroImage = 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=1600&h=900&fit=crop';

  return (
    <section
      className="relative w-full h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(135deg, rgba(0, 0, 0, 0.5) 0%, rgba(31, 41, 55, 0.6) 100%), url(${heroImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      {/* Content */}
      <div className="text-center text-white px-6 sm:px-12 max-w-3xl">
        {/* Main Title */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
          {t.discoverWorld} <span className="text-red-500">Sami Sisa</span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl text-gray-200 mb-10 font-light">
          {t.uniqueExpeditions}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-8 py-4 bg-orange-500 text-white font-bold text-lg rounded-lg hover:bg-red-500 transition transform hover:scale-105 shadow-lg">
            {t.explorePackages}
          </button>
          <button className="px-8 py-4 border-2 border-white text-white font-bold text-lg rounded-lg hover:bg-white hover:text-gray-900 transition">
            {t.viewTestimonials}
          </button>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
