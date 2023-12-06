import { cn, formatCurrency } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import SectionTitle from "./SectionTitle";

const pricings = [
  {
    title: "Full Body Massage",
    description: "If you feel tired and stressed after work.",
    price: 55,
  },
  {
    title: "Stress Relief Massage",
    description: "Choose a single massage or take a session.",
    price: 70,
  },
  {
    title: "Body Exfoliant Scrub",
    description: "Helps detox the body and reduce cellulite.",
    price: 45,
  },
  {
    title: "Hot Stone Massage",
    description: "Perfect to relieve back and muscle pains.",
    price: 60,
  },
  {
    title: "Aromatherapy Massage",
    description: "Prevents seasonal flu and improves sleep.",
    price: 30,
  },
  {
    title: "Relaxing Head Massage",
    description: "Get rid of the neck pains and headaches.",
    price: 80,
  },
  {
    title: "Deep Tissue Massage",
    description: "Targets knots and chronic muscle tension.",
    price: 65,
  },
  {
    title: "Prenatal Massage",
    description: "Designed for expectant mothers to ease discomfort.",
    price: 75,
  },
  {
    title: "Reflexology Massage",
    description: "Focuses on pressure points to promote relaxation.",
    price: 50,
  },
  {
    title: "Sports Massage",
    description:
      "Helps athletes recover from injuries and enhance performance.",
    price: 55,
  },
];

const Pricing = ({ isNative }: { isNative?: boolean }) => {
  return (
    <section
      className={cn("relative text-white", {
        "min-h-screen": isNative,
      })}
    >
      {/* BG */}
      <span className="absolute top-0 left-0 bottom-0 right-0 w-full h-full bg-green z-[-2]" />

      {/* MONSTERA */}
      <div
        className={cn(
          "absolute w-80 aspect-square z-[-1] overflow-hidden opacity-10",
          isNative ? "right-10 top-20" : "left-5 bottom-5"
        )}
      >
        <Image
          src="/assets/images/monstera.png"
          alt="Monstera"
          width={512}
          height={512}
          priority
          className="w-full h-full object-cover"
        />
      </div>

      <div className="container py-20">
        <SectionTitle subtitle="Service Plans" title="Special pricing" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-10 gap-y-5 mb-10">
          {pricings.map((pricing) => (
            <div key={pricing.title}>
              <h4 className="text-xl md:text-2xl flex gap-2.5 items-center">
                <span className="whitespace-nowrap">{pricing.title}</span>
                <span className="w-full border-b border-dashed" />
                <span>{formatCurrency(pricing.price)}</span>
              </h4>
              <p>{pricing.description}</p>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <Link
            href="/appointment"
            className="lg:text-lg xl:text-xl inline-block bg-white text-black py-4 px-9 rounded-full font-semibold hover:bg-magenta hover:text-white transition"
          >
            Make an Appointment
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
