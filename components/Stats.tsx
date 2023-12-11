import { stats } from "@/data/stats";
import { cn } from "@/lib/utils";

const Stats = () => {
  return (
    <section className="container py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
      {stats.map((stat, index, arr) => (
        <div
          key={stat.label}
          className={cn("flex flex-col items-center gap-2.5", {
            "border-r": index !== arr.length - 1,
          })}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
            {stat.count > 1000
              ? (stat.count / 1000).toFixed(1) + `K`
              : stat.count}
            +
          </h2>
          <h4 className="text-xl md:text-2xl">{stat.label}</h4>
        </div>
      ))}
    </section>
  );
};

export default Stats;
