import React from 'react'

export const payHotel = () => {
  return (
    <div className="flex flex-col items-center">
    <p className=' font-bold mb-20 text-2xl'>MINT TOKEN</p>
    <div className=" flex  flex-col">
        <div className="flex mb-5">
            <p className='mr-40 text-xl'>Mint: </p>
            <input type="text" className='text-xl text-center px-2 border border-orange-400 rounded-xl'></input>
            <p className='ml-12 text-xl'>ADM</p>
        </div>
        <div className="flex mb-5">
            <p className='mr-5 text-xl'>CurrentTotalSupply: </p>
            <input type="text" className='text-xl text-center px-2 border border-orange-400 rounded-xl'></input>
            <p className='ml-12 text-xl'>ADM</p>
        </div>
        <div className="flex mb-12">
            <p className='mr-12 text-xl'>NewTotalSupply: </p>
            <input type="text" className='text-xl text-center px-2 border border-orange-400 rounded-xl'></input>
            <p className='ml-12 text-xl'>ADM</p>
        </div>
        <div className="flex justify-center items-center">
            <button className='text-xl mr-10 bg-orange-300  rounded-xl px-10 py-2 text-white font-bold '>Cancel</button>

            <button className='text-xl bg-orange-400  rounded-xl px-10 py-2 text-white font-bold '>SUBMIT</button>
        </div>
    </div>
    <div className=""></div>
    <div className=""></div>
</div>



  )
}

export default payHotel
