import { useState } from 'react';
import { X, MessageCircle, Calendar, Users, MapPin } from 'lucide-react';
import { saveNotification, generateWhatsAppLink } from '../lib/notificationsManager';

export default function PackageDetailModal({ item, itemType, onClose }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState('');
  const [travelers, setTravelers] = useState('2');
  const [notes, setNotes] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const message = `Hola, soy ${name} y estoy interesado en ${item.title || item.artist || item.name}.
Email: ${email}
Teléfono: ${phone}
Fecha: ${date}
Viajeros: ${travelers}
Notas: ${notes}`;

    saveNotification({
      type: itemType,
      item: item.title || item.artist || item.name,
      name,
      email,
      phone,
      date,
      travelers,
      message,
    });

    const whatsappLink = generateWhatsAppLink(message);
    window.open(whatsappLink, '_blank');

    alert('Solicitud enviada. Se abrirá WhatsApp.');
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-2 sm:p-4 z-50">
      <div className="bg-white rounded-lg shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-gradient-to-r from-red-500 to-orange-500 text-white p-4 sm:p-6 flex justify-between items-start">
          <div className="flex-1">
            <h2 className="text-2xl sm:text-4xl font-bold">{item.title || item.artist || item.name}</h2>
            <p className="text-orange-100 mt-1 text-sm sm:text-base">{item.city || item.origin || item.country}</p>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-white/20 rounded-lg transition flex-shrink-0">
            <X size={28} />
          </button>
        </div>

        <div className="p-4 sm:p-8">
          {/* Image */}
          {item.image && (
            <img
              src={item.image}
              alt={item.title || item.artist}
              className="w-full h-64 sm:h-96 object-cover rounded-lg mb-6"
              onError={(e) => {
                e.target.src = 'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22400%22 height=%22300%22%3E%3Crect fill=%23ddd width=%22400%22 height=%22300%22/%3E%3C/svg%3E';
              }}
            />
          )}

          {/* Details Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-8">
            {item.price && (
              <div className="bg-red-50 p-4 rounded-lg border-2 border-red-200">
                <p className="text-xs text-gray-600 uppercase font-semibold">Precio</p>
                <p className="text-2xl sm:text-3xl font-bold text-red-500">${item.price}</p>
              </div>
            )}
            {item.duration && (
              <div className="bg-orange-50 p-4 rounded-lg border-2 border-orange-200">
                <p className="text-xs text-gray-600 uppercase font-semibold">Duración</p>
                <p className="text-lg sm:text-xl font-bold text-orange-600">{item.duration}</p>
              </div>
            )}
            {item.date && (
              <div className="bg-blue-50 p-4 rounded-lg border-2 border-blue-200">
                <Calendar size={18} className="inline text-blue-600 mr-1" />
                <p className="text-xs text-gray-600 uppercase font-semibold">Fecha</p>
                <p className="text-sm sm:text-base font-bold text-blue-700">{item.date}</p>
              </div>
            )}
            {item.venue && (
              <div className="bg-purple-50 p-4 rounded-lg border-2 border-purple-200">
                <MapPin size={18} className="inline text-purple-600 mr-1" />
                <p className="text-xs text-gray-600 uppercase font-semibold">Lugar</p>
                <p className="text-sm sm:text-base font-bold text-purple-700">{item.venue}</p>
              </div>
            )}
          </div>

          {/* Description */}
          {item.description && (
            <div className="mb-8">
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">Descripción</h3>
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed">{item.description}</p>
            </div>
          )}

          {/* Includes */}
          {item.includes && (
            <div className="mb-8">
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4">Incluye</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                {item.includes.map((inc, i) => (
                  <div key={i} className="flex items-start p-3 bg-green-50 rounded-lg border border-green-200">
                    <span className="text-green-500 mr-2 font-bold text-lg">✓</span>
                    <span className="text-gray-700 text-sm sm:text-base">{inc}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Features */}
          {item.features && (
            <div className="mb-8">
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4">Características</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                {item.features.map((feat, i) => (
                  <div key={i} className="flex items-start p-3 bg-blue-50 rounded-lg border border-blue-200">
                    <span className="text-blue-500 mr-2 font-bold text-lg">✓</span>
                    <span className="text-gray-700 text-sm sm:text-base">{feat}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4 bg-gradient-to-br from-gray-50 to-gray-100 p-4 sm:p-6 rounded-lg border-2 border-gray-200">
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4">Solicitar Reserva</h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-1">Nombre</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Tu nombre"
                  required
                  className="w-full px-3 py-2 sm:py-3 border-2 border-gray-300 rounded-lg focus:border-red-500 focus:outline-none text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-1">Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="tu@email.com"
                  required
                  className="w-full px-3 py-2 sm:py-3 border-2 border-gray-300 rounded-lg focus:border-red-500 focus:outline-none text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-1">Teléfono</label>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+591 60699494"
                  required
                  className="w-full px-3 py-2 sm:py-3 border-2 border-gray-300 rounded-lg focus:border-red-500 focus:outline-none text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-1">Fecha Deseada</label>
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full px-3 py-2 sm:py-3 border-2 border-gray-300 rounded-lg focus:border-red-500 focus:outline-none text-sm"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-1">Cantidad de Viajeros</label>
              <input
                type="number"
                value={travelers}
                onChange={(e) => setTravelers(e.target.value)}
                placeholder="2"
                min="1"
                className="w-full px-3 py-2 sm:py-3 border-2 border-gray-300 rounded-lg focus:border-red-500 focus:outline-none text-sm"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-1">Notas Adicionales</label>
              <textarea
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="Cuéntanos más sobre lo que buscas..."
                rows="3"
                className="w-full px-3 py-2 sm:py-3 border-2 border-gray-300 rounded-lg focus:border-red-500 focus:outline-none text-sm"
              />
            </div>

            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 px-4 py-3 sm:py-4 bg-green-500 text-white font-bold rounded-lg hover:bg-green-600 transition transform hover:scale-105 text-sm sm:text-base"
            >
              <MessageCircle size={20} />
              Enviar por WhatsApp
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
