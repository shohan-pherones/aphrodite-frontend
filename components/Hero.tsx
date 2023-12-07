import Link from "next/link";

const Hero = () => {
  return (
    <section className="h-[calc(100vh-6rem)] bg-[url('/assets/images/hero-banner.jpg')] bg-no-repeat bg-cover bg-center bg-fixed relative">
      {/* OVERLAY */}
      <span className="absolute top-0 left-0 right-0 bottom-0 w-full h-full bg-gradient-to-t from-black/50 to-transparent" />

      {/* CONTENTS */}
      <div className="absolute top-0 left-0 right-0 bottom-0 w-full h-full z-[2] container py-20 flex flex-col gap-5 items-center justify-center text-center text-white">
        <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl max-w-5xl">
          Providing memorable beauty experiences
        </h1>
        <p className="max-w-5xl lg:text-lg xl:text-xl">
          Welcome to our Massage Therapy Center, where relaxation and
          rejuvenation meet. Our skilled therapists are dedicated to providing
          personalized treatments tailored to your needs. Whether you seek
          relief from tension, stress reduction, or simply a luxurious pampering
          session, we are here to ensure you leave feeling refreshed and
          revitalized.
        </p>
        <Link
          href="/appointment"
          className="lg:text-lg xl:text-xl inline-block bg-green py-4 px-9 rounded-full font-semibold hover:bg-rose transition"
        >
          Make an appointment
        </Link>
      </div>
    </section>
  );
};

export default Hero;
