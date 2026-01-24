import React, { useContext } from 'react'
import { ApiDataContext } from '../../Context/ContextApi'

const CartProduct = () => {
    const data=useContext(ApiDataContext)
  return (
    <div className='w-88 h-30 bg-white  rounded-2xl flex items-center gap-4'>
        <div className='ml-3 h-25 w-22 bg-gray-200 rounded-xl'><img src={data[9].thumbnail} alt="" /></div>
        <div className=' w-40 h-full font-semibold font-serif flex pt-6'>
            <h2>{data[9].title}</h2>
        </div>
        <div className='font-semibold  h-full flex items-end pb-5'>${data[9].price}</div>
      
    </div>
  )
}

export default CartProduct
