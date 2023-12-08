import Link from "next/link";
import ProductCard from "./ProductCard";
import SectionTitle from "./SectionTitle";

const products = [
  {
    _id: "1",
    image: "/assets/images/product-1.jpg",
    category: "Night, Simple, Young",
    title: "Vitamin C serum",
    rating: 5,
    price: 65,
  },
  {
    _id: "2",
    image: "/assets/images/product-2.jpeg",
    category: "Morning, Simple, Young",
    title: "Organic soap",
    rating: 4,
    price: 22,
    discount: 24,
  },
  {
    _id: "3",
    image: "/assets/images/product-3.webp",
    category: "Aging, Night, Young",
    title: "Moisturizing lotion",
    rating: 5,
    price: 49,
    discount: 15,
  },
  {
    _id: "4",
    image: "/assets/images/product-4.webp",
    category: "Morning, Variable, Young",
    title: "Stimulating skincare",
    rating: 4.5,
    price: 225,
  },
  {
    _id: "5",
    image: "/assets/images/product-5.webp",
    category: "Night, Anti-aging, Sensitive",
    title: "Retinol Night Cream",
    rating: 4.8,
    price: 75,
  },
  {
    _id: "6",
    image: "/assets/images/product-6.webp",
    category: "Morning, Organic, All Skin Types",
    title: "Gentle Cleansing Oil",
    rating: 4.6,
    price: 30,
    discount: 10,
  },
  {
    _id: "7",
    image: "/assets/images/product-7.jpg",
    category: "Anti-aging, Antioxidants, Firmer",
    title: "Breast Enhancement Cream",
    rating: 4.9,
    price: 55,
  },
  {
    _id: "8",
    image: "/assets/images/product-8.webp",
    category: "Morning, Brightening, All Skin Types",
    title: "Vitamin C Brightening Serum",
    rating: 4.7,
    price: 42,
    discount: 20,
  },
];

const Products = ({ isNative }: { isNative?: boolean }) => {
  return (
    <section className="container py-20">
      <SectionTitle subtitle="Our Shop" title="Check our goods" />

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-10 mb-10">
        {isNative &&
          products.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}

        {!isNative &&
          products
            .slice(0, 8)
            .map((product) => (
              <ProductCard key={product._id} product={product} />
            ))}
      </div>

      {!isNative && (
        <div className="flex justify-center">
          <Link
            href="/products"
            className="w-36 h-36 rounded-full bg-magenta text-white flex items-center justify-center whitespace-nowrap lg:text-lg xl:text-xl font-semibold border-2 border-magenta hover:bg-transparent transition hover:text-magenta"
          >
            View more
          </Link>
        </div>
      )}
    </section>
  );
};

export default Products;
