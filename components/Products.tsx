import { products } from "@/data/products";
import Link from "next/link";
import ProductCard from "./ProductCard";
import SectionTitle from "./SectionTitle";

const Products = ({ isNative }: { isNative?: boolean }) => {
  return (
    <section className="container py-20">
      <SectionTitle
        subtitle="Our Shop"
        title={isNative ? "Browse all products" : "Top rated products"}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-10">
        {!isNative &&
          products
            .sort((x, y) => y.rating - x.rating)
            .slice(0, 8)
            .map((product) => (
              <ProductCard key={product._id} product={product} />
            ))}

        {isNative &&
          products.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
      </div>

      {!isNative && (
        <div className="mt-10 flex justify-center">
          <Link
            href="/products"
            className="w-36 aspect-square bg-magenta rounded-full border-2 border-magenta flex items-center justify-center text-white lg:text-lg xl:text-xl font-semibold hover:bg-transparent hover:text-magenta transition"
          >
            View more
          </Link>
        </div>
      )}
    </section>
  );
};

export default Products;
