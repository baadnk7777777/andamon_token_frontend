
import React from 'react'
import Link from 'next/link'
import andamon_logo from '../public/andamonToken-Logo.png'
import { Popover } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid"
import Image from 'next/image'
import { Inter } from '@next/font/google'

function Footer() {
    const handleScrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      };
    return (
        <div className="p-4 text-black rounded-lg shadow md:flex md:items-center md:justify-between md:p-6 mt-10">
            
            <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="/" className="hover:underline">Tanakan</a>. All Rights Reserved.
            </span>
            <ul className="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
                <li>
                    <a href="#" className="mr-4 hover:underline md:mr-6 ">About</a>
                </li>
                <li>
                    <a href="#" className="mr-4 hover:underline md:mr-6">Privacy Policy</a>
                </li>
                <li>
                    <a href="#" className="mr-4 hover:underline md:mr-6">Licensing</a>
                </li>
                <li>
                    <a href="#" className="hover:underline">Contact</a>
                </li>
            </ul>
        </div>
    )
}

export default Footer


