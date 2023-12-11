import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import Products from "@/components/Products";
import Services from "@/components/Services";
import Stats from "@/components/Stats";

const HomePage = () => {
  return (
    <main>
      <Hero />
      <Features />
      <Services />
      <Pricing />
      <Products />
      <Stats />
    </main>
  );
};

export default HomePage;
