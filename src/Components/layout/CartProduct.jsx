import React, { useContext } from 'react'
import { ApiDataContext } from '../../Context/ContextApi'

const CartProduct = ({id}) => {
    console.log(id);
   
    const data=useContext(ApiDataContext)
  return (
    <div className='flex items-center gap-4 bg-white w-88 h-30 rounded-2xl'>
        <div className='ml-3 bg-gray-200 h-25 w-22 rounded-xl'><img src={data[id].thumbnail} alt="" /></div>
        <div className='flex w-40 h-full pt-6 font-serif font-semibold '>
            <h2>{data[id].title}</h2>
        </div>
        <div className='flex items-end h-full pb-5 font-semibold'>${data[id].price}</div>
      
    </div>
  )
}

export default CartProduct
