import { HiMenu } from "react-icons/hi";
import { FiSearch, FiUser, FiShoppingCart } from "react-icons/fi";

export default function Navbar() {
  return (
    <nav className="absolute text-white bg-black/50 w-full flex items-center justify-between px-4 md:px-6 lg:px-8 py-3 z-50">
      {/* LEFT - Menu */}
      <div className="flex items-center gap-3">
        <HiMenu size={24} className="md:w-7 md:h-7 cursor-pointer" />
      </div>

      {/* MIDDLE - Logo */}
      <div className="text-lg md:text-xl lg:text-2xl font-bold">
        Lavly
      </div>

      {/* RIGHT - Icons */}
      <div className="flex items-center gap-3 md:gap-4">
        <FiSearch size={20} className="md:w-6 md:h-6 cursor-pointer" />
        <FiUser size={20} className="md:w-6 md:h-6 cursor-pointer" />
        <FiShoppingCart size={20} className="md:w-6 md:h-6 cursor-pointer" />
      </div>
    </nav>
  );
}
