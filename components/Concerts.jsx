import { useEffect, useState } from 'react';
import PackageDetailModal from './PackageDetailModal';
import { getContent } from '../lib/contentManager';
import { Music } from 'lucide-react';

export default function Concerts() {
  const [concerts, setConcerts] = useState([]);
  const [selectedConcert, setSelectedConcert] = useState(null);

  useEffect(() => {
    const content = getContent();
    setConcerts(content.concerts);
  }, []);

  return (
    <>
      <section className="bg-gradient-to-br from-red-600 to-orange-600 py-12 sm:py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <Music size={40} className="text-yellow-300" />
            <h1 className="text-4xl sm:text-5xl font-bold text-white">Conciertos & Experiencias</h1>
          </div>
          <p className="text-gray-100 text-lg sm:text-xl max-w-2xl">Vive la música en directo con paquetes premium que incluyen alojamiento, traslados y experiencias VIP.</p>
        </div>
      </section>

      <section className="py-12 sm:py-20 px-6 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {concerts.map((concert) => (
              <div key={concert.id} className="group relative rounded-lg overflow-hidden shadow-2xl hover:shadow-3xl transition cursor-pointer" onClick={() => setSelectedConcert(concert)}>
                <div className="relative h-96 overflow-hidden">
                  <img src={concert.image} alt={concert.artist} loading="lazy" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
                  <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-8 text-white">
                    <h2 className="text-3xl sm:text-4xl font-bold mb-2 text-yellow-300">{concert.artist}</h2>
                    <p className="text-lg font-semibold text-gray-200 mb-1">{concert.city}</p>
                    <p className="text-sm text-gray-300 mb-4">{concert.venue}</p>
                    <p className="text-sm font-bold text-orange-400 mb-6">{concert.date}</p>
                    <div className="flex justify-between items-end">
                      <div>
                        <p className="text-xs text-gray-300 uppercase">Desde</p>
                        <p className="text-3xl font-bold text-red-500">${concert.price}</p>
                      </div>
                      <button onClick={(e) => { e.stopPropagation(); setSelectedConcert(concert); }} className="px-6 py-2 bg-orange-500 text-white font-bold rounded-lg hover:bg-red-500 transition transform hover:scale-105">Detalles</button>
                    </div>
                  </div>
                </div>
                <div className="absolute inset-0 bg-black/95 opacity-0 group-hover:opacity-100 transition-opacity p-6 flex flex-col justify-center text-white">
                  <h3 className="text-2xl font-bold mb-4 text-orange-500">{concert.artist}</h3>
                  <p className="text-sm mb-4"><strong>Incluye:</strong></p>
                  <ul className="space-y-2 mb-6">
                    {concert.includes.map((item, i) => (
                      <li key={i} className="text-sm text-gray-200 flex items-start">
                        <span className="text-orange-500 mr-2">▸</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <button onClick={(e) => { e.stopPropagation(); setSelectedConcert(concert); }} className="w-full px-4 py-3 bg-red-500 text-white font-bold rounded-lg hover:bg-orange-500 transition">Reservar Ahora</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-red-500 to-orange-500 py-12 sm:py-16 px-6">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Próximos eventos por anunciar</h2>
          <p className="text-lg mb-8 text-gray-100">Suscríbete para recibir notificaciones de nuevos conciertos y festivales.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <input type="email" placeholder="Tu correo" className="px-6 py-3 rounded-lg text-gray-900 focus:outline-none flex-1 max-w-sm" />
            <button className="px-8 py-3 bg-gray-900 text-white font-bold rounded-lg hover:bg-black transition transform hover:scale-105">Suscribirse</button>
          </div>
        </div>
      </section>

      {selectedConcert && <PackageDetailModal item={selectedConcert} itemType="concert" onClose={() => setSelectedConcert(null)} />}
    </>
  );
}
