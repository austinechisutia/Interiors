// components/HeroSection.js
import Image from "next/image";
import Sofa from "./assets/cat13.jpg"; 

const HeroSection = () => {
  return (
    <section className="flex flex-col w-full py-8 sm:py-10 md:py-12 mt-4 sm:mt-6">
      <div className="container mx-auto flex flex-col items-center px-4 sm:px-6 md:px-8 lg:px-0 gap-6 sm:gap-8">
        {/* Text Content */}
        <div className="flex-1 text-center w-full">
          <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl mb-3 sm:mb-4">
            Shop for Premium Quality
          </h1>
          <p className="text-gray-700 mb-4 sm:mb-6 text-base sm:text-lg md:text-xl px-4 sm:px-0">
            Upgrade you space with the comfortable stylish furniture. Find the perfect pieces for you.
          </p>
          <button className="bg-black text-white px-5 py-2.5 sm:px-6 sm:py-3 rounded-lg hover:bg-blue-700 transition text-sm sm:text-base">
            Get Started
          </button>
        </div>

        {/* Image */}
        <div className="flex-1 w-full max-w-2xl px-4 sm:px-0">
          <Image
            src={Sofa}
            alt="Hero Image"
            className="w-full h-auto rounded-lg"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;