import { useEffect, useState } from 'react';
import PackageCard from './PackageCard';
import PackageDetailModal from './PackageDetailModal';
import { getContent } from '../lib/contentManager';
import { MessageCircle } from 'lucide-react';

export default function NationalPackages() {
  const [packages, setPackages] = useState([]);
  const [selectedPackage, setSelectedPackage] = useState(null);

  useEffect(() => {
    const content = getContent();
    setPackages(content.packages.national);
  }, []);

  return (
    <>
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

      <section className="py-12 sm:py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {packages.map((pkg) => (
              <PackageCard
                key={pkg.id}
                image={pkg.image}
                title={pkg.title}
                description={pkg.description}
                price={pkg.price}
                onViewDetails={() => setSelectedPackage(pkg)}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-red-500 to-orange-500 py-12 sm:py-16 px-6">
        <div className="max-w-4xl mx-auto text-center text-white">
          <div className="flex justify-center mb-4">
            <MessageCircle size={40} />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">¿No encuentras lo que buscas?</h2>
          <p className="text-lg mb-8 text-gray-100">Diseñamos paquetes personalizados según tus intereses y presupuesto.</p>
          <button className="px-8 py-4 bg-gray-900 text-white font-bold rounded-lg hover:bg-black transition transform hover:scale-105">
            Contacta con nosotros
          </button>
        </div>
      </section>

      {selectedPackage && (
        <PackageDetailModal
          item={selectedPackage}
          itemType="package"
          onClose={() => setSelectedPackage(null)}
        />
      )}
    </>
  );
}
