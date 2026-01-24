import React, { useState } from "react";
import { Key, MoveRight } from "lucide-react";
import { Heart } from "lucide-react";
import { useParams } from "react-router-dom";
export const AddToCartBTN = () => {
  // localStorage.clear()

  const { id } = useParams();

  const AddToCart = () => {
    // 1. Get existing cart (or empty object)
    const existingCart = JSON.parse(localStorage.getItem("cart")) || {};

    // 2. Add / update product
    existingCart[`product${id}`] = id;

    // 3. Save back
    localStorage.setItem("cart", JSON.stringify(existingCart));
  };

  return (
    <button
      onClick={() => {
        AddToCart();
      }}
      className="w-full h-16 bg-[#000000] text-white flex items-center justify-between px-5 font-mont text-sm font-medium mb-4"
    >
      <span>ADD TO CART</span>
      <span>
        <MoveRight />
      </span>
    </button>
  );
};

export const SaveLaterBTN = () => {
  return (
    <div className="flex w-full gap-2 justify-center items-center mb-6">
      <button className="w-[82%] h-16 bg-[#ffffff] flex items-center justify-center px-5 font-mont border-gray-400/30 border text-[12px] font-semibold mb-4">
        SAVE FOR LATER
      </button>
      <button className="w-[18%] h-16 bg-[#ffffff] flex items-center justify-center px-5 font-mont border-gray-400/30 border text-sm font-medium mb-4">
        <Heart />
      </button>
    </div>
  );
};

export const WriteReviewBTN = () => {
  return (
    <button className="w-full h-16 bg-[#ffffff] flex items-center justify-center px-5 font-mont border-gray-400/30 border text-[12px] font-semibold mb-4">
      SAVE FOR LATER
    </button>
  );
};
