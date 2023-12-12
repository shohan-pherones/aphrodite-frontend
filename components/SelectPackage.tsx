import { pricings } from "@/data/pricing";
import { cn, formatCurrency } from "@/lib/utils";
import { useState } from "react";
import { AppointmentFormData } from "./Appointment";
import SectionTitle from "./SectionTitle";

interface SelectPackageProps {
  appointmentData: AppointmentFormData;
  setAppointmentData: (appointmentData: AppointmentFormData) => void;
  activeStep: 1 | 2 | 3;
  setActiveStep: (activeStep: 1 | 2 | 3) => void;
}

const SelectPackage: React.FC<SelectPackageProps> = ({
  appointmentData,
  setAppointmentData,
  activeStep,
  setActiveStep,
}) => {
  const [selectedPackage, setSelectedPackage] = useState<string | null>(null);

  return (
    <div className="pt-10">
      <SectionTitle
        subtitle="Select Package"
        title="Select a package that you want"
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-10 gap-y-5">
        {pricings.map((pricing) => (
          <div
            onClick={() => setSelectedPackage(pricing.id)}
            key={pricing.id}
            className={cn(
              "cursor-pointer border p-5 rounded-lg transition",
              selectedPackage === pricing.id
                ? "bg-green text-white border-solid border-green"
                : "bg-transparent border-gray border-dashed"
            )}
          >
            <h4 className="text-xl md:text-2xl flex gap-2.5 items-center justify-between">
              <span>{pricing.title}</span>
              <span>{formatCurrency(pricing.price)}</span>
            </h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SelectPackage;
