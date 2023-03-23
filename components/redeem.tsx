import React from 'react'

export const redeem = () => {
  return (
    <div className="flex flex-col items-center">
    <p className=' font-bold mb-20 text-2xl'>REDEEM TOKEN</p>
    <div className=" flex  flex-col">
        <div className="flex mb-5">
            <p className=' mr-10 text-xl'>Balance: </p>
           <div className="relative">
            <input type="text" className="text-xl text-center px-2 border border-orange-400 rounded-xl pl-10"></input>
            <div className="absolute inset-y-0 right-0 flex items-center px-3">
            <span className="text-lg text-gray-500">ADM</span>
            </div>
           </div>
        </div>
        <div className="flex mb-5">
            <p className='mr-10  text-xl'>Redeem: </p>
            <div className="relative">
            <input type="text" className="text-xl text-center px-2 border border-orange-400 rounded-xl pl-10"></input>
            <div className="absolute inset-y-0 right-0 flex items-center px-3">
            <span className="text-lg text-gray-500">ADM</span>
            </div>
           </div>
        </div>
        <div className="flex mb-5">
            <p className='mr-10  text-xl'>Fee: </p>
            <div className="relative">
            <input type="text" className="text-xl text-center px-2 border border-orange-400 rounded-xl pl-10"></input>
            <div className="absolute inset-y-0 right-0 flex items-center px-3">
            <span className="text-lg text-gray-500">ADM</span>
            </div>
           </div>
        </div>
        <div className="flex mb-5">
            <p className='mr-10  text-xl'>Get: </p>
            <div className="relative">
            <input type="text" className="text-xl text-center px-2 border border-orange-400 rounded-xl pl-10"></input>
            <div className="absolute inset-y-0 right-0 flex items-center px-3">
            <span className="text-lg text-gray-500">THB</span>
            </div>
           </div>
        </div>
        <div className="flex justify-center items-center">
            <button className='text-xl bg-orange-400  rounded-xl px-10 py-2 text-white font-bold '>SUBMIT</button>
        </div>
    </div>
    <div className=""></div>
    <div className=""></div>
</div>
  )
}

export default redeem
