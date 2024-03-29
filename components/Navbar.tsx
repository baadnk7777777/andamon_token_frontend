import React from 'react'
import Link from 'next/link'
import andamon_logo from '../public/andamonToken-Logo.png'
import { Popover } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid"
import Image from 'next/image'
import { useRouter } from 'next/router'

import DropdownMenu from '../components/dropdownMenu'



function Navbar() {



  const router = useRouter();

  const hanndleLink = ()=> {
    router.push('/login_screen');
  }

  return (
    <Popover>
    <div className=" font-work_sans mx-auto  flex justify-center items-center px-6 py-2 h-16 bg-white text-gray-400 font-bold  drop-shadow-md shadow-gray-500">
      <Image src={andamon_logo} alt='/' className=' w-52' />
      <div className=" grow">
        <div className=" hidden  lg:flex items-center justify-center gap-2 md:gap-8">
          <Link href="/">Flight + Hotel</Link>
          <Link href="/">Hotel & Homes</Link>
          <Link href="/">Flight</Link>
          <Link href="/">Coupons & Deals</Link>
          <Link href="/">Activity</Link>
          <DropdownMenu/>
        </div>
      </div>


      <div className="lg:hidden flex grow items-center justify-end">
        <Popover.Button className="inline-flex items-center justify-center rounded-md text-orange-400 focus:outline-none focus:ring-inset focus:ring-indigo-500">
          <span className=' sr-only'>Open menu</span>
          <Bars3Icon className='h-6 w-6' aria-hidden="true" />
        </Popover.Button>

      </div>

      <Popover.Panel
        focus
        className=" absolute inset-x-0  top-0 origin-top-right transform p-2 transition md:hidden "
      >
        <div className="rounded-lg bg-[#1F2833] shadow-lg ring-1 ring-black ring-opacity-5 divide-y-2 divide-gray-50">
          <div className="px-5 pt-5 pb-6">
            <div className=" flex items-center justify-between">
              <h1>Andamon Token</h1>
              <div className="mr-2">
                <Popover.Button>
                  <span className='sr-only'>Close menu</span>
                  <XMarkIcon className='h-6 w-6' aria-hidden="true" />
                </Popover.Button>
              </div>
            </div>
            <div className="mt-6 text-white font-bold">
              <nav className='grid gap-8'>
                <Link href="/">Flight + Hotel</Link>
                <Link href="/">Hotel & Homes</Link>
                <Link href="/">Flight</Link>
                <Link href="/">Coupons & Deals</Link>
                <Link href="/">Activity</Link>
              </nav>
            </div>
            <div className=" mt-6 flex flex-col items-center gap-2">
              <Link href="/" className=' font-bold  text-white  bg-gray-400 rounded-md w-full px-4 py-2 border-2 '>Sign in</Link>
              <Link href="/" className=' font-bold text-[#66FCF1]  rounded-md w-full px-4 py-2 border-2'>Create account</Link>
            </div>
          </div>
        </div>
      </Popover.Panel>


      <div onClick={()=> hanndleLink()} className=" hidden lg:block bg-[#FF8000] px-3 py-2 rounded-2xl text-white w-20 text-center">
        <button>LOGIN</button>
      </div>



    </div>
  </Popover>
  )
}

export default Navbar