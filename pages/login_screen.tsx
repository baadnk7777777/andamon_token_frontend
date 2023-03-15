import React from 'react'
import Image from 'next/image'
import andamon_logo from '../public/andamonToken-Logo.png'
import meta_mask_logo from '../public/MetaMask.png'
import Link from 'next/link'


export default function login_screen() {
  return (
    <div className=" font-work_sans container px-4 mx-auto h-1/2">
      <div className=" mt-20 py-2 px-4 pb-20 h-full">
        <div className="grid grid-cols-2">
          <div className="mt-auto bg-[#f1e0cd] rounded-full w-fit">
          <Image src={meta_mask_logo} alt='/' className='w-96'/>
          </div>
          <div className=" h-full font-bold mt-auto grid content-center">
            <div className="text-center">
            <p className='text-3xl'>WELCOME TO</p>
            <p className='text-5xl mt-2 mb-4'>ANDAMAN TOKEN</p>
            <button className='text-3xl bg-[#FF8000]  px-14 py-2 rounded-2xl text-white hover:bg-[#f8a24b]'>Login with Metamask</button>
          </div>
            </div>
        </div>
      </div>
    </div>
  )
}


{/* <div className="flex items-center justify-between h-20">
          <div className="">
            <Image src={andamon_logo} alt='/' className='w-1/2' />  
          </div>
          
          <div className="flex gap-4">
            <button className='bg-blue-500 text-white font-bold py-2 px-4 border-b-4 border-blue-700 rounded'>Don’t have account ?</button>
            <button className='bg-blue-500 text-white font-bold py-2 px-4 border-b-4 border-blue-700 rounded'>Create account</button>
          </div>
        </div>

        <div className="flex items-center justify-between">

          <div className="grid place-content-center w-1/2">
            <p className=' text-center font-bold text-gray-700 text-xl'>Sign in with Metamask</p>
            <Image src={meta_mask_logo} alt='/' className='w-96'/>
          </div>



          <div className="w-1/2">
            <h1 className=' font-bold text-start text-2xl mb-12'> Welcome To Andaman Token</h1>


            {/* FROM */}
    //         <form action="">
    //           <div className="mb-4">
    //             <label className='block text-gray-700 text-xl font-bold mb-2'>Email</label>
    //             <input className=' text-xl w-4/5 shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline
    // ' type="text" placeholder="Email" />
    //           </div>

    //           <div className="mb-6 ">
    //             <label className='block text-gray-700 text-xl font-bold mb-2'>Password</label>
    //             <input className=' text-xl w-4/5 shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline
    // ' type="text" placeholder="Password" />
    //           </div>
    //         </form>

    //         <div className="flex items-center justify-between w-4/5  h-20">
    //           <button className=' h-4/5 w-1/2 text-2xl bg-[#1F2833] text-white font-bold py-2 px-4 border-b-4 border-[#18274B] rounded-full'>Sign in</button>
    //           <Link className='text-sm font-bold inline-block align-baseline' href="/">Forgot Password?</Link>
    //         </div>
    //         {/* ENDFROM */}
    //       </div>


    //     </div> */}
