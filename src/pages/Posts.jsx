import React, { useRef } from 'react'
import TitleCard from '../components/TitleCard'
import ButtonKRP from '../components/ButtonKRP'
import News from '../components/posts/News'
import FixedBg from '../components/FixedBg'

const Posts = () => {
  const sectionRef = useRef(null);

  const scrollToTop = () => {
    if (sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: 'smooth', });
    }
  };
  return (
    <>
      <TitleCard title="Aktualności" />
      <div className='text-[18px] flex flex-col justify-center items-center max-lg:w-[90%] max-lg:mx-auto'>
        
        <div ref={sectionRef}>
          <p className='font-medium'>Bądź na bieżąco!</p>
          <p className='font-light'>Więcej informacji z życia Kościoła znajdziesz w serwisie Katolickiego Radia Podlasie.</p>
        </div>

        <div className='mt-[32px]'>
          <ButtonKRP />
        </div>

      </div>

      <News scrollToTop={scrollToTop} />
      <FixedBg />
    </>
  )
}

export default Posts