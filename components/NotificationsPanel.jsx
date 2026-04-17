import { useState, useEffect } from 'react';
import { Bell, Trash2, MessageCircle, CheckCircle, Eye } from 'lucide-react';
import { getNotifications, deleteNotification, updateNotification, generateWhatsAppLink } from '../lib/notificationsManager';

export default function NotificationsPanel() {
  const [notifications, setNotifications] = useState([]);
  const [selectedNotif, setSelectedNotif] = useState(null);

  useEffect(() => {
    setNotifications(getNotifications());
  }, []);

  const handleDelete = (id) => {
    deleteNotification(id);
    setNotifications(getNotifications());
    setSelectedNotif(null);
  };

  const handleMarkAsRead = (id) => {
    updateNotification(id, { status: 'read' });
    setNotifications(getNotifications());
  };

  const handleReply = (notification) => {
    const reply = `Hola ${notification.name}, gracias por tu interés en ${notification.item}. ¿En qué puedo ayudarte?`;
    const whatsappLink = generateWhatsAppLink(reply);
    window.open(whatsappLink, '_blank');
  };

  const newNotifications = notifications.filter(n => n.status === 'new');
  const readNotifications = notifications.filter(n => n.status === 'read');

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center gap-3">
        <Bell size={32} className="text-red-500" />
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Notificaciones</h2>
          <p className="text-sm text-gray-600">{newNotifications.length} nuevas</p>
        </div>
      </div>

      {/* New Notifications */}
      {newNotifications.length > 0 && (
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="bg-orange-50 p-4 border-b-2 border-orange-200">
            <h3 className="font-bold text-gray-900 flex items-center gap-2">
              <span className="w-3 h-3 bg-red-500 rounded-full"></span>
              Nuevas Solicitudes ({newNotifications.length})
            </h3>
          </div>

          <div className="divide-y">
            {newNotifications.map((notif) => (
              <div key={notif.id} className="p-4 hover:bg-gray-50 transition cursor-pointer">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h4 className="font-bold text-gray-900">{notif.name}</h4>
                    <p className="text-sm text-gray-600">{notif.item}</p>
                    <p className="text-xs text-gray-500 mt-1">
                      {new Date(notif.timestamp).toLocaleString('es-ES')}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-semibold text-orange-600">{notif.type}</p>
                    {notif.date && <p className="text-xs text-gray-500">Fecha: {notif.date}</p>}
                  </div>
                </div>

                <div className="bg-gray-100 p-3 rounded text-sm text-gray-700 mb-3 max-h-24 overflow-y-auto">
                  {notif.message}
                </div>

                <div className="flex gap-2">
                  <button
                    onClick={() => setSelectedNotif(notif)}
                    className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-blue-500 text-white text-sm font-semibold rounded-lg hover:bg-blue-600 transition"
                  >
                    <Eye size={16} />
                    Ver Detalles
                  </button>
                  <button
                    onClick={() => handleReply(notif)}
                    className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-green-500 text-white text-sm font-semibold rounded-lg hover:bg-green-600 transition"
                  >
                    <MessageCircle size={16} />
                    Responder
                  </button>
                  <button
                    onClick={() => handleMarkAsRead(notif.id)}
                    className="px-3 py-2 bg-gray-300 text-gray-900 text-sm font-semibold rounded-lg hover:bg-gray-400 transition"
                  >
                    <CheckCircle size={16} />
                  </button>
                  <button
                    onClick={() => handleDelete(notif.id)}
                    className="px-3 py-2 bg-red-500 text-white text-sm font-semibold rounded-lg hover:bg-red-600 transition"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Read Notifications */}
      {readNotifications.length > 0 && (
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="bg-gray-100 p-4 border-b-2 border-gray-200">
            <h3 className="font-bold text-gray-900">Solicitudes Anteriores ({readNotifications.length})</h3>
          </div>

          <div className="divide-y">
            {readNotifications.map((notif) => (
              <div key={notif.id} className="p-4 hover:bg-gray-50 transition opacity-70">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-bold text-gray-900">{notif.name}</h4>
                    <p className="text-sm text-gray-600">{notif.item}</p>
                  </div>
                  <button
                    onClick={() => handleDelete(notif.id)}
                    className="p-2 hover:bg-red-100 rounded transition"
                  >
                    <Trash2 size={18} className="text-red-500" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Empty State */}
      {notifications.length === 0 && (
        <div className="bg-white rounded-lg shadow-lg p-12 text-center">
          <Bell size={48} className="mx-auto text-gray-300 mb-4" />
          <p className="text-gray-600">No hay notificaciones por el momento</p>
        </div>
      )}

      {/* Detail Modal */}
      {selectedNotif && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg shadow-2xl max-w-2xl w-full p-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">{selectedNotif.name}</h3>
            <div className="space-y-3 mb-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-xs text-gray-600 uppercase font-semibold">Paquete/Servicio</p>
                  <p className="text-lg font-bold text-gray-900">{selectedNotif.item}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-600 uppercase font-semibold">Tipo</p>
                  <p className="text-lg font-bold text-orange-600">{selectedNotif.type}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-600 uppercase font-semibold">Email</p>
                  <p className="font-mono text-sm">{selectedNotif.email}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-600 uppercase font-semibold">Teléfono</p>
                  <p className="font-mono text-sm">{selectedNotif.phone}</p>
                </div>
                {selectedNotif.date && (
                  <div>
                    <p className="text-xs text-gray-600 uppercase font-semibold">Fecha Deseada</p>
                    <p className="font-semibold">{selectedNotif.date}</p>
                  </div>
                )}
                {selectedNotif.travelers && (
                  <div>
                    <p className="text-xs text-gray-600 uppercase font-semibold">Viajeros</p>
                    <p className="font-semibold">{selectedNotif.travelers} personas</p>
                  </div>
                )}
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-xs text-gray-600 uppercase font-semibold mb-2">Mensaje</p>
                <p className="text-gray-700 whitespace-pre-wrap">{selectedNotif.message}</p>
              </div>
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => handleReply(selectedNotif)}
                className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-green-500 text-white font-bold rounded-lg hover:bg-green-600 transition"
              >
                <MessageCircle size={20} />
                Responder por WhatsApp
              </button>
              <button
                onClick={() => setSelectedNotif(null)}
                className="px-4 py-3 bg-gray-300 text-gray-900 font-bold rounded-lg hover:bg-gray-400 transition"
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
