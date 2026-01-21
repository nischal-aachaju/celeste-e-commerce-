
import { ArrowRight, Star } from 'lucide-react'
import CollectionsSection from '../Components/common/CollectionsSection'
import { ApiDataContext } from '../Context/ContextApi'
import { useContext } from 'react'
import HomeLastSection from '../Components/layout/HomeLastSection'

const Home = () => {
    const data = useContext(ApiDataContext)
    let collections = []
    let newArrivel = []

    for (let i = 5; i < 9; i++) {
        collections.push(data[i])
        newArrivel.push(data[i + 10])

    }


    return (
        <div className='mt-14'>
            <div className='h-[92vh] w-full  bg-[url("/src/assets/images/heroImage.png")] bg-top bg-cover flex items-center '>
                <div className='h-1/3 w-2/3  text-white pl-4 flex flex-col gap-4'>
                    <div className='text-[12px] text-[#ffffff] w-fit  uppercase backdrop-blur-xs bg-black/10  border border-[#6e581b] rounded-2xl  px-2'>Auttom collection 2026</div>
                    <h2 className=' text-5xl font-serif font-semibold'>Refined <br /><span className='font-normal italic'>Elegance</span></h2>
                    <p className='text-[12px]'>Discover the new standard of luxury with our curated
                        autumn essentials. Timeless pieces designed for the
                        modern connoisseur.
                    </p>
                    <div className=' flex gap-2'>
                        <button className='bg-white shrink-0 text-black text-sm h-10 w-fit px-4 font-semibold'>SHOP NOW</button>
                        <button className='border-white border shrink-0 text-white text-sm h-10 w-fit px-4 font-semibold'>VIEW LOOKBOOK</button>
                    </div>
                </div>

            </div>
            <div className=' h-fit w-full px-4 pt-8 mb-12'>
                <div className='flex justify-between '>
                    <h1 className='text-xl font-serif'>Curated Collections</h1>
                    <a className='text-[15px] w-fit font-semibold text-[#ff9500] flex' href="">VIEW ALL <ArrowRight size={20} strokeWidth={1.7} /></a>
                </div>
                <p className='text-[12px]'>Explore our finest categories selected for you.</p>
                <div className=' mt-10 w-full h-fit grid grid-cols-2 gap-4'>

                    {collections.map((e, idx) => {
                        return <CollectionsSection key={idx} data={e} />
                    })}
                </div>
            </div>
            <div className=' h-200 w-full bg-gray-100'>
                <div className=' h-28  flex flex-col items-center py-8 gap-2'>
                    <p className='uppercase  text-sm text-shadow-[0px_0px_0.1px_#000] font-bold tracking-wide text-[#d4af37]'>Fresh Drop</p>
                    <h5 className=' text-2xl font-serif tracking-wider scale-y-120'>This Week's Arrivels</h5>
                </div>
                <div className=' px-4 py-4 h-152 w-full grid grid-cols-2 '>
                    {newArrivel.map((elem, idx) => {
                        return <div key={idx} className='h-70 w-fit mx-1  shrink-0 overflow-hidden '>
                            <img className=' h-50 bg-gray-300/40 ' src={elem.thumbnail} alt="" />
                            <div className='h-20 w-full flex flex-col pt-2'>
                                <h5 className='text-[14px] font-serif'>{elem.title}</h5>
                                <div className=' flex '>
                                    <div className='  w-1/2'>
                                        <p className='text-[12px]'>{elem.category}</p>
                                        <div><p className='text-[13px] font-bold'>${elem.price}</p></div>
                                    </div>

                                    <div className=' w-1/2 h-full flex justify-end text-[14px] gap-1 pr-2'>
                                        <Star size={18} fill="#ffd700" color="#000" strokeWidth={0.2} />
                                        <p >{elem.rating}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    })}

                </div>
                <div className='h-20 w-full  flex justify-center items-center'>
                    <button className='  uppercase border-[1.5px] border-gray-400/60 text-[13px] font-semibold tracking-wide  text-gray-800 bg-white px-4 py-[0.4rem]'> View All Products</button>
                </div>

            </div>
            <HomeLastSection />
        </div>
    )
}

export default Home;
