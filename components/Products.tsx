"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import SectionTitle from "./SectionTitle";

const products: {
  _id: string;
  image: string;
  category: string;
  title: string;
  rating: number;
  price: number;
  discount?: number;
}[] = [
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
    image: "/assets/images/product-7.webp",
    category: "Hydration, All Skin Types",
    title: "Hyaluronic Acid Hydrating Serum",
    rating: 4.9,
    price: 38,
    discount: 15,
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
  {
    _id: "9",
    image: "/assets/images/product-9.jpg",
    category: "Anti-aging, Antioxidants, Firmer",
    title: "Breast Enhancement Cream",
    rating: 4.2,
    price: 55,
  },
  {
    _id: "10",
    image: "/assets/images/product-10.webp",
    category: "Evening, Anti-aging, Sensitive",
    title: "Retinol Renewal Night Cream",
    rating: 4.8,
    price: 55,
    discount: 10,
  },
];

const Products = ({ isNative }: { isNative?: boolean }) => {
  const [normalizedProducts, setNormalizedProducts] =
    useState<typeof products>(products);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  const categories = new Set(
    products.flatMap((product) => product.category.split(", "))
  );

  const handleCategoryChange = (category: string) => {
    const newSelectedCategories = selectedCategories.includes(category)
      ? selectedCategories.filter((c) => c !== category)
      : [...selectedCategories, category];

    setSelectedCategories(newSelectedCategories);
  };

  useEffect(() => {
    if (selectedCategories.length === 0) {
      setNormalizedProducts(products);
    } else {
      const filteredProducts = products.filter((product) =>
        product.category
          .split(", ")
          .some((cat) => selectedCategories.includes(cat))
      );
      setNormalizedProducts(filteredProducts);
    }
  }, [selectedCategories]);

  return (
    <section className={cn("container py-20", isNative && "min-h-screen")}>
      <SectionTitle
        subtitle="Our Shop"
        title={
          isNative
            ? `${normalizedProducts.length} product${
                normalizedProducts.length > 1 ? "s" : ""
              } available`
            : "Top rated products"
        }
      />

      <div className={cn(isNative && "grid grid-cols-1 md:grid-cols-4 gap-10")}>
        {isNative && (
          <div className="md:col-span-1">
            <div>
              <h4 className="text-lg md:text-xl lg:text-2xl mb-2.5 text-rose">
                Filter products
              </h4>
              {Array.from(categories).map((category, idx) => (
                <div key={idx + category} className="flex items-center gap-1.5">
                  <input
                    type="checkbox"
                    id={category}
                    checked={selectedCategories.includes(category)}
                    onChange={() => handleCategoryChange(category)}
                    className="accent-green cursor-pointer"
                  />
                  <label htmlFor={category} className="cursor-pointer">
                    {category}
                  </label>
                </div>
              ))}
              <button
                onClick={() => setSelectedCategories([])}
                className="mt-2.5 text-green inline-block"
              >
                Clear
              </button>
            </div>
          </div>
        )}

        <div
          className={cn(
            "grid gap-10",
            isNative
              ? "md:col-span-3 md:grid-cols-2 xl:col-span-3 xl:grid-cols-3"
              : "grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 mb-10"
          )}
        >
          {isNative &&
            normalizedProducts
              .sort((a, b) => b.rating - a.rating)
              .map((product) => (
                <ProductCard key={product._id} product={product} />
              ))}

          {!isNative &&
            normalizedProducts
              .sort((a, b) => b.rating - a.rating)
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
      </div>
    </section>
  );
};

export default Products;
