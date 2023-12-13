import { services } from '@/data/services';
import Image from 'next/image';
import SectionTitle from './SectionTitle';
import Overlay from './ui/Overlay';
import PrimaryLink from './ui/PrimaryLink';

const Services = () => {
  return (
    <section className='pt-20'>
      <div className='container mb-20'>
        <SectionTitle
          subtitle='Our Popular Services'
          title='Memorable beauty experience'
        />

        <div className='grid grid-cols-1 gap-10 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4'>
          {services.map((service) => (
            <div
              key={service.image}
              className='flex flex-col items-center gap-1.5 text-center'
            >
              <div className='mb-5 aspect-square w-20 overflow-hidden'>
                <Image
                  src={service.image}
                  alt={service.title}
                  width={512}
                  height={512}
                  priority
                  className='h-full w-full object-cover'
                />
              </div>
              <h4 className='text-xl md:text-2xl'>{service.title}</h4>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* BANNER */}
      <div className="relative h-[60vh] bg-[url('/assets/images/service-banner.jpg')] bg-cover bg-fixed bg-center bg-no-repeat">
        {/* OVERLAY */}
        <Overlay />

        {/* CONTENTS */}
        <div className='container absolute bottom-0 left-0 right-0 top-0 z-[2] flex h-full w-full flex-col items-center justify-center gap-5 py-20 text-center text-white'>
          <h1 className='max-w-5xl text-5xl md:text-6xl lg:text-7xl xl:text-8xl'>
            An incredible spa experience
          </h1>
          <PrimaryLink href='/appointment' className='bg-rose hover:bg-green'>
            Make an appointment
          </PrimaryLink>
        </div>
      </div>
    </section>
  );
};

export default Services;
