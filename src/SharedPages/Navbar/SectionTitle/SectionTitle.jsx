const SectionTitle = ({ title, subTitle }) => {
  return (
    <div className="text-center my-8">
      <h1 className="text-xl font-bold text-purple-700">{title}</h1>
      <h1 className=" font-bold ">{subTitle}</h1>
    </div>
  );
};

export default SectionTitle;
