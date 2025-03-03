import { Icon } from '@iconify/react/dist/iconify.js'
import React from 'react'
import { Link } from 'react-router-dom'

const elements = [
  {
    name: "Nasza Parafia",
    link: "/#parafia"
  },
  {
    name: "Porządek Mszy św. (Informator Parafialny)",
    link: "/informator"
  },
  {
    name: "Wiadomości z życia Kościoła",
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
  return (
    <footer className='bg-white'>
      <div className='w-[80%] mx-auto'>

        <nav className='flex justify-between'>
          <Link to="/standardy-ochrony-dzieci">Standardy Ochrony Dzieci</Link>
          <ul className='flex gap-[40px]'>
            
            {elements.map((element, index) => (
              <li key={index} className={`text-[18px] text-center 
              ${index === 1 ? "max-w-[215px]" : index === 2 ? "max-w-[126px]" : ""}
              `}>
                <Link to={element.link}>{element.name}</Link>
              </li>
            ))}
            
          </ul>
          <Link to="https://www.facebook.com/groups/336445672064515" target='_blank' rel='noreferrer noopener'>
            <Icon icon="ic:baseline-facebook" width="25" height="25" alt="Ikona facebook" className='text-[#CDA272]' />
          </Link>
        </nav>

        <hr />

      </div>
    </footer>
  )
}

export default Footer