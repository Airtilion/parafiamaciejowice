import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/media/images/parafia.svg'

const NotFound = () => {
  return (
    <main>
      <section className='h-dvh flex flex-col justify-center items-center px-[20px]'>
          <img src={logo} alt="Logo MentorNGO" width="200" height="200" />
          <h1 className='!text-[120px] font-semibold max-lg:!text-[100px] animate-bounce'>Oops!</h1>
          <h2 className='!text-[60px] text-center max-lg:!text-[40px] max-sm:!text-[30px]'>Nie znaleziono strony - 404</h2>
          <p className='text-[20px] text-center max-lg:mt-[16px]'>Wygląda na to, że strona, której szukasz, nie istnieje lub została przeniesiona. Ale nie martw się - pomożemy Ci wrócić na właściwe tory!</p>
          <Link to="/" aria-label="Powrót na stronę główną" className='mt-[32px]'>
            <button className='text-[18px] h-[50px] text-black px-[55px] bg-[#CDA272] rounded-full cursor-pointer duration-700 hover:bg-[#947551] hover:text-white max-sm:text-[16px] max-sm:px-[40px]'>Wróć na stronę główną</button>
          </Link>
      </section>
    </main>
  )
}

export default NotFound