import React from "react";
import Image1 from "./assets/cat10.jpg";
import Image2 from "./assets/cat7.jpg";
import Image3 from "./assets/cat6.jpg";
import Image4 from "./assets/cat5.jpg";
import { FiFilter } from "react-icons/fi";
import { FaAngleDown, FaAngleUp, FaStar, FaFacebookF, FaInstagram, FaEnvelope, FaCouch, FaBoxOpen, FaBed, FaBath, FaUtensils, FaLayerGroup, FaTree } from "react-icons/fa";





export default function Categories() {


 const products = [
  {
    id: 1,
    title: "HOMELOFT",
    mainTag: [
      { name: "Popular", icon: <FaStar className="text-white w-4 h-4" /> }
    ],
    subTags: [
      { name: "New Collections", icon: <FaLayerGroup className="text-gray-500 w-4 h-4" /> },
      { name: "Custom Furniture", icon: <FaCouch className="text-gray-500 w-4 h-4" /> }
    ]
  },
  {
    id: 2,
    title: "MATERIAL",
    mainTag: [
      { name: "Popular", icon: <FaStar className="text-white w-4 h-4" /> }
    ],
    subTags: [
      { name: "Wood", icon: <FaTree className="text-gray-500 w-4 h-4" /> },
      { name: "Glass", icon: <FaLayerGroup className="text-gray-500 w-4 h-4" /> },
      { name: "Fabric", icon: <FaCouch className="text-gray-500 w-4 h-4" /> }
    ]
  },
  {
    id: 3,
    title: "PACKAGE",
    mainTag: [
      { name: "Popular", icon: <FaStar className="text-white w-4 h-4" /> }
    ],
    subTags: [
      { name: "Brand", icon: <FaBoxOpen className="text-gray-500 w-4 h-4" /> },
      { name: "Bedroom", icon: <FaBed className="text-gray-500 w-4 h-4" /> },
      { name: "Bathroom", icon: <FaBath className="text-gray-500 w-4 h-4" /> },
      { name: "Kitchen Set", icon: <FaUtensils className="text-gray-500 w-4 h-4" /> }
    ]
  },
  {
    id: 4,
    title: "CONTACT",
    mainTag: [
      { name: "Popular", icon: <FaStar className="text-white w-4 h-4" /> }
    ],
    subTags: [
      { name: "Facebook", icon: <FaFacebookF className="text-gray-500 w-4 h-4" /> },
      { name: "Instagram", icon: <FaInstagram className="text-gray-500 w-4 h-4" /> },
      { name: "Email", icon: <FaEnvelope className="text-gray-500 w-4 h-4" /> }
    ]
  }
];
  return (
    <section className="w-full px-4 sm:px-6 md:px-8 lg:px-12 py-8 sm:py-12 mt-12 sm:mt-16 md:mt-20 border-b border-gray-300">
      {/* TITLE */}
      <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4 md:mb-6">Popular Products</h2>

      {/* TEXT + BUTTON ROW */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-6 md:mb-8 gap-4">
        <p className="text-sm sm:text-base text-gray-600 max-w-xl">
         Join the others who have fallen in love with this popular products. Each item
         has been a top performer.
        </p>

       
      </div>

      <section className="w-full px-0 sm:px-4 md:px-6 py-6 sm:py-8 md:py-12">
  {/* SECTION TITLE */}
    <div className="flex flex-col sm:flex-row text-gray-500 items-center justify-between mb-8 sm:mb-12 gap-3 sm:gap-4 border-t border-b border-gray-300 py-3 sm:py-4"> 
       <p className="w-full sm:w-1/3 flex items-center gap-2 text-left text-sm sm:text-base">
       <FaAngleUp className="w-4 h-4 sm:w-5 sm:h-5" />
        <FaAngleDown className="w-4 h-4 sm:w-5 sm:h-5" />
      </p>
      <p className="w-full sm:w-1/3 text-center text-sm sm:text-base">Our Products</p>
     <p className="w-full sm:w-1/3 flex items-center justify-start sm:justify-end gap-2 text-left sm:text-right text-sm sm:text-base">
        Adjust by
        <FiFilter className="w-4 h-4 sm:w-5 sm:h-5" />
      </p>



    </div>
  {/* TWO-COLUMN LAYOUT */}
  <div className="flex flex-col lg:flex-row gap-6 md:gap-8">
    
    {/* LEFT COLUMN - Guide & Titles */}
    <div className="lg:w-1/4 flex flex-col gap-4 md:gap-6 border-b lg:border-b-0 lg:border-r border-gray-300 pb-6 lg:pb-0 lg:pr-6">
      
      {/* Section 1 */}
      {products.map((product, productIndex) => (



<div  key={product.id} className="flex flex-col gap-10 items-center justify-between transition">
        <div className="w-full">
          <h3 className="text-xl leading-snug">{product.title}</h3>

          { productIndex === 0 && product.mainTag.map((tag, index) => (

            <span key={index} className="flex items-center mt-5 justify-center gap-2 bg-black text-white px-2 py-2 rounded-full">
                {tag.icon} {tag.name}
              </span>
          ))}
        

       <div>

       {product.subTags.map((subTag, index) => (
          <div className="flex items-center justify-left gap-4 px-3 py-2 rounded-full mt-2">
                {subTag.icon}
         <p className="text-gray-500 text-lg flex items-center gap-1">
              {subTag.name}
        </p>
        </div>
       

       ))}
       </div>
        


        </div>

       
       
      </div>
      ))}

    
      {/* Add more sections as needed */}
    </div>

    {/* RIGHT COLUMN - Images */}
   <div className="lg:w-3/4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
  <div>
    <img src={Image1.src} alt="Category 1" className="w-full h-48 sm:h-64 md:h-72 lg:h-80 object-cover rounded-lg" />
    <div className="flex justify-between items-center mt-2">
      <span className="font-medium text-sm sm:text-base">Product Name</span>
      <span className="font-semibold text-sm sm:text-base">$99</span>
    </div>
  </div>

  <div>
    <img src={Image2.src} alt="Category 2" className="w-full h-48 sm:h-64 md:h-72 lg:h-80 object-cover rounded-lg" />
    <div className="flex justify-between items-center mt-2">
      <span className="font-medium text-sm sm:text-base">Product Name</span>
      <span className="font-semibold text-sm sm:text-base">$149</span>
    </div>
  </div>

  <div>
    <img src={Image3.src} alt="Category 3" className="w-full h-48 sm:h-64 md:h-72 lg:h-80 object-cover rounded-lg" />
    <div className="flex justify-between items-center mt-2">
      <span className="font-medium text-sm sm:text-base">Product Name</span>
      <span className="font-semibold text-sm sm:text-base">$79</span>
    </div>
  </div>

  <div>
    <img src={Image4.src} alt="Category 4" className="w-full h-48 sm:h-64 md:h-72 lg:h-80 object-cover rounded-lg" />
    <div className="flex justify-between items-center mt-2">
      <span className="font-medium text-sm sm:text-base">Product Name</span>
      <span className="font-semibold text-sm sm:text-base">$199</span>
    </div>
  </div>

  <div>
    <img src={Image1.src} alt="Category 1" className="w-full h-48 sm:h-64 md:h-72 lg:h-80 object-cover rounded-lg" />
    <div className="flex justify-between items-center mt-2">
      <span className="font-medium text-sm sm:text-base">Product Name</span>
      <span className="font-semibold text-sm sm:text-base">$99</span>
    </div>
  </div>

  <div>
    <img src={Image2.src} alt="Category 2" className="w-full h-48 sm:h-64 md:h-72 lg:h-80 object-cover rounded-lg" />
    <div className="flex justify-between items-center mt-2">
      <span className="font-medium text-sm sm:text-base">Product Name</span>
      <span className="font-semibold text-sm sm:text-base">$149</span>
    </div>
  </div>

  <div>
    <img src={Image3.src} alt="Category 3" className="w-full h-48 sm:h-64 md:h-72 lg:h-80 object-cover rounded-lg" />
    <div className="flex justify-between items-center mt-2">
      <span className="font-medium text-sm sm:text-base">Product Name</span>
      <span className="font-semibold text-sm sm:text-base">$79</span>
    </div>
  </div>

  <div>
    <img src={Image4.src} alt="Category 4" className="w-full h-48 sm:h-64 md:h-72 lg:h-80 object-cover rounded-lg" />
    <div className="flex justify-between items-center mt-2">
      <span className="font-medium text-sm sm:text-base">Product Name</span>
      <span className="font-semibold text-sm sm:text-base">$199</span>
    </div>
  </div>

  <div>
    <img src={Image4.src} alt="Category 4" className="w-full h-48 sm:h-64 md:h-72 lg:h-80 object-cover rounded-lg" />
    <div className="flex justify-between items-center mt-2">
      <span className="font-medium text-sm sm:text-base">Product Name</span>
      <span className="font-semibold text-sm sm:text-base">$199</span>
    </div>
  </div>
</div>

  </div>
</section>

    </section>
  );
}
