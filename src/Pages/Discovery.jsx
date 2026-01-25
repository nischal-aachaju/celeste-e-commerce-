import React, { useContext } from 'react'
import CollectionsSection from '../Components/common/CollectionsSection'
import { ApiDataContext } from '../Context/ContextApi'
import DiscoveryComponent from './DiscoveryComponent'
import { Link } from 'react-router-dom'
const Discovery = () => {
   const data= useContext(ApiDataContext)
//    console.log(data);
    
  return (
    <div className='flex flex-wrap justify-center w-full gap-2 my-20 h-fit md:pb-20 sm:gap-10 md:gap-20'>
      {data.map((elem,)=>{
        
        return <Link key={elem.id} to={`/products/${elem.id}`} ><DiscoveryComponent elem={elem}  /></Link> 
      })}
      
       {/* <DiscoveryComponent  elem={data[3]}  /> */}
        
    
    </div>
  )
}

export default Discovery
