import { Icon } from '@iconify/react/dist/iconify.js'
import React from 'react'
import { Link } from 'react-router-dom'

const ChurchCard = ({title, desc, link, image, type=1}) => {
    return (
        <div className={`relative h-full ${type === 0 ? 'w-[300px] max-xl:w-[250px] max-lg:w-[722px] max-lg:h-[250px]' : 'w-[280px] max-xl:w-[230px]'} p-[16px] flex flex-col justify-end rounded-[5px] overflow-hidden max-md:w-[90%] max-md:h-[250px] max-md:mx-auto`}>
            <p className={`text-white relative z-20 ${type === 0 ? 'text-[30px] max-xl:text-[25px]' : 'text-[26px] max-xl:text-[22px]'} max-md:text-[20px]`}>{title}</p>
            <p className={`text-white relative z-20 ${type === 0 ? 'text-[18px]' : 'text-[14px]'} font-extralight max-md:text-[14px]`}>{desc}</p>
            <Link to={link} rel='norefer noopener' className='relative z-20 rotate-180 text-white border-[1px] border-[#fff] w-[40px] h-[40px] rounded-full flex justify-center items-center self-end mt-[24px] hover:bg-[#00000040] duration-500'>
                <Icon icon="ep:arrow-left" width="30" height="20" className='' />
            </Link>
            <img src={image} alt="Zdjęcie przedstawiające cmentarz" width="300" height="500" className='absolute object-cover brightness-40 top-0 left-0 w-full h-full z-10' />
        </div>
    )
}

export default ChurchCard