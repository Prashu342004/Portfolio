import React from 'react'
import SocialLinK from '../utilites/SocialLinK'

const HeroSection = () => {
  return (
    <div className='mt-5 md:flex md:items-start md:gap-5 md:justify-between '>
      <img  src="" alt="" className='bg-red-300 w-full
      h-40
       md:w-3/5 md:h-65 md:my-10' />
      <p className='my-8 py-4 md:w-2/5'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis sequi ullam quos unde corrupti deleniti aperiam quod eveniet! Corrupti, dolore?
      <div className='grid grid-cols-2 w-70 gap-2 my-3 md:mt-10'>
      <SocialLinK />
      <SocialLinK />
      </div>
      </p>
 
    </div>
  )
}

export default HeroSection
