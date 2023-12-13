import { features } from '@/data/features';
import { MoveRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import SectionTitle from './SectionTitle';

const Features = () => {
  return (
    <section className='bg-yellow'>
      <div className='container py-20'>
        <SectionTitle
          title='Professional
massage & spa center'
          subtitle='Taking Care of You'
        />

        <div className='grid grid-cols-1 gap-10 md:grid-cols-2 xl:grid-cols-3'>
          {features.map((feature) => (
            <div
              key={feature.image}
              className='flex flex-col items-center gap-1.5 text-center'
            >
              <div className='mb-5 aspect-square w-60 overflow-hidden rounded-full'>
                <Image
                  src={feature.image}
                  alt={feature.heading}
                  width={540}
                  height={540}
                  priority
                  className='h-full w-full object-cover'
                />
              </div>
              <span className='text-magenta'>{feature.subheading}</span>
              <h4 className='text-xl md:text-2xl'>{feature.heading}</h4>
              <p>{feature.paragraph}</p>
              <Link
                href='/services'
                className='mt-5 flex h-10 w-10 items-center justify-center rounded-full bg-white transition hover:bg-magenta hover:text-white'
              >
                <MoveRight size={18} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
