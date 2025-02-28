import React from 'react'

const SingleStatsTail = ({name, after, before, data}) => {
  return (
    <div className='flex flex-col w-[250px] h-[250px] p-[32px] pb-[64px] justify-between bg-white shadow-[4px_4px_4px_#00000025] rounded-[5px] z-20 max-2xl:w-[220px] max-2xl:h-[220px] max-xl:h-[200px] max-xl:w-[200px] max-xl:p-[16px] max-xl:pb-[48px]'>
        <p className='text-[20px] text-[#343434] text-center max-2xl:text-[18px]'>{name}</p>
        <p className='text-[#CDA272] text-[50px] tracking-[0.2] font-semibold text-center max-2xl:text-[40px]'>
          {after.length > 0 && <span className='text-[16px] font-light text-[#343434] mr-[8px]'>{after}</span>}
          {data}
          {before.length > 0 && <span className='text-[16px] font-light text-[#343434] ml-[8px]'>{before}</span>}
        </p>
    </div>
  )
}

export default SingleStatsTail