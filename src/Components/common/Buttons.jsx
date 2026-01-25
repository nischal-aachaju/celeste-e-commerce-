import React from "react";
import { MoveRight } from "lucide-react";
import { Heart } from "lucide-react";

export const AddToCartBTN = () => {
  return (
    <button
      className="
      group w-full h-16 bg-black text-white
      flex items-center justify-between px-5
      font-mont text-sm font-medium mb-4

      transition-all duration-200 ease-out
      hover:-translate-y-px
      hover:scale-[1.015]
      hover:shadow-[0_8px_20px_rgba(0,0,0,0.25)]
      active:translate-y-0
      active:scale-100
      active:shadow-[0_4px_10px_rgba(0,0,0,0.2)]
      cursor-pointer
    "
    >
      <span>ADD TO CART</span>
      <span className="transition-transform duration-200 ease-out group-hover:translate-x-1">
        <MoveRight />
      </span>
    </button>
  );
};

export const SaveLaterBTN = () => {
  return (
    <div className="flex w-full gap-2 justify-center items-center mb-6">
      {/* TEXT BUTTON */}
      <button
        className="
        w-[82%] h-16 bg-white border border-gray-400/30
        flex items-center justify-center px-5
        font-mont text-[12px] font-semibold

        transition-all duration-200 ease-out
        hover:-translate-y-[0.5px]
        hover:scale-[1.01]
        hover:bg-black/5
        active:translate-y-0
        active:scale-100 cursor-pointer
      "
      >
        SAVE FOR LATER
      </button>

      {/* ICON BUTTON */}
      <button
        className="
        w-[18%] h-16 bg-white border border-gray-400/30
        flex items-center justify-center

        transition-all duration-200 ease-out
        hover:-translate-y-[0.5px]
        hover:scale-[1.05]
        hover:bg-black/5
        active:scale-95 cursor-pointer
      "
      >
        <Heart className="transition-transform duration-200 ease-out hover:scale-110" />
      </button>
    </div>
  );
};

export const WriteReviewBTN = () => {
  return (
    <button
      className="
      w-full h-16 bg-white border border-gray-400/30
      flex items-center justify-center px-5
      font-mont text-[12px] font-semibold mb-4

      transition-colors duration-200 ease-out
      hover:bg-black/5
      active:bg-black/10 cursor-pointer
    "
    >
      WRITE A REVIEW
    </button>
  );
};
