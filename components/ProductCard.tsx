import { formatCurrency } from "@/lib/utils";
import { Rating, StickerStar } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import Image from "next/image";

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

const myStyles = {
  itemShapes: StickerStar,
  activeFillColor: "#A26769",
  inactiveFillColor: "#E1CA96",
};

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="w-full space-y-5">
      <div className="w-full aspect-square overflow-hidden relative">
        <Image
          src={product.image}
          alt={product.title}
          width={512}
          height={512}
          priority
          className="w-full h-full object-cover"
        />
        {product.discount && (
          <span className="absolute left-5 top-5 bg-green px-2.5 py-1.5 rounded-full text-white text-xs">
            -{product.discount}%
          </span>
        )}
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
