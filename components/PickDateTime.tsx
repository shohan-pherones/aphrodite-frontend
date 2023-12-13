import { AppointmentFormData } from './Appointment';

interface PickDateTimeProps {
  appointmentData: AppointmentFormData;
  setAppointmentData: (appointmentData: AppointmentFormData) => void;
  activeStep: 1 | 2 | 3;
  setActiveStep: (activeStep: 1 | 2 | 3) => void;
}

const PickDateTime: React.FC<PickDateTimeProps> = ({
  appointmentData,
  setAppointmentData,
  activeStep,
  setActiveStep,
}) => {
  return <div>PickDateTime</div>;
};

export default PickDateTime;
