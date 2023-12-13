import { myStyles } from '@/data/ratingStyles';
import { formatCurrency } from '@/lib/utils';
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css';
import { MoveRight, ShoppingCart } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

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
    <div className='flex w-full flex-col gap-5'>
      {/* IMAGE CONTAINER */}
      <div className='group relative aspect-square w-full cursor-pointer overflow-hidden rounded-xl'>
        <Image
          src={product.image}
          alt={product.title}
          width={512}
          height={512}
          priority
          className='h-full w-full object-cover transition duration-300 group-hover:scale-110 group-hover:brightness-90'
        />

        {/* DISCOUNT TOKEN */}
        {product.discount && (
          <span className='absolute left-5 top-5 rounded-full bg-green px-2.5 py-1.5 text-xs font-semibold text-white'>
            -{product.discount}%
          </span>
        )}

        {/* BUTTONS */}
        <div className='absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center gap-5 opacity-0 transition duration-300 group-hover:opacity-100'>
          <button className='flex h-10 w-10 items-center justify-center rounded-full bg-white transition duration-300 hover:-translate-y-1.5'>
            <ShoppingCart size={18} />
          </button>
          <Link
            className='flex h-10 w-10 items-center justify-center rounded-full bg-white transition duration-300 hover:-translate-y-1.5'
            href={`/products/${product._id}`}
          >
            <MoveRight size={18} />
          </Link>
        </div>
      </div>

      {/* TEXT CONTENTS */}
      <div className='flex flex-col items-center gap-1.5 text-center'>
        <span className='text-magenta'>{product.category}</span>
        <h4 className='text-xl md:text-2xl'>{product.title}</h4>
        <Rating
          style={{ maxWidth: 100 }}
          value={product.rating}
          readOnly
          itemStyles={myStyles}
        />
        <h5 className='text-lg md:text-xl'>
          {product.discount ? (
            <span className='flex items-center gap-2.5'>
              <span className='text-gray line-through'>
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
