// Default content configuration with correct image URLs
export const DEFAULT_CONTENT = {
  packages: {
    national: [
      {
        id: 1,
        title: 'Salar de Uyuni',
        description: 'Contempla el espejo más grande del mundo en Bolivia. Experiencia única bajo las estrellas en el desierto blanco más espectacular de Sudamérica.',
        price: 1200,
        image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop&q=80',
      },
      {
        id: 2,
        title: 'Copacabana',
        description: 'Playas doradas en el lago Titicaca, Bolivia. Conecta con la cultura andina ancestral y relájate en pueblos con encanto colonial.',
        price: 850,
        image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop&q=80',
      },
      {
        id: 3,
        title: 'Tiwanaku',
        description: 'Ruinas milenarias de la civilización preincaica. Sumérgete en la historia ancestral a 3,850 metros de altura.',
        price: 650,
        image: 'https://images.unsplash.com/photo-1518639023910-742baa131fcb?w=800&h=600&fit=crop&q=80',
      },
    ],
    international: [
      {
        id: 1,
        title: 'Punta Cana',
        description: 'Playas paradisíacas en República Dominicana. Resorts de lujo, aguas cristalinas y aventuras acuáticas inolvidables.',
        price: 1800,
        image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&h=600&fit=crop&q=80',
      },
      {
        id: 2,
        title: 'Cancún',
        description: 'Destino turístico de clase mundial en México. Playas blancas, cenotes secretos y ruinas mayas en la jungla.',
        price: 1600,
        image: 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=800&h=600&fit=crop&q=80',
      },
      {
        id: 3,
        title: 'Orlando',
        description: 'Diversión sin límites. Disney World, Universal Studios y parques temáticos de clase mundial para toda la familia.',
        price: 2200,
        image: 'https://images.unsplash.com/photo-1524985069026-dd778a71c7b4?w=800&h=600&fit=crop&q=80',
      },
    ],
  },
  flights: [
    {
      id: 1,
      origin: 'La Paz',
      destination: 'Punta Cana',
      type: 'Internacional',
      airline: 'AeroSudamérica',
      price: 450,
      duration: '6h 30m',
      image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800&h=600&fit=crop&q=80',
    },
    {
      id: 2,
      origin: 'Santa Cruz',
      destination: 'Cancún',
      type: 'Internacional',
      airline: 'LatinoAir',
      price: 520,
      duration: '5h 45m',
      image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&h=600&fit=crop&q=80',
    },
    {
      id: 3,
      origin: 'Cochabamba',
      destination: 'Oruro',
      type: 'Nacional',
      airline: 'AeroSudamérica',
      price: 120,
      duration: '1h 15m',
      image: 'https://images.unsplash.com/photo-1517048676732-d65bc937abf2?w=800&h=600&fit=crop&q=80',
    },
    {
      id: 4,
      origin: 'La Paz',
      destination: 'Iquitos',
      type: 'Nacional',
      airline: 'PumaAir',
      price: 180,
      duration: '2h 30m',
      image: 'https://images.unsplash.com/photo-1519452575417-564c1401ecc0?w=800&h=600&fit=crop&q=80',
    },
  ],
  insurance: [
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
  ],
  concerts: [
    {
      id: 1,
      artist: 'The Rolling Stones',
      city: 'Buenos Aires',
      date: '15 de Mayo 2026',
      venue: 'Estadio Monumental',
      price: 1500,
      includes: ['Entrada VIP', 'Hotel 4 estrellas 3 noches', 'Traslados privados', 'Desayuno incluido'],
      image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&h=600&fit=crop&q=80',
    },
    {
      id: 2,
      artist: 'Coldplay',
      city: 'Santiago',
      date: '22 de Junio 2026',
      venue: 'Estadio Nacional',
      price: 1200,
      includes: ['Entrada General', 'Hotel 3 estrellas 2 noches', 'Traslados en grupo', 'Comida incluida'],
      image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800&h=600&fit=crop&q=80',
    },
    {
      id: 3,
      artist: 'Bad Bunny',
      city: 'Lima',
      date: '10 de Julio 2026',
      venue: 'Estadio San Marcos',
      price: 1800,
      includes: ['Entrada VIP Premium', 'Hotel 5 estrellas 4 noches', 'Traslados privados 24/7', 'Todas las comidas', 'Meet & Greet opcional'],
      image: 'https://images.unsplash.com/photo-1511379938547-c1f69b13d835?w=800&h=600&fit=crop&q=80',
    },
  ],
};

// Content management functions with sync capabilities
let contentCache = null;

export const getContent = () => {
  if (typeof window === 'undefined') return DEFAULT_CONTENT;

  // Return cached version if available
  if (contentCache) return contentCache;

  try {
    // Try to get from localStorage first
    const stored = localStorage.getItem('sami_sisa_content');
    if (stored) {
      contentCache = JSON.parse(stored);
      return contentCache;
    }
  } catch (e) {
    console.error('localStorage error:', e);
  }

  // Fallback to default
  contentCache = DEFAULT_CONTENT;
  return contentCache;
};

export const saveContent = (content) => {
  if (typeof window === 'undefined') return;

  try {
    localStorage.setItem('sami_sisa_content', JSON.stringify(content));
    contentCache = content;

    // Clear cache in other tabs/windows
    localStorage.setItem('sami_sisa_sync_event', Date.now().toString());
  } catch (e) {
    console.error('Error saving content:', e);
  }
};

export const resetContent = () => {
  if (typeof window === 'undefined') return;

  try {
    localStorage.removeItem('sami_sisa_content');
    contentCache = DEFAULT_CONTENT;
    localStorage.setItem('sami_sisa_sync_event', Date.now().toString());
  } catch (e) {
    console.error('Error resetting content:', e);
  }
};

// Sync listener for cross-tab updates
if (typeof window !== 'undefined') {
  window.addEventListener('storage', (e) => {
    if (e.key === 'sami_sisa_sync_event') {
      contentCache = null; // Clear cache to force reload
    }
  });
}
