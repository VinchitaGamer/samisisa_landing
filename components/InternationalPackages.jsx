import { useEffect, useState } from 'react';
import PackageCard from './PackageCard';
import PackageDetailModal from './PackageDetailModal';
import { getContent } from '../lib/contentManager';
import { Globe } from 'lucide-react';

export default function InternationalPackages() {
  const [packages, setPackages] = useState([]);
  const [selectedPackage, setSelectedPackage] = useState(null);

  useEffect(() => {
    const content = getContent();
    setPackages(content.packages.international);
  }, []);

  return (
    <>
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

      <section className="bg-gradient-to-r from-orange-500 to-red-500 py-12 sm:py-16 px-6">
        <div className="max-w-4xl mx-auto text-center text-white">
          <div className="flex justify-center mb-4">
            <Globe size={40} />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Viaja con confianza</h2>
          <p className="text-lg mb-8 text-gray-100">Incluye asistencia 24/7, seguros y cambios flexibles en todos nuestros paquetes internacionales.</p>
          <button className="px-8 py-4 bg-gray-900 text-white font-bold rounded-lg hover:bg-black transition transform hover:scale-105">
            Más información
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
