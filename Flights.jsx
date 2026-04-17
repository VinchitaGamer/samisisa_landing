import { useState } from 'react';

const FLIGHT_ROUTES = [
  {
    id: 1,
    origin: 'La Paz',
    destination: 'Punta Cana',
    type: 'Internacional',
    airline: 'AeroSudamérica',
    price: 450,
    duration: '6h 30m',
    image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800&h=600&fit=crop',
  },
  {
    id: 2,
    origin: 'Santa Cruz',
    destination: 'Cancún',
    type: 'Internacional',
    airline: 'LatinoAir',
    price: 520,
    duration: '5h 45m',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&h=600&fit=crop',
  },
  {
    id: 3,
    origin: 'Cochabamba',
    destination: 'Oruro',
    type: 'Nacional',
    airline: 'AeroSudamérica',
    price: 120,
    duration: '1h 15m',
    image: 'https://images.unsplash.com/photo-1517048676732-d65bc937abf2?w=800&h=600&fit=crop',
  },
  {
    id: 4,
    origin: 'La Paz',
    destination: 'Iquitos',
    type: 'Nacional',
    airline: 'PumaAir',
    price: 180,
    duration: '2h 30m',
    image: 'https://images.unsplash.com/photo-1519452575417-564c1401ecc0?w=800&h=600&fit=crop',
  },
];

export default function Flights() {
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');
  const [date, setDate] = useState('');

  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <section className="bg-gray-900 text-white py-12 sm:py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            Pasajes <span className="text-orange-500">Aéreos</span>
          </h1>
          <p className="text-gray-300 text-lg sm:text-xl max-w-2xl">
            Vuelos directos a los destinos más hermosos de Sudamérica y el Caribe.
          </p>
        </div>
      </section>

      {/* Search Form */}
      <section className="bg-gradient-to-br from-red-500 to-orange-500 py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-lg shadow-xl p-6 sm:p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Busca tu vuelo</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">Origen</label>
                <input
                  type="text"
                  value={origin}
                  onChange={(e) => setOrigin(e.target.value)}
                  placeholder="Ej: La Paz"
                  className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-red-500 focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">Destino</label>
                <input
                  type="text"
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                  placeholder="Ej: Punta Cana"
                  className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-red-500 focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">Fecha</label>
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-red-500 focus:outline-none"
                />
              </div>
              <div className="flex items-end">
                <button className="w-full px-6 py-2 bg-red-500 text-white font-bold rounded-lg hover:bg-orange-500 transition">
                  Buscar
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Flights List */}
      <section className="py-12 sm:py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">Vuelos disponibles</h2>
          <div className="space-y-4">
            {FLIGHT_ROUTES.map((flight) => (
              <div key={flight.id} className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:shadow-lg transition hover:border-orange-500">
                <div className="grid grid-cols-1 sm:grid-cols-5 gap-4 items-center">
                  <div>
                    <p className="text-xs text-orange-500 font-semibold uppercase">Ruta</p>
                    <p className="text-lg font-bold text-gray-900">
                      {flight.origin} → {flight.destination}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase">Aerolínea</p>
                    <p className="text-base font-semibold text-gray-900">{flight.airline}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase">Duración</p>
                    <p className="text-base font-semibold text-gray-900">{flight.duration}</p>
                  </div>
                  <div>
                    <p className="text-xs text-red-500 font-semibold uppercase">Precio</p>
                    <p className="text-2xl font-bold text-red-500">${flight.price}</p>
                  </div>
                  <button className="w-full px-4 py-2 bg-orange-500 text-white font-bold rounded-lg hover:bg-red-500 transition">
                    Reservar
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
