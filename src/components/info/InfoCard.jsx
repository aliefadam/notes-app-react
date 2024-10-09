const InfoCard = ({ title, count, icon }) => {
  return (
    <div className="flex items-center justify-between flex-[1] border border-t shadow-md p-5 rounded-md text-primary">
      <div className="">
        <h1 className="poppins-medium lg:text-base text-sm">{title}</h1>
        <p className="poppins-semibold text-xl">{count}</p>
      </div>
      <div className="">
        <i className={`fa-regular ${icon} lg:fa-2x fa-2x`}></i>
      </div>
    </div>
  );
};

export default InfoCard;
