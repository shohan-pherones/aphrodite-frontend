import { AppointmentFormData } from "./Appointment";

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
  return <div>SelectPackage</div>;
};

export default SelectPackage;
