const PackageCard = ({ image, title, description, price, onBooking }) => {
  return (
    <div className="group bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
      {/* Image Container */}
      <div className="relative h-48 sm:h-56 overflow-hidden">
        <img
          src={image}
          alt={title}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
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
          onClick={onBooking}
          className="w-full px-4 py-3 bg-orange-500 text-white font-bold rounded-lg hover:bg-red-500 transition-all duration-300 transform hover:scale-105 shadow-md"
        >
          Ver Detalles
        </button>
      </div>
    </div>
  );
};

export default PackageCard;
