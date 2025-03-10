import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import TitleCard from '../components/TitleCard'
import FixedBg from '../components/FixedBg'

const Graves = () => {
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }, []);
    return (
        <>
            <TitleCard title="Cmentarz" />
            <section className='my-[64px] w-[1240px] mx-auto max-xl:w-[1000px] max-lg:w-[90%] flex flex-col gap-[32px]'>
                <h2>Cmentarz parafialny</h2>
                <p>Na cmentarzu parafialnym została wykonana inwentaryzacja. Dzięki pracom powstała mapa i plany, sporządzane na podstawie danych z pomiaru geodezyjnego, spis z natury wszystkich osób pochowanych na cmentarzu, stworzono system administracji oraz zbudowano stronę internetową cmentarza. Na stronie znajduje się Interaktywny Plan Cmentarza, na którym można odnaleźć dane o każdym grobie i osobach w nich pochowanych wraz z miniaturą zdjęcia.</p>
                <Link to="http://mogily.pl/maciejowice" rel="noopener noreferer" target='_blank'>
                    <button className='text-[18px] h-[50px] text-black px-[55px] bg-[#CDA272] rounded-[5px] cursor-pointer duration-700 hover:bg-[#947551] hover:text-white max-sm:text-[16px] max-sm:px-[40px]'>Kliknij aby przejść</button>
                </Link>


                <h2 className='mt-[32px]'>Informacje na temat wpłaty na Parafialny Fundusz utrzymania Cmentarza</h2>

                <div>
                    <p className='font-medium mb-[16px]'>Na podstawie uchwały Rady Parafialnej i Administracji Cmentarza dysponent (opiekun) grobu na tutejszym Cmentarzu jest zobowiazany do wpłat na fundusz utrzymania cmentarza:</p>
                    <p>1) opłata za wywóz śmieci – 60 zł / raz w roku (od grobu) </p>
                    <p>2) opłata za miejsce na cmentarzu (pokładne) – 500 zł / raz na 20 lat (od grobu)</p>
                </div>

                <div>
                    <p className='font-medium mb-[16px]'>Opłaty należy wpłacać:</p>
                    <p>Parafia Rzymskokatolicka w Maciejowicach – Cmentarz Numer konta: 11 9217 0001 0035 0118 2000 0040</p>
                </div>

                <div>
                    <p className='font-medium mb-[16px]'>Tytuł wpłaty: </p>
                    <p>1) Opłata za wywóz śmieci – Grobu nr ( ID) ……..</p>
                    <p>lub</p>
                    <p>2) Opłata za pokładne dotyczy - Grobu nr (ID) ………</p>
                </div>
            </section>
            <FixedBg />
        </>
    )
}

export default Graves