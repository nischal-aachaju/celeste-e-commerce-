import React from "react";
import CartProduct from "../Components/layout/CartProduct";

const Cart = () => {
    const cartData=JSON.parse(localStorage.getItem("cart"))
    // console.log(cartData);
    
  return (
    <div className="bg-gray-200 h-screen w-full flex flex-col mt-12 pt-2">
      <div className=" pl-4 w-full h-30 pb-10 flex " >
        <div className="h-full w-2/3 flex flex-col justify-end ">
          <h4 className="text-2xl font-serif font-semibold">Shopping Cart</h4>
          <p>
            you have <span className="text-blue-500 font-semibold">3 items</span> in your bag
          </p>
        </div> 
        <div className="h-full w-1/3  text-[12px] flex items-end">
            CONTINUE SHOPPING
        </div>
      </div>
      <div className="w-full h-full px-4 flex flex-col gap-3">

{cartData?.length > 0 ? (
  cartData.map((e, idx) => (
    <CartProduct key={idx} id={Number(e)} />
  ))
) : (
  <p>Your cart is empty</p>
)}

      </div>
    </div>
  );
};

export default Cart;
