import React from 'react'
import ChurchCard from './ChurchCard'

import cmentarzBg from '../../assets/media/images/cmentarz.webp'
import historiaBg from '../../assets/media/images/historia.webp'
import dofinansowaniaBg from '../../assets/media/images/dofinansowania.webp'
import zespolBg from '../../assets/media/images/zespol.webp'

const Church = () => {
  return (
    <section className='w-full bg-white py-[64px]'>
        <article className='w-[1240px] mx-auto flex gap-[32px] h-[500px] max-xl:gap-[16px] max-xl:w-[988px] max-lg:flex-col-reverse max-lg:w-[722px] max-lg:h-auto max-md:w-full'>
            <ChurchCard title="Cmentarz" desc="więcej o naszym cmentarzu, zasadach korzystania oraz możliwościach pochówku." link="#" image={cmentarzBg} type={0}/>
            
            <div className='flex flex-col justify-between max-lg:gap-[32px]'>
                <div className='max-md:w-[90%] max-md:mx-auto'>
                    <h2>Parafia</h2>
                    <p>Zachęcamy do odkrycia ważnych obszarów życia naszej parafii.</p>
                </div>

                <div className='flex gap-[32px] h-[400px] max-xl:gap-[16px] max-md:flex-col max-md:h-auto'>
                    <ChurchCard title="Historia" desc="Poznaj historię naszej parafii oraz kluczowe wydarzenia, które ukształtowały naszą wspólnotę." link="#" image={historiaBg}/>
                    <ChurchCard title="Parafialny Zespół Charytatywny" desc="Zobacz, jak pomagamy potrzebującym i jak możesz się zaangażować w nasze działania." link="#" image={zespolBg}/>
                    <ChurchCard title="Dofinansowania" desc="Sprawdź, jakie inwestycje są realizowane w naszej parafii oraz plany rozwoju na przyszłość." link="#" image={dofinansowaniaBg}/>
                </div>
            </div>

        </article>
    </section>
  )
}

export default Church