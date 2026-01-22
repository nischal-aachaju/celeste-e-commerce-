const DimensionComp = ({ e }) => {
  return (
    <div className="w-1/3 h-full  border-gray-400/30 bg-white border flex justify-center flex-col overflow-hidden items-center">
      <span className="font-mont font-bold text-xl">
        {e.length}
        <sup className="text-gray-400 font-normal text-[12px]">
          {e.subScript}
        </sup>
      </span>
      <span className="font-mont text-[8px] font-medium">{e.secText}</span>
    </div>
  );
};

const Dimesions = ({ width, height, depth }) => {
  
  const comps = [
    { length: width, subScript: "cm", secText: "WIDTH" },
    { length: height, subScript: "cm", secText: "HEIGHT" },
    { length: depth, subScript: "cm", secText: "DEPTH" },
  ];

  return (
    <div className="h-23.5 w-full flex items-center justify-center mb-8">
      {comps.map((item, idx) => {
        return <DimensionComp e={item} key={idx} />;
      })}
    </div>
  );
};

export default Dimesions;
