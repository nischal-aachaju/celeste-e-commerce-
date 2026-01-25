
import { Key, MoveRight } from "lucide-react";

import { useParams } from "react-router-dom";
const AddToCartBtn = () => {
//   localStorage.clear()
  const { id } = useParams();
  const AddToCart = () => {

    const existingCart = JSON.parse(localStorage.getItem("cart")) || [];
    existingCart.push(id);
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

export default AddToCartBtn