import { cn } from '@/lib/utils';

const StepBar = ({ activeStep }: { activeStep: 1 | 2 | 3 }) => {
  return (
    <div className='mx-auto flex max-w-2xl items-center justify-between'>
      {/* FIRST CIRCLE */}
      <div
        className={cn(
          'relative h-6 w-6 flex-shrink-0 rounded-full border-2 border-green',
          activeStep >= 1 ? 'bg-green' : 'bg-light'
        )}
      >
        <span className='absolute -top-10 left-1/2 -translate-x-1/2 whitespace-nowrap font-medium'>
          Step 1
        </span>
      </div>

      {/* FIRST LINE */}
      <span
        className={cn(
          'h-1 w-full',
          activeStep >= 2 ? 'bg-green' : 'bg-green/20'
        )}
      ></span>

      {/* SECOND CIRCLE */}
      <div
        className={cn(
          'relative h-6 w-6 flex-shrink-0 rounded-full border-2 border-green',
          activeStep >= 2 ? 'bg-green' : 'bg-light'
        )}
      >
        <span className='absolute -top-10 left-1/2 -translate-x-1/2 whitespace-nowrap font-medium'>
          Step 2
        </span>
      </div>

      {/* SECOND LINE */}
      <span
        className={cn(
          'h-1 w-full',
          activeStep === 3 ? 'bg-green' : 'bg-green/20'
        )}
      ></span>

      {/* THIRD CIRCLE */}
      <div
        className={cn(
          'relative h-6 w-6 flex-shrink-0 rounded-full border-2 border-green',
          activeStep === 3 ? 'bg-green' : 'bg-light'
        )}
      >
        <span className='absolute -top-10 left-1/2 -translate-x-1/2 whitespace-nowrap font-medium'>
          Step 3
        </span>
      </div>
    </div>
  );
};

export default StepBar;
