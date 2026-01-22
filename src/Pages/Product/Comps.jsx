import React from "react";
import { Star, Truck, ShieldCheck, RotateCcw } from "lucide-react";
import Ratings from "../../Components/common/Ratings";

export const BreadCrumb = ({ title, category }) => {
  const prodName = title.replace(/\s+/g, "-");
  return (
    <div className="w-full h-[41.6px] px-6 md:px-12 lg:px-20 py-3 text-[12px] font-mont font-md">
      HOME / PRODUCTS / {category.toUpperCase()} / {prodName.toUpperCase()}
    </div>
  );
};

export const BasicInfo = ({ title, price, rating, reviews, stock }) => {
  return (
    <div className="h-fit text&price flex flex-col pb-8 ">
      <span className="text-[10px]">{stock.toUpperCase()}</span>
      <span className="text-3xl font-mont font-extrabold mb-2">{title}</span>
      <div className="text-2xl font-mont font-medium w-full h-13  flex items-center justify-between px-0.5  border-b-gray-400/20 border-b  ">
        <span>${price}</span>
        <div className="flex flex-col gap-1 items-end">
          <Ratings size="70px" value={rating} />
          <span className="text-[10px]">{reviews.length} verified reviews</span>
        </div>
      </div>
    </div>
  );
};

export const Desc = ({ desc }) => {
  return <div className="w-full h-fit text-sm font-light mb-6">{desc}</div>;
};

export const Policy = ({ warrInfo, shipInfo, returnInfo }) => {
  return (
    <div className="flex flex-col justify-center gap-2 w-full h-fit text-[10px] text-green-600 font-mont ">
      <span className="flex gap-1  items-center">
        <Truck size={12} color="#16A34A" />
        {shipInfo}
      </span>
      <span className="flex gap-1  items-center">
        <ShieldCheck color="#16A34A" size={12} />
        {warrInfo}
      </span>
      <span className="flex gap-1  items-center">
        <RotateCcw size={12} color="#16A34A" />
        {returnInfo}
      </span>
    </div>
  );
};
