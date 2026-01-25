import React, { useContext } from 'react'
import { ApiDataContext } from '../../Context/ContextApi'

const CartProduct = ({id}) => {
    console.log(id);
   
    const data=useContext(ApiDataContext)
  return (
    <div className='flex items-center gap-4 bg-white w-[99%] h-30 rounded-2xl'>
        <div className='ml-3 bg-gray-200 h-25 w-3/10 sm:w-2/10 md:w-3/20 lg:w-2/20 rounded-xl'><img className='w-full h-full' src={data[id].thumbnail} alt="" /></div>
        <div className='flex h-full pt-6 font-serif font-semibold w-4/10 '>
            <h2>{data[id].title}</h2>
        </div>
        <div className='flex items-end h-full font-semibold w-3/10 p-b-5 w'>${data[id].price}</div>
      
    </div>
  )
}

export default CartProduct
