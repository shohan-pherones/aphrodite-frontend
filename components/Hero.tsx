import Overlay from './ui/Overlay';
import PrimaryLink from './ui/PrimaryLink';

const Hero = () => {
  return (
    <section className="relative h-[calc(100vh-6rem)] bg-[url('/assets/images/hero-banner.jpg')] bg-cover bg-fixed bg-center bg-no-repeat">
      {/* OVERLAY */}
      <Overlay />

      {/* CONTENTS */}
      <div className='container absolute bottom-0 left-0 right-0 top-0 z-[2] flex h-full w-full flex-col items-center justify-center gap-5 py-20 text-center text-white'>
        <h1 className='max-w-5xl text-5xl md:text-6xl lg:text-7xl xl:text-8xl'>
          Providing memorable beauty experiences
        </h1>
        <p className='max-w-5xl lg:text-lg xl:text-xl'>
          Welcome to our Massage Therapy Center, where relaxation and
          rejuvenation meet. Our skilled therapists are dedicated to providing
          personalized treatments tailored to your needs. Whether you seek
          relief from tension, stress reduction, or simply a luxurious pampering
          session, we are here to ensure you leave feeling refreshed and
          revitalized.
        </p>
        <PrimaryLink href='/appointment'>Make an appointment</PrimaryLink>
      </div>
    </section>
  );
};

export default Hero;
