import React from 'react'

import data from '../../data/home'
import SingleStatsTail from './SingleStatsTail'

const StatsTails = () => {
  return (
    <section className='w-[1096px] relative mx-auto flex justify-between mt-[-48px] z-10 max-2xl:w-[976px] max-xl:w-[896px] max-lg:flex-wrap max-lg:w-[432px] max-lg:gap-[32px] max-sm:w-[200px]'>
        {data.map((element, index) => (
            <SingleStatsTail key={index} name={element.name} before={element.before} after={element.after} data={element.data}/>
        ))}
        <div className='absolute w-full bg-white shadow-[0px_4px_4px_#00000025] h-[180px] top-[50%] left-0 translate-y-[-50%] z-10 max-lg:hidden'></div>
    </section>
  )
}

export default StatsTails