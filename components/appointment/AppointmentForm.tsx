import { cn } from '@/lib/utils';
import {
  AppointmentUserDetailsSchema,
  AppointmentUserDetailsSchemaType,
} from '@/validations/appointmentUserDetails';
import { zodResolver } from '@hookform/resolvers/zod';
import { MoveLeft, MoveRight } from 'lucide-react';
import { nanoid } from 'nanoid';
import { useForm } from 'react-hook-form';
import SectionTitle from '../SectionTitle';
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
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<AppointmentUserDetailsSchemaType>({
    resolver: zodResolver(AppointmentUserDetailsSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      address: '',
    },
  });

  const onSubmit = (data: AppointmentUserDetailsSchemaType) => {
    setAppointmentData({ ...appointmentData, id: nanoid(), user: { ...data } });
  };

  return (
    <div className='pt-10'>
      <SectionTitle subtitle='User Details' title='Fill up the form' />

      <form
        onSubmit={handleSubmit(onSubmit)}
        className='mx-auto flex max-w-xl flex-col justify-center gap-5'
      >
        {/* NAME */}
        <div className='flex w-full flex-col items-start gap-1.5'>
          <label
            htmlFor='name'
            className={cn(
              'cursor-pointer transition hover:text-green',
              errors.name && 'text-rose'
            )}
          >
            Name
          </label>
          <input
            type='text'
            id='name'
            {...register('name')}
            placeholder='Sarah Parker'
            className={cn(
              'w-full rounded-lg border border-gray/20 bg-transparent p-5 text-xl outline-none transition hover:border-gray/50 focus:border-green',
              errors.name &&
                'border-rose text-rose placeholder:text-rose/50 hover:border-rose focus:border-rose'
            )}
          />
          {errors.name && (
            <span className='text-rose'>{errors.name.message}</span>
          )}
        </div>

        {/* EMAIL */}
        <div className='flex w-full flex-col items-start gap-1.5'>
          <label
            htmlFor='email'
            className={cn(
              'cursor-pointer transition hover:text-green',
              errors.email && 'text-rose'
            )}
          >
            Email
          </label>
          <input
            type='email'
            id='email'
            {...register('email')}
            placeholder='hello@example.com'
            className={cn(
              'w-full rounded-lg border border-gray/20 bg-transparent p-5 text-xl outline-none transition hover:border-gray/50 focus:border-green',
              errors.email &&
                'border-rose text-rose placeholder:text-rose/50 hover:border-rose focus:border-rose'
            )}
          />
          {errors.email && (
            <span className='text-rose'>{errors.email.message}</span>
          )}
        </div>

        {/* PHONE */}
        <div className='flex w-full flex-col items-start gap-1.5'>
          <label
            htmlFor='phone'
            className={cn(
              'cursor-pointer transition hover:text-green',
              errors.phone && 'text-rose'
            )}
          >
            Phone
          </label>
          <input
            type='tel'
            id='phone'
            {...register('phone')}
            placeholder='0123456789'
            className={cn(
              'w-full rounded-lg border border-gray/20 bg-transparent p-5 text-xl outline-none transition hover:border-gray/50 focus:border-green',
              errors.phone &&
                'border-rose text-rose placeholder:text-rose/50 hover:border-rose focus:border-rose'
            )}
          />
          {errors.phone && (
            <span className='text-rose'>{errors.phone.message}</span>
          )}
        </div>

        {/* ADDRESS */}
        <div className='flex w-full flex-col items-start gap-1.5'>
          <label
            htmlFor='address'
            className={cn(
              'cursor-pointer transition hover:text-green',
              errors.address && 'text-rose'
            )}
          >
            Address
          </label>
          <input
            type='text'
            id='address'
            {...register('address')}
            placeholder='123 Main Street, NY'
            className={cn(
              'w-full rounded-lg border border-gray/20 bg-transparent p-5 text-xl outline-none transition hover:border-gray/50 focus:border-green',
              errors.address &&
                'border-rose text-rose placeholder:text-rose/50 hover:border-rose focus:border-rose'
            )}
          />
          {errors.address && (
            <span className='text-rose'>{errors.address.message}</span>
          )}
        </div>

        <div className='mt-5 flex items-center justify-center gap-5'>
          <button
            type='button'
            onClick={() => setActiveStep(2)}
            className='flex items-center gap-2.5 rounded-full bg-black px-5 py-2.5 text-white transition hover:bg-magenta'
          >
            <span>
              <MoveLeft />
            </span>
            Previous step
          </button>
          <button
            type='submit'
            className='flex items-center gap-2.5 rounded-full bg-black px-5 py-2.5 text-white transition hover:bg-magenta'
          >
            Submit
            <span>
              <MoveRight />
            </span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default AppointmentForm;
