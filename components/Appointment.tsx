"use client";

import { useState } from "react";
import AppointmentForm from "./AppointmentForm";
import PickDateTime from "./PickDateTime";
import SelectPackage from "./SelectPackage";

interface AppointmentFormData {
  id: string;
  packageId: string;
  date: string;
  time: string;
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
    id: "",
    packageId: "",
    date: "",
    time: "",
    user: {
      name: "",
      phone: "",
      email: "",
      address: "",
    },
  });

  return (
    <section className="min-h-screen container py-20">
      {activeStep === 1 && (
        <SelectPackage
          appointmentData={appointmentData}
          setAppointmentData={setAppointmentData}
          setActiveStep={setActiveStep}
        />
      )}
      {activeStep === 2 && (
        <PickDateTime
          appointmentData={appointmentData}
          setAppointmentData={setAppointmentData}
          setActiveStep={setActiveStep}
        />
      )}
      {activeStep === 3 && (
        <AppointmentForm
          appointmentData={appointmentData}
          setAppointmentData={setAppointmentData}
          setActiveStep={setActiveStep}
        />
      )}
    </section>
  );
};

export default Appointment;
