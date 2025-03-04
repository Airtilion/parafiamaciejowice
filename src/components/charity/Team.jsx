import { Icon } from '@iconify/react/dist/iconify.js'
import React from 'react'

const teams = [
    {
        name: "Agnieszka Zaranowicz",
        desc: "Oddam - przyjmę - potrzebuję",
        phone: "516 040 839",
    },
    {
        name: "Katarzyna Paziewska",
        desc: "Oddam - przyjmę - potrzebuję",
        phone: "512 067 952",
    },
    {
        name: "Honorata Pawelec ",
        desc: "Sprzęt rehabilitacyjny",
        phone: "607 452 515",
    },
    {
        name: "Jakub Nowak",
        desc: "Opieka nad wolontariuszami",
        phone: "517 771 966",
    },
    {
        name: "Aldona Siembora",
        desc: "Sekretarz Parafialnego Zespołu Charytatywnego",
        phone: "698 281 571",
    },
    {
        name: "ks. Andrzej Jaczewski",
        desc: "Punkt informacyjno - konsultacyjny dla osób z uzależnieniami",
        phone: "512 373 870",
    },
    {
        name: "Anna Goliszewska",
        desc: "Punkt informacyjno - konsultacyjny dla osób z uzależnieniami",
        phone: "506 257 260",
    },
]

const Team = () => {
    return (
        <section className='mb-[64px] w-[1240px] mx-auto max-xl:w-[1000px] max-lg:w-[90%]'>
            <article className="flex flex-col justify-center items-center">
                <p className='text-[20px] font-semibold text-center max-sm:text-[18px]'>Skład Parafialnego Zespołu Charytatywnego</p>

                <div className='mt-[32px] flex items-center justify-center flex-wrap gap-[16px] max-xl:w-[800px] max-lg:w-[90%]'>
                    {teams.map((team, index) => (
                        <div key={index} className={`px-[16px] py-[8px] flex flex-col justify-center bg-white ${index >= 4 ? 'w-[350px] h-[125px]' : 'w-[285px] h-[100px]'} max-sm:h-[150px]`} style={{ boxShadow: '4px 4px 30px 0 rgba(0, 0, 0, 0.25)' }}>
                            <p className='text-[18px] max-sm:text-[16px]'>{team.name}</p>
                            <span className='text-[14px] text-[#7D7D7D] max-w-[250px]'>{team.desc}</span>
                            <div className='mt-[8px] flex items-center gap-[8px]'>
                                <Icon icon="ic:baseline-phone" width="30" height="30" alt="Ikona telefonu" className='text-[#CDA272]' />
                                <p>{team.phone}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </article>
        </section>
    )
}

export default Team