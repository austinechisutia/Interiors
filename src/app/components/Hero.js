import Seat from "./assets/seat.jpg";


export default function Hero() {
  return (
    <section
      className="w-full h-[80vh] bg-cover bg-center flex items-center px-6"
      style={{ backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.7), rgba(0,0,0,0.2)), url(${Seat.src})` }}
    >

      <div className="text-white max-w-xl z-30">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Experience the Future of Shopping
        </h1>
        <p className="text-lg md:text-xl mb-6">
          Discover premium products with fast delivery and top quality.
        </p>
        <button className="bg-white text-black px-6 py-3 rounded-lg font-semibold">
          Shop Now
        </button>
      </div>
    </section>
  );
}
