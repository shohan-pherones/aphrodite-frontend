import { pricings } from '@/data/pricing';
import { cn, formatCurrency } from '@/lib/utils';
import { MoveRight } from 'lucide-react';
import { useState } from 'react';
import SectionTitle from '../SectionTitle';
import { AppointmentFormData } from './Appointment';

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

  const handleStepOne = () => {
    if (!selectedPackage) {
      return null;
    }

    setAppointmentData({ ...appointmentData, packageId: selectedPackage });

    setActiveStep(2);
  };

  return (
    <div className='pt-10'>
      <SectionTitle
        subtitle='Select Package'
        title='Select a package that you want'
      />

      <div className='grid grid-cols-1 gap-x-10 gap-y-5 lg:grid-cols-2'>
        {pricings.map((pricing) => (
          <div
            onClick={() => setSelectedPackage(pricing.id)}
            key={pricing.id}
            className={cn(
              'cursor-pointer rounded-lg border p-5 transition',
              selectedPackage === pricing.id
                ? 'border-solid border-green bg-green text-white'
                : 'border-dashed border-gray bg-transparent'
            )}
          >
            <h4 className='flex items-center justify-between gap-2.5 text-xl md:text-2xl'>
              <span>{pricing.title}</span>
              <span>{formatCurrency(pricing.price)}</span>
            </h4>
          </div>
        ))}
      </div>

      <div className='mt-10 flex items-center justify-center gap-5'>
        <button
          onClick={handleStepOne}
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

export default SelectPackage;
