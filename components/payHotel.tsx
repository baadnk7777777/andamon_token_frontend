import React, { useState } from 'react'
import Modal from "../components/modal";

export const payHotel = () => {
    const [showModal, setModal] = useState(false);

    const handleButtonClick = () => {
        setModal(true);
    }

    const handleButtonClose = () => {
        setModal(false);
    }

  return (
    <div className="flex flex-col items-center font-work_sans">
    <p className=' font-bold text-2xl mb-24'>PAY HOTEL</p>
    <table className='border-separate table-auto text-center'>
        <thead className=' text-xl'>
            <tr className=''>
                <th className=' w-1/3 '>Hotel name</th>
                <th className='w-1/3 '>Amount (THB)</th>
                <th className='w-1/3'></th>
            </tr>
        </thead>
        <tbody className=' text-lg'>
            <tr className=''>
                <td>Naka Residence Hotel</td>
                <td className=' text-orange-400'>10</td>
                <td> <Modal/> </td>
            </tr>
            <tr>
                <td>Naka Residence Hotel</td>
                <td className='text-orange-400'>10</td>
                <td> <Modal/> </td>
            </tr>
            <tr>
                <td>Naka Residence Hotel</td>
                <td className='text-orange-400'>10</td>
                <td> <button className='w-full px-3 py-2 rounded-2xl text-white font-bold bg-orange-400 hover:bg-orange-500'onClick={handleButtonClick}>PAY</button> </td>
            </tr>
        </tbody>
    </table>
    
</div>



  )
}

export default payHotel
