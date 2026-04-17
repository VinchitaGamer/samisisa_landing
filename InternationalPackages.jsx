import PackageCard from './PackageCard';

const INTERNATIONAL_PACKAGES = [
  {
    id: 1,
    title: 'Punta Cana',
    description: 'Playas paradisíacas en República Dominicana. Resorts de lujo, aguas cristalinas y aventuras acuáticas inolvidables.',
    price: 1800,
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop',
  },
  {
    id: 2,
    title: 'Cancún',
    description: 'Destino turístico de clase mundial en México. Playas blancas, cenotes secretos y ruinas mayas en la jungla.',
    price: 1600,
    image: 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=800&h=600&fit=crop',
  },
  {
    id: 3,
    title: 'Orlando',
    description: 'Diversión sin límites. Disney World, Universal Studios y parques temáticos de clase mundial para toda la familia.',
    price: 2200,
    image: 'https://images.unsplash.com/photo-1524985069026-dd778a71c7b4?w=800&h=600&fit=crop',
  },
];

export default function InternationalPackages() {
  const handleBooking = (packageTitle) => {
    alert(`¡Gracias por tu interés en ${packageTitle}! Pronto podrás reservar.`);
  };

  return (
    <main className="min-h-screen bg-white">
      {/* Header Section */}
      <section className="bg-gray-900 text-white py-12 sm:py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            Paquetes <span className="text-orange-500">Internacionales</span>
          </h1>
          <p className="text-gray-300 text-lg sm:text-xl max-w-2xl">
            Explora destinos de ensueño alrededor del mundo. Experiencias premium que transformarán tus vacaciones.
          </p>
        </div>
      </section>

      {/* Packages Grid */}
      <section className="py-12 sm:py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {INTERNATIONAL_PACKAGES.map((pkg) => (
              <PackageCard
                key={pkg.id}
                image={pkg.image}
                title={pkg.title}
                description={pkg.description}
                price={pkg.price}
                onBooking={() => handleBooking(pkg.title)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-orange-500 to-red-500 py-12 sm:py-16 px-6">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Viaja con confianza</h2>
          <p className="text-lg mb-8 text-gray-100">Incluye asistencia 24/7, seguros y cambios flexibles en todos nuestros paquetes internacionales.</p>
          <button className="px-8 py-4 bg-gray-900 text-white font-bold rounded-lg hover:bg-black transition transform hover:scale-105">
            Más información
          </button>
        </div>
      </section>
    </main>
  );
}
