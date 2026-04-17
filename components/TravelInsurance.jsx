import { useEffect, useState } from 'react';
import PackageDetailModal from './PackageDetailModal';
import { getContent } from '../lib/contentManager';
import { Shield } from 'lucide-react';

export default function TravelInsurance() {
  const [plans, setPlans] = useState([]);
  const [selectedPlan, setSelectedPlan] = useState(null);

  useEffect(() => {
    const content = getContent();
    setPlans(content.insurance);
  }, []);

  return (
    <>
      <section className="bg-gray-900 text-white py-12 sm:py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Seguro de <span className="text-red-500">Viajes</span></h1>
          <p className="text-gray-300 text-lg sm:text-xl max-w-2xl">Viaja con seguridad. Cobertura médica completa y asistencia en el mundo entero.</p>
        </div>
      </section>

      <section className="py-12 sm:py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-2 mb-12">
            <Shield size={32} className="text-red-500" />
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Elige tu plan de protección</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan) => (
              <div key={plan.id} className={`rounded-lg overflow-hidden shadow-lg transition transform hover:scale-105 ${plan.recommended ? 'ring-4 ring-orange-500 scale-105 md:scale-110' : 'border-2 border-gray-200'}`}>
                {plan.recommended && <div className="bg-orange-500 text-white text-center py-2 font-bold">RECOMENDADO</div>}
                <div className={`p-8 ${plan.recommended ? 'bg-red-50' : 'bg-white'}`}>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-red-500">${plan.price}</span>
                    <span className="text-gray-600 ml-2">{plan.period}</span>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-orange-500 font-bold mr-3">✓</span>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button onClick={() => setSelectedPlan(plan)} className={`w-full py-3 font-bold rounded-lg transition ${plan.recommended ? 'bg-orange-500 text-white hover:bg-red-500' : 'bg-gray-200 text-gray-900 hover:bg-orange-500 hover:text-white'}`}>Contratar</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-orange-500 to-red-500 py-12 sm:py-16 px-6">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">¿Preguntas sobre nuestros planes?</h2>
          <p className="text-lg mb-8 text-gray-100">Nuestro equipo de expertos está disponible 24/7 para ayudarte.</p>
          <button className="px-8 py-4 bg-gray-900 text-white font-bold rounded-lg hover:bg-black transition transform hover:scale-105">Habla con un asesor</button>
        </div>
      </section>

      {selectedPlan && <PackageDetailModal item={selectedPlan} itemType="insurance" onClose={() => setSelectedPlan(null)} />}
    </>
  );
}
