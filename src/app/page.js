import { CartProvider } from './components/CartContext';
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Categories from "./components/Categories";
import PopularProducts from "./components/PopularProducts";
import Premium from "./components/PremiumProducts";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div>
      <CartProvider>
        <Navbar />
        <Hero />
        <Categories />
        <PopularProducts />
        <Premium />
        <Footer />
      </CartProvider>
    </div>
  );
}
