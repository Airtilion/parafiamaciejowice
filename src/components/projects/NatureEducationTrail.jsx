import React from 'react'

import project from '../../assets/media/images/projects/project.webp'
import realizationFirst from '../../assets/media/images/projects/realization-1.webp'
import realizationSecond from '../../assets/media/images/projects/realization-2.webp'
import realizationThird from '../../assets/media/images/projects/realization-3.webp'
import realizationFourth from '../../assets/media/images/projects/realization-4.webp'
import realizationFifth from '../../assets/media/images/projects/realization-5.webp'
import { Link } from 'react-router-dom'

const NatureEducationTrail = () => {
    return (
        <section className='py-[64px] bg-white'>
            <article className='mx-auto w-[1240px] px-[16px] max-xl:w-[1000px] max-lg:w-[90%]'>
                <p className='text-center font-semibold text-[18px] max-sm:text-[16px]'>Dzięki dofinansowaniu z WFOŚiGW w Warszawie zrealizowaliśmy:<br />Zadanie pn. ”Ścieżka Przyrodniczo-Edukacyjna, Parafia Rzymskokatolicka w Maciejowicach”.</p>

                <p className='mt-[16px]'>W ramach zadania na terenie Parafii Rzymskokatolickiej w Maciejowicach została wybudowana ścieżka przyrodniczo-edukacyjna stanowiąca świetne połączenie poznawania tajników przyrody z wypoczynkiem na świeżym powietrzu. Elementy powstałej infrastruktury stanowią doskonałe miejsce wypoczynku i spotkań całych rodzin. Dzięki realizacji inwestycji osiągnęliśmy założone cele, tj. podnieśliśmy świadomość ekologiczną w warunkach terenowych oraz kształtujemy postawy proekologiczne i poczucie odpowiedzialności za stan środowiska naturalnego wśród osób odwiedzających ścieżkę, w tym wśród dzieci i młodzieży szkolnej, społeczności lokalnej oraz turystów odwiedzających Maciejowice.</p>
                <p className='mt-[8px]'>Utworzona w ma terenie Parafii ścieżka umożliwia realizowanie różnorodnych działań z udziałem ww. grup odbiorców.</p>
                <p className='mt-[8px]'>Wybudowana ścieżka składa się z:</p>
                <ol className='mt-[8px] list-decimal pl-[32px]'>
                    <li>11 urządzeń edukacyjnych</li>
                    <li>Gry edukacyjne z zakresu Mikologii
                        <ul className='pl-[32px]'>
                            <li>a. Kostki wiedzy z ławką - Poznajemy grzyby - 1 szt.</li>
                            <li>b. Tablica edukacyjna pozioma - C 24(ALI) - Mikro szachy - 1 szt.</li>
                            <li>c. Światowid (3 kostki) Grzyby jadalne - ilustrowane - 1 szt.</li>
                        </ul>
                    </li>
                    <li>Gry edukacyjne z zakresu Ornitologii
                        <ul className='pl-[32px]'>
                            <li>a. Galeria budek lęgowych - Budki lęgowe - ekspozycja - 1 szt.</li>
                            <li>b. Labirynt Natury typ Zegar - Ptasi zegar - 1 szt.</li>
                            <li>c. Tablica edukacyjna pozioma - C24 (ALI) - Ptasie warcaby - 1 szt.</li>
                            <li>d. Puzzle z księgą wiedzy - Dzięcioł Duży, Dzięcioła Czarny/Dzięcioł zielony, Dzięciołęk - 1 szt.</li>
                            <li>e. Zegar przyrody - Rok w lesie - ptaki - 1 szt.</li>
                        </ul>
                    </li>
                    <li>Gry edukacyjne z zakresu Pszczelarstwa
                        <ul className='pl-[32px]'>
                            <li>a. Tablica edukacyjna pozioma C24 (ALI) Pszczele warcaby - 1 szt.</li>
                            <li>b. Sprawność (5 kostek) - Pszczelarz - 1 szt.</li>
                            <li>c. Kaganek wiedzy - Pszczeli Quiz (płytki, dach) - 1 szt.</li>
                            <li>d. II. Wiaty edukacyjnej i 8 szt. ław edukacyjnych.</li>
                        </ul>
                    </li>
                </ol>
                <p className='mt-[16px]'>Wybudowana ścieżka przyrodniczo-edukacyjna zwiększyła świadomość ekologiczna parafian i licznych turystów, pobudziła chęć poznawania przyrody wśród wszystkich osób odwiedzających ścieżkę edukacyjną.</p>
                <p className='mt-[16px]'>Uczniowie zyskali możliwość nabycia wiedzy i umiejętności, które sprawiają, że stają się ludźmi odpowiedzialnymi za stan środowiska w którym żyją, uczą się, w przyszłości będą pracować.</p>
                <p className='mt-[16px]'>W ramach zadania terminowo osiągnięto zaplanowany efekt rzeczowy tj. w terminie 30.05.2023 r. została wybudowana ścieżka przyrodniczo-edukacyjna o długości 105,6 m z 20 elementami edukacyjnymi.</p>

                <Link to="https://parafiamaciejowice.pl/wp-content/uploads/2025/03/dofinansowanie-sciezka.webp" target='_blank' rel="noreferrer noopener">
                    <img src={project} width="499" height="349" alt="Zdjęcie przedstawiające projekt dofinansowania" loading="lazy" className='object-cover mt-[64px] mx-auto' style={{ boxShadow: '4px 4px 20px 0 rgba(0, 0, 0, 0.25)' }} />
                </Link>

                <div className='mt-[64px] flex justify-center items-center flex-wrap gap-[16px]'>
                    <img src={realizationFirst} width="400" height="350" alt="Zdjęcie przedstawiające realizacje projektu" loading='lazy' className='object-cover' style={{ boxShadow: '4px 4px 20px 0 rgba(0, 0, 0, 0.25)' }} />
                    <img src={realizationSecond} width="400" height="350" alt="Zdjęcie przedstawiające realizacje projektu" loading='lazy' className='object-cover' style={{ boxShadow: '4px 4px 20px 0 rgba(0, 0, 0, 0.25)' }} />
                    <img src={realizationThird} width="400" height="350" alt="Zdjęcie przedstawiające realizacje projektu" loading='lazy' className='object-cover' style={{ boxShadow: '4px 4px 20px 0 rgba(0, 0, 0, 0.25)' }} />
                    <img src={realizationFourth} width="400" height="350" alt="Zdjęcie przedstawiające realizacje projektu" loading='lazy' className='object-cover' style={{ boxShadow: '4px 4px 20px 0 rgba(0, 0, 0, 0.25)' }} />
                    <img src={realizationFifth} width="400" height="350" alt="Zdjęcie przedstawiające realizacje projektu" loading='lazy' className='object-cover' style={{ boxShadow: '4px 4px 20px 0 rgba(0, 0, 0, 0.25)' }} />
                </div>
            </article>
        </section>
    )
}

export default NatureEducationTrail