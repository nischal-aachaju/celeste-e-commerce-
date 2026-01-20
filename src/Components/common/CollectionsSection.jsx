import React, { useContext } from 'react'


const CollectionsSection = ({data}) => {

    return (
            <div  className=' h-60 w-42  bg-white shadow-[0px_0px_12px_-6px_#000000] overflow-hidden rounded-xl flex flex-col '>
                <img className='h-4/5 w-full bg-cover border-b ' src={data.thumbnail} alt="" />
                <h2 className='text-sm  px-2' >{data.title}</h2>
            </div>
    )
}

export default CollectionsSection
