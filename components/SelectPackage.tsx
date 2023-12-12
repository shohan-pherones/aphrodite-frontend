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
  return (
    <div className="py-20">
      <SectionTitle
        subtitle="Select Package"
        title="Select one package you want"
      />
    </div>
  );
};

export default SelectPackage;
