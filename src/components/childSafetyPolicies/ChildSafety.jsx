import React from 'react'
import { Link } from 'react-router-dom'

const ChildSafety = () => {
    return (
        <section className='mb-[64px] w-[1240px] mx-auto bg-white max-xl:w-[1000px] max-lg:w-[90%]'>
            <article className='flex flex-col justify-center p-[32px]'>
                <h3 className='font-medium text-center'>STANDARDY OCHRONY NIELETNICH I OSÓB BEZBRONNYCH<br />w Parafii pw. Wniebowzięcia NMP w Maciejowicach</h3>
                <div className='space-y-[16px] mt-[16px]'>
                    <p className='text-[20px] text-center max-sm:text-[16px] max-sm:font-medium'>OŚWIADCZENIE</p>
                    <p>W Parafii pw. Wniebowzięcia NMP w Maciejowicach , został opracowany i wprowadzony w życie wewnętrzny dokument, w którym zawarta jest polityka ochrony przebywających tu dzieci i osób bezbronnych zgodnie z obowiązującymi standardami, wyznaczonymi tak przez dokumenty państwowe (Ustawa o zmianie ustawy Kodeks rodzinny i opiekuńczy oraz innych ustaw z dn. 28.07.23 – tzw. Ustawa Kamilka), jak również wskazania wynikające z Wytycznych Kościoła Katolickiego w Polsce. Zestaw ww. dokumentów jest dostępny w kancelarii parafialnej oraz na stronie internetowej parafii są podane do publicznej wiadomości jak również  zasady bezpiecznych relacji pomiędzy dziećmi i miejsca, gdzie można uzyskać pomoc.</p>
                    <p className='text-[20px] text-center max-sm:text-[16px] max-sm:font-medium'>W Parafii pw Wniebowzięcia NMP  został powołany Zespół ds. Prewencji w następującym składzie:</p>
                    <ul className='list-none max-sm:space-y-[8px]'>
                        <li>Osoba odpowiedzialna za standardy - Danuta Stępień  - tel.  697 640 976</li>
                        <li>Osoba zaufana - Elżbieta Lis - tel. 692 294 278 </li>
                        <li>Osoba odpowiedzialna za interwencję - ks. Andrzej Jaczewski, proboszcz parafii - tel. 512 373870</li>
                    </ul>
                    <div className='mt-[32px] flex justify-center items-center'>
                        <Link to="https://docs.google.com/document/d/1-lmUEEMr97dzI1fh2Dxkvm7XMNkTCeDx/edit?tab=t.0" target='_blank' rel='noreferrer noopener'>
                            <button className='text-black cursor-pointer bg-[#CDA272] duration-700 px-[24px] py-[16px] rounded-[5px] hover:bg-[#e7b67f]'>Kliknij aby przejść do dokumentu</button>
                        </Link>
                    </div>
                </div>
            </article>
        </section>
    )
}

export default ChildSafety