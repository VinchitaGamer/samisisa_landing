const CONCERTS = [
  {
    id: 1,
    artist: 'The Rolling Stones',
    city: 'Buenos Aires',
    date: '15 de Mayo 2026',
    venue: 'Estadio Monumental',
    price: 1500,
    includes: ['Entrada VIP', 'Hotel 4 estrellas 3 noches', 'Traslados privados', 'Desayuno incluido'],
    image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&h=600&fit=crop',
  },
  {
    id: 2,
    artist: 'Coldplay',
    city: 'Santiago',
    date: '22 de Junio 2026',
    venue: 'Estadio Nacional',
    price: 1200,
    includes: ['Entrada General', 'Hotel 3 estrellas 2 noches', 'Traslados en grupo', 'Comida incluida'],
    image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800&h=600&fit=crop',
  },
  {
    id: 3,
    artist: 'Bad Bunny',
    city: 'Lima',
    date: '10 de Julio 2026',
    venue: 'Estadio San Marcos',
    price: 1800,
    includes: ['Entrada VIP Premium', 'Hotel 5 estrellas 4 noches', 'Traslados privados 24/7', 'Todas las comidas', 'Meet & Greet opcional'],
    image: 'https://images.unsplash.com/photo-1511379938547-c1f69b13d835?w=800&h=600&fit=crop',
  },
];

export default function Concerts() {
  return (
    <main className="min-h-screen bg-black">
      {/* Header */}
      <section className="bg-gradient-to-br from-red-600 to-orange-600 py-12 sm:py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            🎵 Conciertos & <span className="text-yellow-300">Experiencias</span>
          </h1>
          <p className="text-gray-100 text-lg sm:text-xl max-w-2xl">
            Vive la música en directo con paquetes premium que incluyen alojamiento, traslados y experiencias VIP.
          </p>
        </div>
      </section>

      {/* Concerts Grid */}
      <section className="py-12 sm:py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {CONCERTS.map((concert) => (
              <div
                key={concert.id}
                className="group relative rounded-lg overflow-hidden shadow-2xl hover:shadow-3xl transition"
              >
                {/* Image Background */}
                <div className="relative h-96 overflow-hidden">
                  <img
                    src={concert.image}
                    alt={concert.artist}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  {/* Dark Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>

                  {/* Content Overlay */}
                  <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-8 text-white">
                    {/* Artist Name */}
                    <h2 className="text-3xl sm:text-4xl font-bold mb-2 text-yellow-300">
                      {concert.artist}
                    </h2>

                    {/* Details */}
                    <p className="text-lg font-semibold text-gray-200 mb-1">{concert.city}</p>
                    <p className="text-sm text-gray-300 mb-4">{concert.venue}</p>
                    <p className="text-sm font-bold text-orange-400 mb-6">{concert.date}</p>

                    {/* Price */}
                    <div className="flex justify-between items-end">
                      <div>
                        <p className="text-xs text-gray-300 uppercase">Desde</p>
                        <p className="text-3xl font-bold text-red-500">${concert.price}</p>
                      </div>
                      <button className="px-6 py-2 bg-orange-500 text-white font-bold rounded-lg hover:bg-red-500 transition transform hover:scale-105">
                        Detalles
                      </button>
                    </div>
                  </div>
                </div>

                {/* Expandable Details - Hover */}
                <div className="absolute inset-0 bg-black/95 opacity-0 group-hover:opacity-100 transition-opacity p-6 flex flex-col justify-center text-white">
                  <h3 className="text-2xl font-bold mb-4 text-orange-500">{concert.artist}</h3>
                  <p className="text-sm mb-4">
                    <strong>Incluye:</strong>
                  </p>
                  <ul className="space-y-2 mb-6">
                    {concert.includes.map((item, i) => (
                      <li key={i} className="text-sm text-gray-200 flex items-start">
                        <span className="text-orange-500 mr-2">▸</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <button className="w-full px-4 py-3 bg-red-500 text-white font-bold rounded-lg hover:bg-orange-500 transition">
                    Reservar Ahora
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="bg-gradient-to-r from-red-500 to-orange-500 py-12 sm:py-16 px-6">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Próximos eventos por anunciar</h2>
          <p className="text-lg mb-8 text-gray-100">Suscríbete para recibir notificaciones de nuevos conciertos y festivales.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <input
              type="email"
              placeholder="Tu correo"
              className="px-6 py-3 rounded-lg text-gray-900 focus:outline-none flex-1 max-w-sm"
            />
            <button className="px-8 py-3 bg-gray-900 text-white font-bold rounded-lg hover:bg-black transition transform hover:scale-105">
              Suscribirse
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
