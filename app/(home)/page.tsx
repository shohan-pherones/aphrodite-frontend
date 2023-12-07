import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import Products from "@/components/Products";
import Services from "@/components/Services";

const HomePage = () => {
  return (
    <main>
      <Hero />
      <Features />
      <Services />
      <Pricing />
      <Products />
    </main>
  );
};

export default HomePage;
