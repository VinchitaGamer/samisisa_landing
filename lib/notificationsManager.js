// Notifications management
export const DEFAULT_NOTIFICATIONS = [];
export const WHATSAPP_NUMBER = '59160699494'; // Número de la agencia

export const getNotifications = () => {
  if (typeof window === 'undefined') return DEFAULT_NOTIFICATIONS;
  const stored = localStorage.getItem('sami_sisa_notifications');
  return stored ? JSON.parse(stored) : DEFAULT_NOTIFICATIONS;
};

export const saveNotification = (notification) => {
  if (typeof window === 'undefined') return;
  const notifications = getNotifications();
  const newNotif = {
    id: Date.now(),
    timestamp: new Date().toISOString(),
    status: 'new',
    ...notification,
  };
  notifications.unshift(newNotif);
  localStorage.setItem('sami_sisa_notifications', JSON.stringify(notifications));
  return newNotif;
};

export const updateNotification = (id, updates) => {
  if (typeof window === 'undefined') return;
  const notifications = getNotifications();
  const idx = notifications.findIndex(n => n.id === id);
  if (idx >= 0) {
    notifications[idx] = { ...notifications[idx], ...updates };
    localStorage.setItem('sami_sisa_notifications', JSON.stringify(notifications));
  }
};

export const deleteNotification = (id) => {
  if (typeof window === 'undefined') return;
  const notifications = getNotifications().filter(n => n.id !== id);
  localStorage.setItem('sami_sisa_notifications', JSON.stringify(notifications));
};

export const generateWhatsAppLink = (message, phoneNumber = WHATSAPP_NUMBER) => {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${phoneNumber}?text=${encoded}`;
};

