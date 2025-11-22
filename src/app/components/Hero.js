import Seat from "./assets/seat.jpg";


export default function Hero() {
  return (
    <section
      className="w-full h-[60vh] sm:h-[70vh] md:h-[80vh] bg-cover bg-center flex items-center px-4 sm:px-6 md:px-8 lg:px-12"
      style={{ backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.7), rgba(0,0,0,0.2)), url(${Seat.src})` }}
    >

      <div className="text-white max-w-xl z-30">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 md:mb-4">
          Experience the Future of Shopping
        </h1>
        <p className="text-base sm:text-lg md:text-xl mb-4 md:mb-6">
          Discover premium products with fast delivery and top quality.
        </p>
        <button className="bg-white text-black px-5 py-2.5 sm:px-6 sm:py-3 rounded-lg font-semibold text-sm sm:text-base hover:bg-gray-100 transition">
          Shop Now
        </button>
      </div>
    </section>
  );
}
