import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Categories from "./components/Categories";
import PopularProducts from "./components/PopularProducts";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Categories />
      <PopularProducts />
    </div>
  );
}
