import React, { useEffect, useRef } from 'react'
import Logo from '../assets/media/images/parafia.svg'
import { Link } from 'react-router-dom'

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

const Navbar = () => {
    const menuRef = useRef(null);
    const mobileMenuRef = useRef(null);

    const menuVisibilityHandle = () => {
        const mButton = menuRef.current;
        const mMenu = mobileMenuRef.current;
        mButton.classList.contains("active") ? mButton.classList.remove("active") : mButton.classList.add("active");
        if (mMenu.classList.contains("flex")) {
            mMenu.classList.remove("flex")
            mMenu.classList.add("hidden")
        }
        else {
            mMenu.classList.add("flex");
            mMenu.classList.remove("hidden")
        }
    }

    const handleResize = () => {
        if (window.innerWidth > 1023) {
            mobileMenuRef.current.classList.add("hidden");
            mobileMenuRef.current.classList.remove("flex");
            menuRef.current.classList.remove("active");
        }
    };

    useEffect(() => {
        window.addEventListener('resize', handleResize)
        handleResize();

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [])

    return (
        <nav className='h-[120px] px-[96px] flex items-center justify-between sticky top-0 z-20 bg-white max-2xl:px-[64px] max-xl:h-[100px] max-sm:px-[16px]'>
            <Link to="/">
                <img src={Logo} height={100} alt="Logo parafii Maciejowice" className='h-[100px] max-xl:h-[80px]' />
            </Link>

            <ul className='menu-strips relative flex gap-10 mr-[140px] max-2xl:gap-[24px] max-2xl:mr-[70px] max-xl:gap-[16px] max-lg:hidden'>
                {elements.map((element, index) => (
                    <li key={index} className='text-[18px] text-center hover:text-[#CDA272] duration-500 max-xl:text-[16px]'>
                        <Link to={element.link} dangerouslySetInnerHTML={{ __html: element.name }}></Link>
                    </li>
                ))}
            </ul>

            {/* mobilki */}

            <div ref={menuRef} onClick={menuVisibilityHandle} className='hidden max-lg:flex hamburger-menu w-14 h-14 bg-[#CDA272] relative flex-col justify-between items-center py-4 px-3'>
                <span className='w-8 h-1 bg-white duration-500'></span>
                <span className='w-8 h-1 bg-white duration-500'></span>
                <span className='w-8 h-1 bg-white duration-500'></span>
            </div>

            <div ref={mobileMenuRef} className='menu-mobile fixed bottom-0 left-0 w-full h-[calc(100dvh-100px)] bg-[#000000c1] backdrop-blur-[5px] hidden justify-center items-center z-20'>
                <ul className='flex flex-col gap-8'>
                    {
                        elements.map((item, index) => (
                            <li key={index} style={{ animationDelay: `${index * 100}ms` }} onClick={menuVisibilityHandle}>
                                <a href={item.link} className={`text-[18px] xl:text-[17px] text-white`}>{item.name}</a>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </nav>
    )
}

export default Navbar