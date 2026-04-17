const INSURANCE_PLANS = [
  {
    id: 1,
    name: 'Plan Básico',
    price: 25,
    period: 'por día',
    recommended: false,
    features: [
      'Cobertura médica hasta $10,000',
      'Repatriación de emergencia',
      'Pérdida de equipaje',
      'Asistencia 24/7',
      'Cancelación de viaje hasta $500',
    ],
  },
  {
    id: 2,
    name: 'Plan Premium',
    price: 50,
    period: 'por día',
    recommended: true,
    features: [
      'Cobertura médica hasta $50,000',
      'Repatriación y evacuación aérea',
      'Pérdida y retraso de equipaje',
      'Asistencia 24/7 en 12 idiomas',
      'Cancelación de viaje hasta $2,000',
      'Actividades de aventura incluidas',
      'Cobertura COVID-19',
    ],
  },
  {
    id: 3,
    name: 'Cobertura Total',
    price: 75,
    period: 'por día',
    recommended: false,
    features: [
      'Cobertura médica ilimitada',
      'Repatriación VIP y evacuación',
      'Pérdida y robo de equipaje',
      'Asistencia 24/7 en 15 idiomas',
      'Cancelación de viaje hasta $5,000',
      'Todas las actividades de aventura',
      'Cobertura de viaje de negocios',
      'Acompañante médico incluido',
    ],
  },
];

export default function TravelInsurance() {
  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <section className="bg-gray-900 text-white py-12 sm:py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            Seguro de <span className="text-red-500">Viajes</span>
          </h1>
          <p className="text-gray-300 text-lg sm:text-xl max-w-2xl">
            Viaja con seguridad. Cobertura médica completa y asistencia en el mundo entero.
          </p>
        </div>
      </section>

      {/* Plans Comparison */}
      <section className="py-12 sm:py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-12 text-center">
            Elige tu plan de protección
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {INSURANCE_PLANS.map((plan) => (
              <div
                key={plan.id}
                className={`rounded-lg overflow-hidden shadow-lg transition transform hover:scale-105 ${
                  plan.recommended
                    ? 'ring-4 ring-orange-500 scale-105 md:scale-110'
                    : 'border-2 border-gray-200'
                }`}
              >
                {/* Recommended Badge */}
                {plan.recommended && (
                  <div className="bg-orange-500 text-white text-center py-2 font-bold">
                    ⭐ RECOMENDADO
                  </div>
                )}

                {/* Plan Content */}
                <div className={`p-8 ${plan.recommended ? 'bg-red-50' : 'bg-white'}`}>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-red-500">${plan.price}</span>
                    <span className="text-gray-600 ml-2">{plan.period}</span>
                  </div>

                  {/* Features */}
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-orange-500 font-bold mr-3">✓</span>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <button
                    className={`w-full py-3 font-bold rounded-lg transition ${
                      plan.recommended
                        ? 'bg-orange-500 text-white hover:bg-red-500'
                        : 'bg-gray-200 text-gray-900 hover:bg-orange-500 hover:text-white'
                    }`}
                  >
                    Contratar
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-orange-500 to-red-500 py-12 sm:py-16 px-6">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">¿Preguntas sobre nuestros planes?</h2>
          <p className="text-lg mb-8 text-gray-100">Nuestro equipo de expertos está disponible 24/7 para ayudarte.</p>
          <button className="px-8 py-4 bg-gray-900 text-white font-bold rounded-lg hover:bg-black transition transform hover:scale-105">
            Habla con un asesor
          </button>
        </div>
      </section>
    </main>
  );
}
