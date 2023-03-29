import React from 'react'
import meta_mask_logo from '../../public/MetaMask.png'
import Image from 'next/image'
import { useRouter } from 'next/router';

export const admin_page = () => {
    const router = useRouter();
    return (
        <div className=" h-screen font-work_sans ">

            <div className=" bg-orange-200 border-red-400 w-full flex justify-center ">
            <Image src={meta_mask_logo} alt='/' className='w-96'/>
            </div>
            <div className="flex justify-center mt-24 gap-8 font-bold">
                <button onClick={() => { router.push("/admin_page/admin_mint_page") }}
 className=' w-52 text-orange-400 px-3 py-2 border-orange-400 border-2 rounded-xl hover:bg-orange-400 hover:text-white'>MINT TOKEN</button>
                <button onClick={() => { router.push("/admin_page/admin_payHotel_page") }} className='w-52 text-orange-400 px-3 py-2 border-orange-400 border-2 rounded-xl hover:bg-orange-400 hover:text-white'>PAY HOTEL</button>
            </div>
            
        </div>
    )
}

export default admin_page
