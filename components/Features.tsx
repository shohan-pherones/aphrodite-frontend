import { features } from "@/data/features";
import { MoveRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import SectionTitle from "./SectionTitle";

const Features = () => {
  return (
    <section className="bg-yellow">
      <div className="container py-20">
        <SectionTitle
          title="Professional
massage & spa center"
          subtitle="Taking Care of You"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
          {features.map((feature) => (
            <div
              key={feature.image}
              className="flex flex-col gap-1.5 items-center text-center"
            >
              <div className="w-60 aspect-square rounded-full overflow-hidden mb-5">
                <Image
                  src={feature.image}
                  alt={feature.heading}
                  width={540}
                  height={540}
                  priority
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="text-magenta">{feature.subheading}</span>
              <h4 className="text-xl md:text-2xl">{feature.heading}</h4>
              <p>{feature.paragraph}</p>
              <Link
                href="/services"
                className="mt-5 w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-magenta transition hover:text-white"
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
