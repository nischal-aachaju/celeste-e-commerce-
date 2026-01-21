import React from "react";
import { Star, CircleUserRound, Circle } from "lucide-react";

const ReviewComp = () => {
  return (
    <div className=" w-full h-fit  flex flex-col justify-center items-start px-2 border-gray-400/30 border mb-2 gap-1.5 py-2 shrink-0">
      <div className="flex  w-full font-mont justify-between">
        <div className="flex justify-center items-center gap-2 ">
          <CircleUserRound size={28} color="#525252" />
          <div className="flex flex-col">
            <span className="text-sm font-semibold">John Doe</span>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <Star size={14} fill="#ffd700" color="#ffd700" />
          <Star size={14} fill="#ffd700" color="#ffd700" />
          <Star size={14} fill="#ffd700" color="#ffd700" />
          <Star size={14} fill="#ffd700" color="#ffd700" />
          <Star size={14} fill="#ffd700" color="#ffd700" />
        </div>
      </div>

      <span className="font-mont flex justify-center items-center font-semibold">
        Lorem, ipsum dolor.
      </span>

      <span className="font-mont flex justify-center items-center text-[12px]">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima culpa
        nisi tempore error deleniti? Tempora ipsum a delectus ea numquam
      </span>
    </div>
  );
};

const Review = () => {
  return <ReviewComp />;
};

export default Review;
