import { myStyles } from "@/data/ratingStyles";
import { formatCurrency } from "@/lib/utils";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { MoveRight, ShoppingCart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface ProductCardProps {
  product: {
    _id: string;
    image: string;
    category: string;
    title: string;
    rating: number;
    price: number;
    discount?: number;
  };
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="w-full flex flex-col gap-5">
      {/* IMAGE CONTAINER */}
      <div className="w-full aspect-square overflow-hidden rounded-xl relative group cursor-pointer">
        <Image
          src={product.image}
          alt={product.title}
          width={512}
          height={512}
          priority
          className="w-full h-full object-cover group-hover:scale-110 group-hover:brightness-90 transition duration-300"
        />

        {/* DISCOUNT TOKEN */}
        {product.discount && (
          <span className="absolute top-5 left-5 bg-green text-white px-2.5 py-1.5 text-xs font-semibold rounded-full">
            -{product.discount}%
          </span>
        )}

        {/* BUTTONS */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center gap-5 opacity-0 group-hover:opacity-100 transition duration-300">
          <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:-translate-y-1.5 transition duration-300">
            <ShoppingCart size={18} />
          </button>
          <Link
            className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:-translate-y-1.5 transition duration-300"
            href={`/products/${product._id}`}
          >
            <MoveRight size={18} />
          </Link>
        </div>
      </div>

      {/* TEXT CONTENTS */}
      <div className="flex flex-col items-center text-center gap-1.5">
        <span className="text-magenta">{product.category}</span>
        <h4 className="text-xl md:text-2xl">{product.title}</h4>
        <Rating
          style={{ maxWidth: 100 }}
          value={product.rating}
          readOnly
          itemStyles={myStyles}
        />
        <h5 className="text-lg md:text-xl">
          {product.discount ? (
            <span className="flex items-center gap-2.5">
              <span className="text-gray line-through">
                {formatCurrency(product.price)}
              </span>
              <span>
                {formatCurrency(
                  product.price - (product.price / 100) * product.discount
                )}
              </span>
            </span>
          ) : (
            <span>{formatCurrency(product.price)}</span>
          )}
        </h5>
      </div>
    </div>
  );
};

export default ProductCard;
