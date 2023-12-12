import { cn } from "@/lib/utils";

const StepBar = ({ activeStep }: { activeStep: 1 | 2 | 3 }) => {
  return (
    <div className="flex items-center justify-between max-w-2xl mx-auto">
      {/* FIRST CIRCLE */}
      <div
        className={cn(
          "w-6 h-6 rounded-full border-2 border-green flex-shrink-0 relative",
          activeStep >= 1 ? "bg-green" : "bg-light"
        )}
      >
        <span className="absolute left-1/2 -translate-x-1/2 whitespace-nowrap -top-10 font-medium">
          Step 1
        </span>
      </div>

      {/* FIRST LINE */}
      <span
        className={cn(
          "w-full h-1",
          activeStep >= 2 ? "bg-green" : "bg-green/20"
        )}
      ></span>

      {/* SECOND CIRCLE */}
      <div
        className={cn(
          "w-6 h-6 rounded-full border-2 border-green flex-shrink-0 relative",
          activeStep >= 2 ? "bg-green" : "bg-light"
        )}
      >
        <span className="absolute left-1/2 -translate-x-1/2 whitespace-nowrap -top-10 font-medium">
          Step 2
        </span>
      </div>

      {/* SECOND LINE */}
      <span
        className={cn(
          "w-full h-1",
          activeStep === 3 ? "bg-green" : "bg-green/20"
        )}
      ></span>

      {/* THIRD CIRCLE */}
      <div
        className={cn(
          "w-6 h-6 rounded-full border-2 border-green flex-shrink-0 relative",
          activeStep === 3 ? "bg-green" : "bg-light"
        )}
      >
        <span className="absolute left-1/2 -translate-x-1/2 whitespace-nowrap -top-10 font-medium">
          Step 3
        </span>
      </div>
    </div>
  );
};

export default StepBar;
