import React, { useState } from 'react'


import "react-datepicker/dist/react-datepicker.css";

export const Search_page = () => {
    const [startDate, setStartDate] = useState(new Date());
    return (
        <div className=" h-screen font-work_sans flex flex-col justify-center">
            <div className=" w-full flex justify-center ">
                <div className="">
                    
                    <div className="">
                    <p className=' font-bold'>City or hotel name</p>
                    <input type="text" className="border-2 border-orange-400 p-2 w-full  rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent" placeholder="City or hotel" />
                    </div>

                    <div className="flex gap-8 mt-10">
                        <div className="">
                        <p className=' font-bold'>Check-in</p>
                    <input type="text" className="border-2 border-orange-400 p-2 w-96 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent" placeholder="Sun, 26 Mar 2023" />
                    
                        </div>
                        <div className="">
                        <p className=' font-bold'>Check-out</p>
                    <input type="text" className="border-2 border-orange-400 p-2 w-96 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent" placeholder="Sun, 26 Mar 2023" />
                        </div>
                    </div>

                    <div className="mt-10">
                    <p className=' font-bold'>Room type</p>
                    <input type="text" className="border-2 border-orange-400 p-2 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent" placeholder="2 Adult(s), 0 Child, 2 Room" />
                    </div>

                    <div className="mt-10">
                        <button className='w-full bg-orange-400 p-2 rounded-lg font-bold text-white'>SEARCH</button>
                    </div>

                </div>
            </div>

        </div>

    )
}

export default Search_page
