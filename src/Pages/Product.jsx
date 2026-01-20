import React from "react";
import thumbnail from "../assets/images/productpg/thumbnail_placeholder.png";

const Product = () => {
  return (
    <div>
      <div className="w-full h-[41.6px] px-4 py-3 text-[10px]">
        HOME / AUDIO / PULSE ELITE
      </div>

      <main className="w-full h-866.25 0 px-4 ">
        <img src={thumbnail} alt="" srcset="" className="w-180 mb-5" />

        <div className="w-full bg-blue-200 h-[168.4px]"></div>
      </main>
    </div>
  );
};

export default Product;
