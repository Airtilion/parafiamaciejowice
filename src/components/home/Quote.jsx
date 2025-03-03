import React from 'react'

import bg from '../../assets/media/images/secondary-bg-2.webp'
import { Icon } from '@iconify/react/dist/iconify.js'

const Quote = () => {
  return (
    <section className='relative w-full h-[250px] flex items-center justify-center'>
        <article className='flex gap-[64px] items-center max-lg:flex-col max-lg:gap-[16px]'>
            <Icon icon="icon-park-outline:quote" width="160" height="165" className='text-white z-30 max-lg:h-[100px] max-sm:h-[90px]'/>
            <p className='text-white text-[40px] font-extralight z-30 max-w-[680px] max-xl:text-[35px] max-xl:max-w-[590px] max-lg:text-[30px] max-lg:text-center max-sm:max-w-[400px] max-sm:text-[18px] max-sm:px-[16px]'>Abyście się wzajemnie miłowali, tak jak Ja was umiłowałem (J 15,12)</p>
        </article>

        <div className='absolute w-full h-full top-0 left-0 bg-[#573C1F] opacity-80 z-20'></div>
        <img src={bg} alt="Zdjęcie tła z kościołem" width="1920" height="250" sizes="(max-width: 1920px) 1920px, 100vw" loading="lazy"  className='z-10 absolute w-full h-full object-cover top-0 left-0'/>
    </section>
  )
}

export default Quote