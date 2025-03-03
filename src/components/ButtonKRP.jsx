import React from 'react'
import { Link } from 'react-router-dom'

const ButtonKRP = () => {
    return (
        <Link to="https://podlasie24.pl/siedlce" target='_blank' rel="noreferrer noopener">
            <button className='bg-[#CDA272] text-black px-[18px] py-[12px] rounded-[5px] cursor-pointer duration-700 hover:bg-[#e7b67f] max-sm:text-[16px]'>Kliknij aby przejść do strony serwisu</button>
        </Link>
    )
}

export default ButtonKRP