import React from 'react'
import meta_mask_logo from '../../public/MetaMask.png'
import Image from 'next/image'
import { useRouter } from 'next/router';

export const customer_page = () => {
  const router = useRouter();
  return (
    <div className=" h-screen font-work_sans ">

            <div className=" bg-orange-200 border-red-400 w-full flex justify-center ">
            <Image src={meta_mask_logo} alt='/' className='w-96'/>
            </div>
            <div className="flex justify-center mt-24 gap-8 font-bold">
                <button onClick={() => {router.push("/customer_page/customer_buytoken_page")}} className=' w-52 text-orange-400 px-3 py-2 border-orange-400 border-2 rounded-xl hover:bg-orange-400 hover:text-white'>BUY TOKEN</button>
                <button onClick={() => {router.push("/customer_page/Search_page")}} className='w-52 text-orange-400 px-3 py-2 border-orange-400 border-2 rounded-xl hover:bg-orange-400 hover:text-white'>CHECK IN</button>
            </div>
            
        </div>
  )
}

export default customer_page
