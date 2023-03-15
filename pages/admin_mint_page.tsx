import React from 'react'

export const admin_mint_page = () => {
    return (
        <div className=" h-screen font-work_sans flex flex-col justify-center">
            <div className="flex flex-col items-center justify-center">
                <p className=' font-bold mb-20'>MINT TOKEN</p>
                <div className=" flex  flex-col">
                    <div className="flex mb-5">
                        <p className='mr-32'>Mint: </p>
                        <input type="text" className=' text-center px-2 border border-orange-400 rounded-xl'></input>
                        <p className='ml-12'>ADM</p>
                    </div>
                    <div className="flex mb-5">
                        <p className='mr-4'>CurrentTotalSupply: </p>
                        <input type="text" className='text-center px-2 border border-orange-400 rounded-xl'></input>
                        <p className='ml-12'>ADM</p>
                    </div>
                    <div className="flex mb-12">
                        <p className='mr-10'>NewTotalSupply: </p>
                        <input type="text" className='text-center px-2 border border-orange-400 rounded-xl'></input>
                        <p className='ml-12'>ADM</p>
                    </div>
                    <div className="flex justify-center items-center">
                        <button className=' mr-10 bg-orange-300  rounded-xl px-10 py-2 text-white font-bold '>Cancel</button>

                        <button className=' bg-orange-400  rounded-xl px-10 py-2 text-white font-bold '>SUBMIT</button>
                    </div>
                </div>
                <div className=""></div>
                <div className=""></div>
            </div>


        </div>
    )
}

export default admin_mint_page
