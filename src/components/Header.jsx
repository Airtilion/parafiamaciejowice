import React from 'react'

import bg from '../assets/media/images/bg.webp'
import Logo from '../assets/media/images/logo-bn.svg'


const Header = () => {
  return (
    <header className='text-[40px] max-sm:text-[10px]'>
      <section className='h-[778px] relative flex flex-col justify-center items-center gap-4'>
        <img src={bg} width={1920} height={778} alt="Tło headera" className='absolute object-cover w-full h-full'/>

        <img src={Logo} height={200} alt="Logo" className='h-[200px] z-10 max-2xl:h-[160px]'/>
        <h1 className='w-[560px] z-10 text-white text-center font-light max-sm:w-[90%]'>Parafia pw. Wniebowzięcia NMP w Maciejowicach</h1>
        <p className='text-white text-[20px] z-10 font-light max-2xl:text-[18px] max-md:text-[15px]'>Diecezja Siedlecka</p>
      </section>
    </header>
  )
}

export default Header