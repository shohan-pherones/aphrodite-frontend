import { MobileDateTimePicker } from '@mui/x-date-pickers';
import dayjs, { Dayjs } from 'dayjs';
import { MoveLeft, MoveRight } from 'lucide-react';
import { useState } from 'react';
import SectionTitle from '../SectionTitle';
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
  const [value, setValue] = useState<Dayjs | null>(dayjs(new Date()));

  const handleStepTwo = () => {
    if (!value) {
      return null;
    }

    setAppointmentData({ ...appointmentData, dateTime: value.format() });

    setActiveStep(3);
  };

  return (
    <div className='pt-10'>
      <SectionTitle
        subtitle='Pick Date & Time'
        title='Pick your suitable date and time'
      />

      <div className='flex justify-center'>
        <MobileDateTimePicker
          value={value}
          onChange={(newValue) => setValue(newValue)}
        />
      </div>

      <div className='mt-10 flex items-center justify-center gap-5'>
        <button
          onClick={() => setActiveStep(1)}
          className='flex items-center gap-2.5 rounded-full bg-black px-5 py-2.5 text-white transition hover:bg-magenta'
        >
          <span>
            <MoveLeft />
          </span>
          Previous step
        </button>
        <button
          onClick={handleStepTwo}
          className='flex items-center gap-2.5 rounded-full bg-black px-5 py-2.5 text-white transition hover:bg-magenta'
        >
          Next step
          <span>
            <MoveRight />
          </span>
        </button>
      </div>
    </div>
  );
};

export default PickDateTime;
