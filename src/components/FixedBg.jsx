import React from 'react'
import bg from '../assets/media/images/main-bg.webp'

const FixedBg = () => {
  return (
    <div className='h-dvh w-full fixed top-0 z-[-1]'>
        <div className='w-full bg-[#CDA272] opacity-15'></div>
        <img src={bg} alt="Tło strony" className='absolute w-full h-full object-cover opacity-10'/>
    </div>
  )
}

export default FixedBg