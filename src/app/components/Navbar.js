import { HiMenu } from "react-icons/hi";
import { FiSearch, FiUser, FiShoppingCart } from "react-icons/fi";

export default function Navbar() {
  return (
    <nav className="absolute text-white bg-black/50 w-full flex items-center justify-between px-4 py-3">
      {/* LEFT - Menu */}
      <div className="flex items-center gap-3">
        <HiMenu size={28} className="cursor-pointer" />
      </div>

      {/* MIDDLE - Logo */}
      <div className="text-xl font-bold">
        MyLogo
      </div>

      {/* RIGHT - Icons */}
      <div className="flex items-center gap-4">
        <FiSearch size={22} className="cursor-pointer" />
        <FiUser size={22} className="cursor-pointer" />
        <FiShoppingCart size={22} className="cursor-pointer" />
      </div>
    </nav>
  );
}
