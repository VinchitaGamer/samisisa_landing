import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const PackageCard = ({ image, title, description, price, onBooking, onViewDetails }) => {
  const [imageOffset, setImageOffset] = useState(0);

  const moveImage = (direction) => {
    setImageOffset(prev => prev + (direction === 'up' ? 20 : -20));
  };

  return (
    <div className="group bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
      {/* Image Container with Controls */}
      <div className="relative h-48 sm:h-56 overflow-hidden bg-gray-200">
        <img
          src={image}
          alt={title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-300"
          style={{
            objectPosition: `center ${imageOffset}%`,
          }}
          onError={(e) => {
            e.target.src = 'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22400%22 height=%22200%22%3E%3Crect fill=%22%23ddd%22 width=%22400%22 height=%22200%22/%3E%3C/svg%3E';
          }}
        />

        {/* Image Adjustment Buttons - Hover */}
        <div className="absolute inset-0 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity bg-black/20 px-2">
          <button
            onClick={() => moveImage('up')}
            className="p-2 bg-white/80 hover:bg-white rounded-full transition"
            title="Subir imagen"
          >
            <ChevronUp size={20} className="text-gray-900" />
          </button>
          <button
            onClick={() => moveImage('down')}
            className="p-2 bg-white/80 hover:bg-white rounded-full transition"
            title="Bajar imagen"
          >
            <ChevronDown size={20} className="text-gray-900" />
          </button>
        </div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent"></div>
      </div>

      {/* Content */}
      <div className="p-6 sm:p-8">
        {/* Title */}
        <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 group-hover:text-red-500 transition">
          {title}
        </h3>

        {/* Description */}
        <p className="text-sm sm:text-base text-gray-600 mb-4 line-clamp-3">
          {description}
        </p>

        {/* Price */}
        <div className="flex justify-between items-center mb-6">
          <span className="text-xs sm:text-sm font-semibold text-orange-500 uppercase tracking-wide">
            Desde
          </span>
          <span className="text-2xl sm:text-3xl font-bold text-red-500">${price}</span>
        </div>

        {/* CTA Button */}
        <button
          onClick={onViewDetails}
          className="w-full px-4 py-3 bg-orange-500 text-white font-bold rounded-lg hover:bg-red-500 transition-all duration-300 transform hover:scale-105 shadow-md"
        >
          Ver Detalles
        </button>
      </div>
    </div>
  );
};

export default PackageCard;
