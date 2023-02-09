import Head from 'next/head'

import styles from '@/styles/Home.module.css'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Image from 'next/image'
import promo_imges from '../public/promo-imges.png'
import bankok_image from '../public/bankok-image.jpg'




export default function Home() {
  return (
    <div className=" container px-4 mx-auto ">

      <div className="text-center mt-10 mb-5">
        <p className='text-3xl'>Accommodation Promotions</p>
      </div>

      <div className="grid grid-cols-4 gap-2">

        <div className=" drop-shadow-lg">
          <Image src={promo_imges} alt='/' className='rounded-lg' />
        </div>

        <div className="drop-shadow-lg">
          <Image src={promo_imges} alt='/' className='rounded-lg' />
        </div>

        <div className=" drop-shadow-lg">
          <Image src={promo_imges} alt='/' className='rounded-lg' />
        </div>

        <div className=" drop-shadow-lg">
          <Image src={promo_imges} alt='/' className='rounded-lg' />
        </div>

      </div>

      {/* END-CARD */}

      <div className="text-center mt-10 mb-5">
        <p className='text-3xl'>Accommodation Promotions</p>
      </div>

      <div className="grid grid-cols-4 gap-2">

        <div className=" drop-shadow-lg">
          <Image src={promo_imges} alt='/' className='rounded-lg' />
        </div>

        <div className="drop-shadow-lg">
          <Image src={promo_imges} alt='/' className='rounded-lg' />
        </div>

        <div className=" drop-shadow-lg">
          <Image src={promo_imges} alt='/' className='rounded-lg' />
        </div>

        <div className=" drop-shadow-lg">
          <Image src={promo_imges} alt='/' className='rounded-lg' />
        </div>

      </div>
      {/* END-CARD */}

      <div className="text-center mt-10 mb-5">
        <p className='text-3xl'>Top destinations in Thailand</p>
      </div>

      <div className="grid justify-items-center grid-cols-6 text-center">

        <div className=" drop-shadow-lg">
          <Image src={bankok_image} alt='/' className='rounded-full w-40' />
          <p className=' font-bold'>Bankkok</p>
          <p className=' text-gray-600'>10,831 accommodations</p>
        </div>

        <div className="drop-shadow-lg">
          <Image src={bankok_image} alt='/' className='rounded-full w-40' />
          <p className=' font-bold'>Bankkok</p>
          <p className=' text-gray-600'>10,831 accommodations</p>
        </div>

        <div className=" drop-shadow-lg">
          <Image src={bankok_image} alt='/' className='rounded-full w-40' />
          <p className=' font-bold'>Bankkok</p>
          <p className=' text-gray-600'>10,831 accommodations</p>
        </div>

        <div className=" drop-shadow-lg">
          <Image src={bankok_image} alt='/' className='rounded-full w-40' />
          <p className=' font-bold'>Bankkok</p>
          <p className=' text-gray-600'>10,831 accommodations</p>
        </div>

        <div className=" drop-shadow-lg">
          <Image src={bankok_image} alt='/' className='rounded-full w-40' />
          <p className=' font-bold'>Bankkok</p>
          <p className=' text-gray-600'>10,831 accommodations</p>
        </div>

        <div className=" drop-shadow-lg">
          <Image src={bankok_image} alt='/' className='rounded-full w-40' />
          <p className=' font-bold'>Bankkok</p>
          <p className=' text-gray-600'>10,831 accommodations</p>
        </div>
      </div>
    </div>

  )
}
