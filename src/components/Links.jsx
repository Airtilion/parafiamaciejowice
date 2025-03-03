import React from 'react'
import { Link } from 'react-router-dom'

import diecezja from '../assets/media/images/links/diecezjaSiedlecka.webp'
import krp from '../assets/media/images/links/krp.webp'
import ekai from '../assets/media/images/links/ekai.webp'
import episkopat from '../assets/media/images/links/episkopat.webp'
import mateusz from '../assets/media/images/links/mateusz.webp'
import opoka from '../assets/media/images/links/opoka.webp'
import radioMaryja from '../assets/media/images/links/radioMaryja.webp'
import brewiarz from '../assets/media/images/links/brewiarz.webp'
import urzadGminy from '../assets/media/images/links/urzadGminy.webp'
import pkwp from '../assets/media/images/links/pkwp.webp'

const elements = [
    {
        img: diecezja,
        title: "Diecezja Siedlecka",
        link: "https://diecezja.siedlce.pl",
    },
    {
        img: krp,
        title: "Katolickie Radio Podlasie",
        link: "https://radiopodlasie.pl"
    },
    {
        img: ekai,
        title: "Katolicka Agencja Informacyjna",
        link: "https://www.ekai.pl"
    },
    {
        img: episkopat,
        title: "Episkopat",
        link: "https://episkopat.pl"
    },
    {
        img: mateusz,
        title: "Mateusz.pl",
        link: "https://mateusz.pl"
    },
    {
        img: opoka,
        title: "Opoka.org",
        link: "http://opoka.org.pl"
    },
    {
        img: radioMaryja,
        title: "Radio Maryja",
        link: "https://www.radiomaryja.pl"
    },
    {
        img: brewiarz,
        title: "Brewiarz online",
        link: "https://www.brewiarz.pl"
    },
    {
        img: urzadGminy,
        title: "Urząd Gminy Maciejowice",
        link: "https://maciejowice.pl"
    },
    {
        img: pkwp,
        title: "Pomoc Kościołowi w Potrzebie",
        link: "https://pkwp.org"
    },
]

const Links = () => {
    return (
        <section className='py-[64px] bg-[#F9F9F9]'>
            <article className='w-[1450px] mx-auto max-2xl:w-[1200px] max-xl:w-[950px] max-lg:w-[90%]'>
                <h2 className='font-light pl-[17.5px] max-2xl:pl-[35px] max-xl:px-[52.5px] max-lg:px-0 max-lg:text-center'>Linki które warto odwiedzić</h2>
                <div className='mt-[32px] flex flex-wrap justify-center items-center gap-[16px]'>
                    {elements.map((element, index) => (
                        <Link to={element.link} key={index} target='_blank' rel='noreferrer noopener' className='flex flex-col justify-center items-center duration-500 hover:scale-95'>
                            <div className='w-[270px] h-[100px] bg-white flex justify-center items-center' style={{boxShadow: '4px 4px 10px 0 rgba(0, 0, 0, 0.25)'}}>
                                <img src={element.img} alt={`Logo ${element.title}`} height="75" loading="lazy" className='object-cover' />
                            </div>
                            <p className='mt-[8px] font-light'>{element.title}</p>
                        </Link>
                    ))}
                </div>
            </article>
        </section>
    )
}

export default Links