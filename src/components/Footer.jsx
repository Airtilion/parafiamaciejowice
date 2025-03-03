import { Icon } from '@iconify/react/dist/iconify.js'
import React from 'react'
import { Link } from 'react-router-dom'
import logoAirtilion from '../assets/media/images/airtilion-footer.svg'

const elements = [
  {
    name: "Nasza Parafia",
    link: "/#parafia"
  },
  {
    name: "Porządek Mszy św.<br />(Informator Parafialny)",
    link: "/informator"
  },
  {
    name: "Wiadomości <br />z życia Kościoła",
    link: "/#krp"
  },
  {
    name: "Galeria",
    link: "/galeria"
  },
  {
    name: "Cmentarz",
    link: "https://airtilion.com"
  },
  {
    name: "Kontakt",
    link: "/#kontakt"
  },
]

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className='bg-white'>
      <div className='w-[80%] mx-auto flex flex-col justify-center items-center max-2xl:w-[95%]'>

        <nav className='w-full flex justify-between text-[16px] text-center py-[32px] max-xl:justify-center max-xl:flex-col max-sm:text-[14px]'>
          <Link to="/standardy-ochrony-dzieci" className='duration-700 hover:text-[#CDA272]'>Standardy Ochrony Dzieci</Link>

          <ul className='flex gap-[40px] max-xl:flex-col max-xl:gap-[16px] max-xl:mt-[16px]'>

            {elements.map((element, index) => (
              <li key={index}>
                <Link to={element.link} dangerouslySetInnerHTML={{ __html: element.name }} className='duration-700 hover:text-[#CDA272]'></Link>
              </li>
            ))}

          </ul>

          <Link to="https://www.facebook.com/groups/336445672064515" target='_blank' rel='noreferrer noopener' className='flex justify-center items-center max-xl:mt-[16px]'>
            <Icon icon="ic:baseline-facebook" width="30" height="30" alt="Ikona facebook" className='text-[#CDA272] duration-700 hover:text-black' />
          </Link>

        </nav>

        <hr className='border-[#D9D9D9] w-full' />

        <p className='mt-[32px] text-[14px] text-center max-w-[600px] max-md:my-[32px]'>Informujemy, że wszystkie dane osobowe zamieszczone na stronie internetowej parafii są umieszczone wyłącznie za zgodą osób zainteresowanych.</p>

        <div className='mt-[64px] mb-[32px] w-full flex justify-between text-[14px] max-md:flex-col max-md:gap-[16px] max-md:mt-0'>
          
          <p className='text-center'>©{currentYear} Parafia pw. Wniebowzięcia Najświętszej Maryi Panny</p>
          <Link to="https://airtilion.com" aria-label="Przejdź do strony Airtillion - projekt i wykonanie" target='_blank' rel="noreferrer noopener" className="text-[#9D9D9D] text-[14px] flex justify-center items-center gap-[10px] duration-700 hover:scale-110">
            <span>Projekt i wykonanie</span>
            <img src={logoAirtilion} alt="Logo Airtilion - projekt i wykonanie" width="138" height="20" loading="lazy" />
          </Link>

        </div>
      </div>
    </footer>
  )
}

export default Footer