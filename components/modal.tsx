import React, { ReactNode, useEffect, useRef, useState } from 'react'
import {Dialog, Transition} from '@headlessui/react';

export const modal = () => {
    const [showModal, setShowModal] = React.useState(false);

  return (
    <>
      <button
        className=" font-work_sans w-full px-3 py-2 rounded-2xl text-white font-bold bg-orange-400 hover:bg-orange-500"
        type="button"
        onClick={() => setShowModal(true)}
      >
        PAY
      </button>
      {showModal ? (
        <>
          <div
            className="font-work_sans  justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-full my-6 mx-auto max-w-sm">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className=" flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                 <div className="justify-center items-center">
                 <p className="text-3xl font-semibold text-center">
                    PAY HOTEL
                  </p>
                 </div>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                 
                 <div className="flex flex-col justify-center items-center">
                    <div className="flex">
                        <p>Hotel name: </p>
                        <p className=' text-orange-400'>name</p>
                    </div>
                    <div className="flex">
                    <p>Amount: </p>
                        <p className='text-orange-400'>10</p>
                    </div>
                 </div>
                 <div className="mt-10 border-gray-400 border-dashed border flex flex-col justify-center items-center">
                    <p className='flex'>Upload recript <p className=' text-orange-400'>here</p> </p>
                    ✅
                 </div>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  <button
                    className=" bg-orange-400 hover:bg-orange-500 text-white  font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    SUMIT
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  )
}

export default modal;
