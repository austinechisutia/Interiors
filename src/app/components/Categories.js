import React from "react";
import Image1 from "./assets/cat10.jpg";
import Image2 from "./assets/cat2.jpg";
import Image3 from "./assets/cat6.jpg";
import Image4 from "./assets/cat5.jpg";

export default function Categories() {
  return (
    <section className="w-full px-6 py-12 mt-20">
      {/* TITLE */}
      <h2 className="text-6xl mb-6">Categories</h2>

      {/* TEXT + BUTTON ROW */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8 gap-4">
        <p className="text-gray-600 max-w-xl">
          See all the colections we have to offer you.
        </p>

        <button className="text-black px-6 py-1 border-2 rounded-lg hover:bg-gray-400 transition">
          View All
        </button>
      </div>

      {/* IMAGES ROW */}
     <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
  <div>
    <img
      src={Image1.src}
      alt="Category 1"
      className="w-full h-80 object-cover rounded-lg"
    />
    <div className="flex justify-between items-center mt-2">
      <span className="font-medium">Product Name</span>
    </div>
  </div>

  <div>
    <img
      src={Image2.src}
      alt="Category 2"
      className="w-full h-80 object-cover rounded-lg"
    />
    <div className="flex justify-between items-center mt-2">
      <span className="font-medium">Product Name</span>
    </div>
  </div>

  <div>
    <img
      src={Image3.src}
      alt="Category 3"
      className="w-full h-80 object-cover rounded-lg"
    />
    <div className="flex justify-between items-center mt-2">
      <span className="font-medium">Product Name</span>
    </div>
  </div>

  <div>
    <img
      src={Image4.src}
      alt="Category 4"
      className="w-full h-80 object-cover rounded-lg"
    />
    <div className="flex justify-between items-center mt-2">
      <span className="font-medium">Product Name</span>
    </div>
  </div>
</div>
    </section>
  );
}
