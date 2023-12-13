import { AppointmentFormData } from './Appointment';

interface AppointmentFormProps {
  appointmentData: AppointmentFormData;
  setAppointmentData: (appointmentData: AppointmentFormData) => void;
  activeStep: 1 | 2 | 3;
  setActiveStep: (activeStep: 1 | 2 | 3) => void;
}

const AppointmentForm: React.FC<AppointmentFormProps> = ({
  appointmentData,
  setAppointmentData,
  activeStep,
  setActiveStep,
}) => {
  return <div>AppointmentForm</div>;
};

export default AppointmentForm;
