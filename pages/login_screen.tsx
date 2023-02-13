import React from 'react'
import Image from 'next/image'
import andamon_logo from '../public/andamonToken-Logo.png'
import meta_mask_logo from '../public/MetaMask.png'
import Link from 'next/link'

export default function login_screen() {
  return (
    <div className="container px-4 mx-auto ">
      <div className="border mt-10 py-2 px-4 pb-20">

        <div className="flex items-center justify-between">
          <div className="">
            <Image src={andamon_logo} alt='/' className=' w-24' />  
          </div>
          
          <div className="flex gap-4">
            <button className='bg-blue-500 text-white font-bold py-2 px-4 border-b-4 border-blue-700 rounded'>Don’t have account ?</button>
            <button className='bg-blue-500 text-white font-bold py-2 px-4 border-b-4 border-blue-700 rounded'>Create account</button>
          </div>
        </div>

        <div className="flex items-center justify-between">

          <div className="grid place-content-center  w-1/2">
            <h1 className=' text-center'>Sign in with Metamask</h1>
            <Image src={meta_mask_logo} alt='/' className=' w-52 ' />
          </div>



          <div className="w-1/2">
            <h1 className=' font-bold text-start'> Welcome To Andaman Token</h1>


            {/* FROM */}
            <form action="">
              <div className="mb-4">
                <label className='block text-gray-700 text-sm font-bold mb-2'>Email</label>
                <input className='w-full shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline
    ' type="text" placeholder="Email" />
              </div>

              <div className="mb-6">
                <label className='block text-gray-700 text-sm font-bold mb-2'>Password</label>
                <input className='w-full shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline
    ' type="text" placeholder="Password" />
              </div>
            </form>

            <div className="flex items-center justify-between">
              <button className=' w-40 bg-[#1F2833] text-white font-bold py-2 px-4 border-b-4 border-[#18274B] rounded'>Sign in</button>
              <Link className='text-sm font-bold inline-block align-baseline' href="/">Forgot Password?</Link>
            </div>
            {/* ENDFROM */}
          </div>


        </div>
      </div>
    </div>
  )
}

