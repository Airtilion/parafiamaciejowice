import React from 'react'
import TitleCard from '../components/TitleCard'
import ButtonKRP from '../components/ButtonKRP'

const Posts = () => {
  return (
    <>
      <TitleCard title="Parafialny Zespół Charytatywny" />
      <div className='text-[18px] flex flex-col justify-center items-center max-lg:w-[90%] max-lg:mx-auto'>
        
        <div>
          <p className='font-medium'>Bądź na bieżąco!</p>
          <p className='font-light'>Więcej informacji z życia Kościoła znajdziesz w serwisie Katolickiego Radia Podlasie.</p>
        </div>

        <div className='mt-[32px]'>
          <ButtonKRP />
        </div>

      </div>
    </>
  )
}

export default Posts