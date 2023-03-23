import React from 'react'
import hotel_images from '../../public/de_hotel.jpg'
import Image from 'next/image'

export const hotel_detail = () => {
    return (
        <div className="container px-4 mx-auto mt-10 font-work_sans">
            <div className="">
                <p className=' font-bold'>Four Points by Sheraton Phuket Patong Beach Resort</p>
                <p className=' bg-orange-400 font-bold  w-fit px-2 rounded-2xl text-white'>Hotels</p>
                <p className=' font-bold'>Patong Beach, Phuket</p>
            
            </div>

            <div className="mt-10 w-full border  grid grid-rows-3 grid-flow-col gap-4">
                <div className="row-span-3 col-span-3">
                <Image src={hotel_images} alt='/' className='w-full' />
                </div>

                <div className="col-span-1 ... bg-orange-300"><Image src={hotel_images} alt='/' className='' /></div>
                <div className="col-span-1 ... bg-orange-300"><Image src={hotel_images} alt='/' className='' /></div>
                <div className="col-span-1 ... bg-orange-300"><Image src={hotel_images} alt='/' className='' /></div>
                
            </div>
            <div className="mt-10 grid justify-items-end">
                <p className=' font-bold text-orange-400'>100.00 THB</p>
                <button className=' mt-4 font-bold p-2 bg-orange-400 rounded-lg text-white'>Booking</button>
            </div>
        </div>

    )
}

export default hotel_detail
