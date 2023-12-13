'use client';

import { useState } from 'react';
import AppointmentForm from './AppointmentForm';
import PickDateTime from './PickDateTime';
import SelectPackage from './SelectPackage';
import StepBar from './StepBar';

export interface AppointmentFormData {
  id: string;
  packageId: string;
  dateTime: string;
  user: {
    name: string;
    phone: string;
    email: string;
    address: string;
  };
}

const Appointment = () => {
  const [activeStep, setActiveStep] = useState<1 | 2 | 3>(1);
  const [appointmentData, setAppointmentData] = useState<AppointmentFormData>({
    id: '',
    packageId: '',
    dateTime: '',
    user: {
      name: '',
      phone: '',
      email: '',
      address: '',
    },
  });

  return (
    <section className='container min-h-screen py-20'>
      <StepBar activeStep={activeStep} />

      {activeStep === 1 && (
        <SelectPackage
          appointmentData={appointmentData}
          setAppointmentData={setAppointmentData}
          activeStep={activeStep}
          setActiveStep={setActiveStep}
        />
      )}

      {activeStep === 2 && (
        <PickDateTime
          appointmentData={appointmentData}
          setAppointmentData={setAppointmentData}
          activeStep={activeStep}
          setActiveStep={setActiveStep}
        />
      )}

      {activeStep === 3 && (
        <AppointmentForm
          appointmentData={appointmentData}
          setAppointmentData={setAppointmentData}
          activeStep={activeStep}
          setActiveStep={setActiveStep}
        />
      )}
    </section>
  );
};

export default Appointment;
