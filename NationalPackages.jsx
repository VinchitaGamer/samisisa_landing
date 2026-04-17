import PackageCard from './PackageCard';

const NATIONAL_PACKAGES = [
  {
    id: 1,
    title: 'Salar de Uyuni',
    description: 'Contempla el espejo más grande del mundo en Bolivia. Experiencia única bajo las estrellas en el desierto blanco más espectacular de Sudamérica.',
    price: 1200,
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop',
  },
  {
    id: 2,
    title: 'Copacabana',
    description: 'Playas doradas en el lago Titicaca, Bolivia. Conecta con la cultura andina ancestral y relájate en pueblos con encanto colonial.',
    price: 850,
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&h=600&fit=crop',
  },
  {
    id: 3,
    title: 'Tiwanaku',
    description: 'Ruinas milenarias de la civilización preincaica. Sumérgete en la historia ancestral a 3,850 metros de altura.',
    price: 650,
    image: 'https://images.unsplash.com/photo-1518639023910-742baa131fcb?w=800&h=600&fit=crop',
  },
];

export default function NationalPackages() {
  const handleBooking = (packageTitle) => {
    alert(`¡Gracias por tu interés en ${packageTitle}! Pronto podrás reservar.`);
  };

  return (
    <main className="min-h-screen bg-white">
      {/* Header Section */}
      <section className="bg-gray-900 text-white py-12 sm:py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            Paquetes <span className="text-red-500">Nacionales</span>
          </h1>
          <p className="text-gray-300 text-lg sm:text-xl max-w-2xl">
            Descubre las maravillas de Sudamérica. Desde los desiertos más espectaculares hasta antiguos sitios arqueológicos.
          </p>
        </div>
      </section>

      {/* Packages Grid */}
      <section className="py-12 sm:py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {NATIONAL_PACKAGES.map((pkg) => (
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
      <section className="bg-gradient-to-r from-red-500 to-orange-500 py-12 sm:py-16 px-6">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">¿No encuentras lo que buscas?</h2>
          <p className="text-lg mb-8 text-gray-100">Diseñamos paquetes personalizados según tus intereses y presupuesto.</p>
          <button className="px-8 py-4 bg-gray-900 text-white font-bold rounded-lg hover:bg-black transition transform hover:scale-105">
            Contacta con nosotros
          </button>
        </div>
      </section>
    </main>
  );
}
