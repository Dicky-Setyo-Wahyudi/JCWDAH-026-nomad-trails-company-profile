interface SectionTitleProps {title: string; subtitle: string}

const SectionTitle = ({title, subtitle}: SectionTitleProps) => {
  return (
    <div className="text-center mb-12">
      <h2 className="text-4xl font-bold text-[#0F4C75]"> {title} </h2>
      <p className="text-gray-600 mt-3"> {subtitle} </p>
    </div>
  );
};

export default SectionTitle;