import React from 'react'
import Hotel_modal from '../../components/hotel_modal'


export const hotel_search_page = () => {
    return (
        <div className="container px-4 mx-auto mt-10 font-work_sans">
            {Array.from({ length: 20 }).map((_, index) => (
    <Hotel_modal key={index} />
  ))}
        </div>
    )
}

export default hotel_search_page
