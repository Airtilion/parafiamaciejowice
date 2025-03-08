import React from 'react'
import bg from '../../assets/media/images/secondary-bg-2.webp'
import { Icon } from '@iconify/react/dist/iconify.js'

const Contact = () => {
    return (
        <section className='relative w-full pb-[32px] pt-[64px] max-xl:pt-[32px]' id="kontakt">
            <article className='w-[1240px] mx-auto flex gap-[128px] max-xl:w-[1000px] max-xl:gap-[64px] max-lg:flex-col max-lg:w-[90%]'>
                
                <div className='relative h-full mt-[-100px] flex flex-col gap-[16px] max-xl:mt-[-80px]'>
                    <div className='w-full bg-white relative z-30 flex items-center justify-center gap-[16px] py-[32px] shadow-[4px_4px_20px_#00000040] rounded-[5px] max-xl:px-[16px]'>
                        <Icon icon="flowbite:map-pin-alt-solid" width="50" height="50" className='relative z-30 text-[#CDA272]'/>
                        <p>Parafia Rzymskokatolicka pw. Wniebowzięcia NMP <br /> ul. Kościelna <br /> 408-480 Maciejowice</p>
                    </div>
                    <iframe className='relative z-30 rounded-[5px] max-xl:w-[500px] max-xl:h-[400px] max-lg:w-full' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19782.33687702834!2d21.540044418560097!3d51.700249339443225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471895206e4c40c1%3A0x427a3c2f2b1e1678!2zS2_Fm2Npw7PFgiBXbmllYm93emnEmWNpYSBOTVAgdyBNYWNpZWpvd2ljYWNo!5e0!3m2!1spl!2spl!4v1741072411430!5m2!1spl!2spl" width="600" height="450" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>

                <div className='relative z-30 text-white flex flex-col gap-[8px] max-lg:text-center max-sm:items-center'>
                    <h2 className='font-light'>Kontakt</h2>

                    <div className='flex gap-[16px] mt-[32px] max-lg:mx-auto'>
                        <Icon icon="mdi:phone" width="30" height="30"/>
                        <p className='text-[20px] font-semibold'>Dane kontaktowe</p>
                    </div>

                    <p>Ks. Proboszcz Andrzej Jaczewski: </p>
                    <p>tel. (25) 682-57-27,</p>
                    <p>kom. +48 512 373 870</p>

                    <p className='mt-[16px] max-sm:max-w-[300px]'>Ks Wikariusz Sławomir Pleszczyński - tel. 506 912 606</p>
                    <p className='max-sm:max-w-[270px]'>Ks. Emeryt Stanisław Marczuk - tel. 502 258 351</p>
                    <p className='max-sm:max-w-[240px]'>ks. Emeryt Józef Franczuk - tel. 784 090 812</p>

                    <div className='flex gap-[16px] mt-[32px] max-lg:mx-auto'>
                        <Icon icon="mdi:bank" width="24" height="24" />
                        <p className='text-[20px] font-semibold'>Wsparcie parafii</p>
                    </div>

                    <p>Parafia Rzymskokatolicka pw. <br /> Wniebowzięcia NPM w Maciejowicach</p>
                    <p>Nr konta: 73 1240 2728 1111 0000 3989 8782</p>
                </div>
            </article>

            <div className='absolute w-full h-full top-0 left-0 bg-[#573C1F] opacity-80 z-20'></div>
            <img src={bg} alt="Zdjęcie tła z kościołem" width="1920" height="250" sizes="(max-width: 1920px) 1920px, 100vw" loading="lazy" className='z-10 absolute w-full h-full object-cover top-0 left-0' />
        </section>
    )
}

export default Contact