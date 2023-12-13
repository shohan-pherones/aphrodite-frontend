'use client';

import { galleryItems } from '@/data/galleryItems';
import { motion } from 'framer-motion';
import Image from 'next/image';

const Gallery = () => {
  return (
    <section className='container py-20'>
      <div className='gallery__container h-[calc(100vh-6rem)] w-full'>
        {galleryItems.map((item, i) => (
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, delay: i * 0.125, ease: 'easeInOut' }}
            className='gallery__child group h-full w-full overflow-hidden'
            key={item.image}
          >
            <Image
              src={item.image}
              alt={item.alt}
              width={640}
              height={960}
              priority
              className='h-full w-full object-cover transition duration-1000 group-hover:scale-125'
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
