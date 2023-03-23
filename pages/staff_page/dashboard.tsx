import andamon_logo from '../../public/andamonToken-Logo.png'
import Image from 'next/image'
import Link from 'next/link'

export default function dashboard() {
    return (
        <div className="container px-4 mx-auto h-1/2">
            <div className=" border">
                <Image src={andamon_logo} alt='/' className=' w-1/6' />
            </div>

            <div className="flex">

                <div className="w-1/5">
                    <div className="grid grid-row-1">
                        <button className=' text-start h-4/5 w-full text-1xl text-orange-500 font-bold py-2 px-4'><Link href="/">Convert ADM TO THB</Link></button>
                        <button className=' text-start h-4/5 w-full text-1xl font-bold py-2 px-4 text-black'><Link href="/">Convert ADM TO THB</Link></button>
                    </div>
                </div>

                <div className=" w-5/6">
                    <p className='text-4xl font-bold mb-5'>Andaman Token Welcome</p>
                    <p className='text-2xl font-bold text-gray-500 mb-10'>Transaction Histroy</p>

                    <div className="relative overflow-x-auto shadow-md sm:rounded-lg  ">
                        <table className=" text-sm text-left text-black w-full">
                            <thead className="text-xs text-black uppercase">
                                <tr>
                                    <th scope="col" className="px-6 py-3">
                                        ID
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Amount(THB)
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Status
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Action
                                    </th>

                                </tr>
                            </thead>
                            <tbody>
                                <tr className=" dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-300">
                                    <th scope="row" className="px-6 py-4 font-medium  whitespace-nowrap ">
                                        Convert ADM to THB
                                    </th>
                                    <td className="px-6 py-4">
                                        999.00
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="flex items-center">
                                            <div className="h-2.5 w-2.5 rounded-full bg-orange-500 mr-2"></div> Padding
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 ">
                                        <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">View</a>
                                    </td>
                                </tr>

                                <tr className=" dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-300">
                                    <th scope="row" className="px-6 py-4 font-medium  whitespace-nowrap ">
                                        Convert ADM to THB
                                    </th>
                                    <td className="px-6 py-4">
                                        999.00
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="flex items-center">
                                            <div className="h-2.5 w-2.5 rounded-full bg-orange-500 mr-2"></div> Padding
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 ">
                                        <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">View</a>
                                    </td>
                                </tr>

                                <tr className=" dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-300">
                                    <th scope="row" className="px-6 py-4 font-medium  whitespace-nowrap ">
                                        Convert ADM to THB
                                    </th>
                                    <td className="px-6 py-4">
                                        999.00
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="flex items-center">
                                            <div className="h-2.5 w-2.5 rounded-full bg-orange-500 mr-2"></div> Padding
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">View</a>
                                    </td>
                                </tr>

                                <tr className=" dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-300">
                                    <th scope="row" className="px-6 py-4 font-medium  whitespace-nowrap ">
                                        Convert ADM to THB
                                    </th>
                                    <td className="px-6 py-4">
                                        999.00
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="flex items-center">
                                            <div className="h-2.5 w-2.5 rounded-full bg-orange-500 mr-2"></div> Padding
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 ">
                                        <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">View</a>
                                    </td>
                                </tr>

                                <tr className=" dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-300">
                                    <th scope="row" className="px-6 py-4 font-medium  whitespace-nowrap ">
                                        Convert ADM to THB
                                    </th>
                                    <td className="px-6 py-4">
                                        999.00
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="flex items-center">
                                            <div className="h-2.5 w-2.5 rounded-full bg-green-500 mr-2"></div> Success
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 ">
                                        <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">View</a>
                                    </td>
                                </tr>

                                <tr className=" dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-300">
                                    <th scope="row" className="px-6 py-4 font-medium  whitespace-nowrap ">
                                        Convert ADM to THB
                                    </th>
                                    <td className="px-6 py-4">
                                        999.00
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="flex items-center">
                                            <div className="h-2.5 w-2.5 rounded-full bg-green-500 mr-2"></div> Success
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 ">
                                        <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">View</a>
                                    </td>
                                </tr>

                            </tbody>
                        </table>
                    </div>



                </div>

                <div className=" grid content-center">
                    {/* FROM */}
                    <form action="">
                        <div className="mb-4">
                            <input className='text-sm  w-full shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline
    ' type="text" placeholder="ADM TOKEN BALANCE : xxxx" />
                        </div>

                        <div className="mb-6 ">
                            <input className=' text-sm w-full shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline
    ' type="text" placeholder="Convert amount" />
                        </div>
                    </form>

                    <div className="flex items-center justify-between w-full  h-20">
                        <button className='  w-full text-2xl bg-[#1F2833] text-white font-bold py-2 px-4 border-b-4 border-[#18274B] rounded-full'>Confirm</button>
                    </div>
                    {/* ENDFROM */}
                </div>

            </div>
        </div>
    )
}

