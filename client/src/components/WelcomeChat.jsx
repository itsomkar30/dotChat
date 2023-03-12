import React from 'react'
import { BiDownArrowAlt } from "react-icons/bi";


const WelcomeChat = () => {
  return (
    <div className='flex flex-col justify-center items-center h-full'>
        <h1 className='font-semibold text-[2rem]'>what you like to search?</h1>
        <p className='bg-gray-600 p-1 px-3 mt-3 rounded-lg'>Search Your promt in below input</p>
        <div className='arrow bounce border rounded-full px-2 py-4'>
            <BiDownArrowAlt className='text-[1.5rem]' />
        </div>
    </div>
  )
}

export default WelcomeChat