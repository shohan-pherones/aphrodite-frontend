interface SectionTitleProps {
  title: string;
  subtitle: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title, subtitle }) => {
  return (
    <div className='mx-auto mb-10 flex max-w-lg flex-col items-center gap-0.5 text-center'>
      <span>{subtitle}</span>
      <h3 className='text-2xl md:text-3xl lg:text-4xl'>{title}</h3>
    </div>
  );
};

export default SectionTitle;
