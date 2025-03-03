import React from 'react'

const TitleCard = ({ title }) => {
    return (
        <div className='top-[50%] -translate-y-[50%] bg-white w-[1100px] mx-auto py-[38px] rounded-[5px] max-xl:w-[950px] max-lg:w-[90%]' style={{ boxShadow: '0 4px 4px 0 rgba(0, 0, 0, 0.25)' }}>
            <h2 className='px-[170px] title-card relative font-light max-lg:px-[100px] max-sm:px-[50px]'>{title}</h2>
        </div>
    )
}

export default TitleCard