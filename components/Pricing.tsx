import { pricings } from "@/data/pricing";
import { cn, formatCurrency } from "@/lib/utils";
import Image from "next/image";
import SectionTitle from "./SectionTitle";
import PrimaryLink from "./ui/PrimaryLink";

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
          <PrimaryLink
            href="/appointment"
            className="bg-white text-black hover:bg-magenta hover:text-white"
          >
            Make an appointment
          </PrimaryLink>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
