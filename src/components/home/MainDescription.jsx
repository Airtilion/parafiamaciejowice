import React from 'react'

import bg from '../../assets/media/images/mass-hours-bg.webp'

const MainDescription = () => {
  return (
    <section className='w-[1240px] flex justify-between items-center mt-[128px] mx-auto gap-[128px] max-2xl:w-[1000px] max-xl:w-[900px] max-lg:flex-col max-lg:w-[80%] max-lg:gap-[64px]'>
        <div className='flex flex-col gap-[32px] flex-1 max-xl:gap-[24px]'>
            <h2 className='text-[30px] font-light max-w-[600px] max-xl:text-[27px] max-lg:text-center max-lg:max-w-full'>Parafia Wniebowzięcia Najświętszej Maryi Panny w Maciejowicach</h2>
            <p className='max-lg:text-center'>Wspólnota o głębokich tradycjach,  łącząca wiernych we wspólnej modlitwie, sakramentach i działaniach duszpasterskich. Jesteśmy miejscem spotkania z Bogiem, otwartym na każdego, kto pragnie pogłębiać swoją wiarę i uczestniczyć w życiu parafialnym.</p>
            <p className='max-lg:text-center'>Nasza parafia należy do Diecezji Siedleckiej, obejmuje wiele miejscowości, a jej historia sięga XII wieku. Głównym ośrodkiem życia duchowego jest nasz piękny kościół parafialny w Maciejowicach.</p>
        </div>
        <div className='w-[350px] h-[400px] relative flex flex-col items-center justify-center gap-[32px] max-sm:w-[100%]'>
            <img src={bg} alt="Zdjęcie przedstawiające wnętrze kościoła" width={350} height={400} loading='lazy' className='absolute w-full h-full object-cover brightness-25 z-0'/>

            <h2 className='text-white relative z-10 text-[30px] font-light max-xl:text-[27px]'>Msze święte</h2>

            <div className='relative z-10'>
                <p className='text-white text-[20px] text-center font-medium'>Dni powszednie</p>
                <p className='text-[#CDA272] text-[20px] font-extrabold text-center'>7.00, 18:00</p>
            </div>

            <div className='relative z-10'>
                <p className='text-white text-[20px] text-center font-medium'>Niedziele i święta</p>
                <p className='text-[#CDA272] text-[20px] font-extrabold text-center'>7:30, 9:30, 11:30, 17:00</p>
            </div>
        </div>
    </section>
  )
}

export default MainDescription