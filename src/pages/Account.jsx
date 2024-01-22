
import React from 'react'
import SavedShows from '../Components/SavedShows'

const Account = () => {
  return (
    <div className='w-full h-[400px]'>
        <img
          className="w-full h-full object-cover"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/f841d4c7-10e1-40af-bcae-07a3f8dc141a/f6d7434e-d6de-4185-a6d4-c77a2d08737b/US-en-20220502-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
          alt="/"
        />
        <div className='bg-black/50 fixed top-0 left-0 w-full h-[400px]'></div>
        <div className='fixed top-[20%] left-0 w-full h-[400px] p-8'>
            <h1 className='font-bold text-white lg:text-5xl md:text-4xl sm:text-3xl'>My Shows</h1>
        </div>
        <p className='mt-1 text-xl p-4 font-bold text-gray-600'>My Shows</p>
        <SavedShows />
    </div>
  )
}

export default Account