interface SectionTitleProps {
  title: string;
  subtitle: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title, subtitle }) => {
  return (
    <div className="flex flex-col gap-0.5 items-center text-center max-w-lg mx-auto mb-10">
      <span>{subtitle}</span>
      <h3 className="text-2xl md:text-3xl lg:text-4xl">{title}</h3>
    </div>
  );
};

export default SectionTitle;
