import React from "react";
import Image1 from "./assets/cat10.jpg";
import Image2 from "./assets/cat7.jpg";
import Image3 from "./assets/cat6.jpg";
import Image4 from "./assets/cat5.jpg";
import { FiFilter } from "react-icons/fi";
import { FaAngleDown, FaAngleUp, FaStar } from "react-icons/fa";





export default function Categories() {
  return (
    <section className="w-full px-6 py-12 mt-20">
      {/* TITLE */}
      <h2 className="text-6xl mb-6">Popular Products</h2>

      {/* TEXT + BUTTON ROW */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8 gap-4">
        <p className="text-gray-600 max-w-xl">
         Join the others wh o have fallen in love with this popular products. Each item
         has been a top performer.
        </p>

       
      </div>

      <section className="w-full px-6 py-12">
  {/* SECTION TITLE */}
    <div className="flex flex-col md:flex-row  text-gray-500 items-center justify-between mb-12 gap-4 border-t border-b border-gray-300 py-4"> 
       <p className="md:w-1/3 flex items-center gap-2 text-left">
       <FaAngleUp className="w-5 h-5" />
        <FaAngleDown className="w-5 h-5" />
      </p>
      <p className="md:w-1/3 text-center">Our Products</p>
     <p className="md:w-1/3 flex items-center justify-end gap-2 text-right">
        Adjust by
        <FiFilter className="w-5 h-5" />
      </p>



    </div>
  {/* TWO-COLUMN LAYOUT */}
  <div className="flex flex-col md:flex-row gap-8">
    
    {/* LEFT COLUMN - Guide & Titles */}
    <div className="md:w-1/4 flex flex-col gap-6">
      
      {/* Section 1 */}
      <div className="flex items-center justify-between bg-gray-100 p-4 rounded-lg cursor-pointer hover:bg-gray-200 transition">
        <div className="w-full">
          <h3 className="text-3xl leading-snug">HOMELOFT</h3>
         <div className="flex items-center justify-center gap-1 bg-black w-full px-3 py-2 rounded-full mt-2 shadow-2xl">
             <FaStar className="text-white w-4 h-4" />
         <p className="text-white text-lg flex items-center gap-1">
             Popular
        </p>
        </div>

       <div>

         <div className="flex items-center justify-left gap-4 px-3 py-2 rounded-full mt-2">
             <FaStar className="text-gray-500 w-4 h-4" />
         <p className="text-gray-500 text-lg flex items-center gap-1">
             New Collections
        </p>
        </div>
        <div className="flex items-center justify-left gap-4 px-3 py-2 rounded-full mt-2">
             <FaStar className="text-gray-500 w-4 h-4" />
         <p className="text-gray-500 text-lg flex items-center gap-1">
             Custom Furniture
        </p>
        </div>
       </div>
        


        </div>
       
      </div>

    
      {/* Add more sections as needed */}
    </div>

    {/* RIGHT COLUMN - Images */}
   <div className="md:w-3/4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
  <div>
    <img src={Image1.src} alt="Category 1" className="w-full h-80 object-cover rounded-lg" />
    <div className="flex justify-between items-center mt-2">
      <span className="font-medium">Product Name</span>
      <span className="font-semibold">$99</span>
    </div>
  </div>

  <div>
    <img src={Image2.src} alt="Category 2" className="w-full h-80 object-cover rounded-lg" />
    <div className="flex justify-between items-center mt-2">
      <span className="font-medium">Product Name</span>
      <span className="font-semibold">$149</span>
    </div>
  </div>

  <div>
    <img src={Image3.src} alt="Category 3" className="w-full h-80 object-cover rounded-lg" />
    <div className="flex justify-between items-center mt-2">
      <span className="font-medium">Product Name</span>
      <span className="font-semibold">$79</span>
    </div>
  </div>

  <div>
    <img src={Image4.src} alt="Category 4" className="w-full h-80 object-cover rounded-lg" />
    <div className="flex justify-between items-center mt-2">
      <span className="font-medium">Product Name</span>
      <span className="font-semibold">$199</span>
    </div>
  </div>

  <div>
    <img src={Image1.src} alt="Category 1" className="w-full h-80 object-cover rounded-lg" />
    <div className="flex justify-between items-center mt-2">
      <span className="font-medium">Product Name</span>
      <span className="font-semibold">$99</span>
    </div>
  </div>

  <div>
    <img src={Image2.src} alt="Category 2" className="w-full h-80 object-cover rounded-lg" />
    <div className="flex justify-between items-center mt-2">
      <span className="font-medium">Product Name</span>
      <span className="font-semibold">$149</span>
    </div>
  </div>

  <div>
    <img src={Image3.src} alt="Category 3" className="w-full h-80 object-cover rounded-lg" />
    <div className="flex justify-between items-center mt-2">
      <span className="font-medium">Product Name</span>
      <span className="font-semibold">$79</span>
    </div>
  </div>

  <div>
    <img src={Image4.src} alt="Category 4" className="w-full h-80 object-cover rounded-lg" />
    <div className="flex justify-between items-center mt-2">
      <span className="font-medium">Product Name</span>
      <span className="font-semibold">$199</span>
    </div>
  </div>

  <div>
    <img src={Image4.src} alt="Category 4" className="w-full h-80 object-cover rounded-lg" />
    <div className="flex justify-between items-center mt-2">
      <span className="font-medium">Product Name</span>
      <span className="font-semibold">$199</span>
    </div>
  </div>
</div>

  </div>
</section>

    </section>
  );
}
