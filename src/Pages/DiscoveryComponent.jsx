import React from "react";
import { Star } from "lucide-react";
const DiscoveryComponent = ({elem}) => {

    
  return (
    <div className="w-40 mt-20 h-50 md:w-auto md:aspect-square shrink-0 ">
      <img
        className="bg-white border h-50 md:h-60 border-gray-300/80"
        src={elem.thumbnail}
        alt=""
      />
      <div className="flex flex-col w-full h-20 pt-2">
        <h5 className="text-[14px] font-serif">{elem.title}</h5>
        <div className="flex ">
          <div className="w-1/2 ">
            <p className="text-[12px] uppercase">{elem.category}</p>
            <div>
              <p className="text-[13px] font-bold">${elem.price}</p>
            </div>
          </div>

          <div className=" w-1/2 h-full flex justify-end text-[14px] gap-1 pr-2">
            <Star size={18} fill="#ffd700" color="#000" strokeWidth={0.2} />
            <p>{elem.rating}</p>
          </div>
        </div>
      </div>
    </div>
  )
};
export default DiscoveryComponent;
