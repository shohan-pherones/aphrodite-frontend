import { formatCurrency } from "@/lib/utils";
import { Rating, StickerStar } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { MoveRight, ShoppingCart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const myStyles = {
  itemShapes: StickerStar,
  activeFillColor: "#A26769",
  inactiveFillColor: "#E1CA96",
};

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
    <div className="w-full space-y-5">
      <div className="w-full aspect-square overflow-hidden relative group cursor-pointer">
        <Image
          src={product.image}
          alt={product.title}
          width={512}
          height={512}
          priority
          className="w-full h-full object-cover group-hover:scale-110 group-hover:brightness-75 transition"
        />

        {product.discount && (
          <span className="absolute left-5 top-5 bg-green px-2.5 py-1.5 rounded-full text-white text-xs">
            -{product.discount}%
          </span>
        )}

        <div className="opacity-0 group-hover:opacity-100 absolute top-0 left-0 bottom-0 right-0 w-full h-full flex justify-center items-center gap-5 transition">
          <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:-translate-y-1 transition">
            <ShoppingCart size={18} />
          </button>
          <Link
            className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:-translate-y-1 transition"
            href={`/products/${product._id}`}
          >
            <MoveRight size={18} />
          </Link>
        </div>
      </div>

      <div className="flex flex-col gap-1.5 items-center text-center">
        <span className="uppercase text-rose">{product.category}</span>
        <h4 className="text-xl md:text-2xl">{product.title}</h4>
        <Rating
          style={{ maxWidth: 100 }}
          value={product.rating}
          readOnly
          itemStyles={myStyles}
        />
        <h5 className="flex items-center gap-2.5 text-lg md:text-xl">
          {product.discount ? (
            <span className="text-gray line-through">
              {formatCurrency(product.price)}
            </span>
          ) : null}
          <span>
            {formatCurrency(
              product.discount
                ? product.price - (product.price / 100) * product.discount
                : product.price
            )}
          </span>
        </h5>
      </div>
    </div>
  );
};

export default ProductCard;
