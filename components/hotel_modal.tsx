import React from 'react'
import hotel_images from '../public/de_hotel.jpg'
import Image from 'next/image'
import { useRouter } from 'next/router';


export const hotel_modal = () => {
  const router = useRouter();
  function handleClick() {
    
    router.push('../customer_page/hotel_detail');
  }
  return (

    <div onClick={handleClick} className=" border-x border-t p-4 border-[#CBCBCB] flex ... w-full shadow-md shadow-gray-300 rounded-lg mt-10">

      <div className="">
        <Image src={hotel_images} alt='/' className=' w-44' />
      </div>

      <div className=" grow flex flex-col justify-center pl-4">
        <p className=' font-bold'>Four Points by Sheraton Phuket Patong Beach Resort</p>
        <p className=' font-bold bg-orange-400 w-fit px-2 rounded-2xl text-white'>Hotels</p>
        <p className=' font-bold'>Patong Beach, Phuket</p>
      </div>

      <div className="pl-2 font-bold flex flex-col justify-end text-orange-500 border-l-2 border-gray-500">
        <p>100.00 THB</p>
      </div>

    </div>
  )
}

export default hotel_modal
