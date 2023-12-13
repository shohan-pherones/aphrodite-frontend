import { products } from '@/data/products';
import Link from 'next/link';
import ProductCard from './ProductCard';
import SectionTitle from './SectionTitle';

const Products = ({ isNative }: { isNative?: boolean }) => {
  return (
    <section className='container py-20'>
      <SectionTitle
        subtitle='Our Shop'
        title={isNative ? 'Browse all products' : 'Top rated products'}
      />

      <div className='grid grid-cols-1 gap-10 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4'>
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
        <div className='mt-10 flex justify-center'>
          <Link
            href='/products'
            className='flex aspect-square w-36 items-center justify-center rounded-full border-2 border-magenta bg-magenta font-semibold text-white transition hover:bg-transparent hover:text-magenta lg:text-lg xl:text-xl'
          >
            View more
          </Link>
        </div>
      )}
    </section>
  );
};

export default Products;
