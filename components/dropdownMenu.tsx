import React from 'react'
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import Link from 'next/link'
import { useRouter } from 'next/router';

export const dropdownMenu = () => {
  const router = useRouter();
  return (
    <Menu>
      {({ open }) => (
        <>
          <Menu.Button className="px-4 py-2 text-sm font-medium text-gray-700 rounded-md border border-gray-300 hover:bg-gray-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-100">
            {/* Your dropdown trigger button */}
          </Menu.Button>
          <Transition
            show={open}
            enter="transition ease-out duration-100 transform"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="transition ease-in duration-75 transform"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Menu.Items className="absolute right-0 z-10 w-56 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              <div className="">
                <ul className=' text-center'>
                  <li  ><button onClick={() => { router.push("/admin_page/admin_page") }}>MINT TOKEN & PAY HOTEL</button></li>
                  <li > <button onClick={() => { router.push("/customer_page/customer_page") }}>BUY TOKEN & CHECK IN</button></li>
                  <li > <button onClick={() => { router.push("/staff_page/staff_page") }}>REDEEM TOKEN & CHECK RECEIPT</button></li>
                </ul>
              </div>
            </Menu.Items>
          </Transition>
        </>
      )}
    </Menu>
  );
}

export default dropdownMenu
