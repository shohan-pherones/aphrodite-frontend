"use client";

import { galleryItems } from "@/data/galleryItems";
import { motion } from "framer-motion";
import Image from "next/image";

const Gallery = () => {
  return (
    <section className="container py-20">
      <div className="gallery__container w-full h-[calc(100vh-6rem)]">
        {galleryItems.map((item, i) => (
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, delay: i * 0.125, ease: "easeInOut" }}
            className="gallery__child w-full h-full overflow-hidden group"
            key={item.image}
          >
            <Image
              src={item.image}
              alt={item.alt}
              width={640}
              height={960}
              priority
              className="w-full h-full object-cover group-hover:scale-125 transition duration-1000"
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
