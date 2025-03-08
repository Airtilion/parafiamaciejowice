import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Readings = () => {
    const [miesiac, setMiesiac] = useState('styczeń')
    const [dzien, setDzien] = useState('poniedziałek')
    const [data, setData] = useState(1)
    const [okres, setOkres] = useState('')
    const [rok, setRok] = useState('')
    const [czytania, setCzytania] = useState([])
    const [loading, setLoading] = useState(true)

    const splitArray = (arr) => {
        const middle = Math.ceil(arr.length / 2); // Zaokrąglamy w górę dla pierwszej połowy
        const firstHalf = arr.slice(0, middle);
        const secondHalf = arr.slice(middle);
        setCzytania([firstHalf, secondHalf]);
    }

    const getReadings = async () => {
        try {
            const response = await fetch('https://parafiamaciejowice.pl/wp-json/liturgia/v1/html');
            if (!response.ok) {
                throw new Error('Nie udało się pobrać czytań')
            }

            const html = await response.text()
            const cleanedHtml = html
                .replace(/\\\//g, '/')   // zamienia "\/" na "/"
                .replace(/\\r/g, '')     // usuwa "\r"
                .replace(/\\n/g, '')     // usuwa "\n"
                .replace(/\\t/g, '')     // usuwa "\t"
                .replace(/\\/g, '')      // usuwa pozostałe pojedyńcze backslash'e
                .trim();

            const doc = new DOMParser().parseFromString(cleanedHtml, 'text/html');

            const miesiac = doc.querySelector('.miesiac').innerText
            setMiesiac(miesiac)
            const dzien = doc.querySelector('.dzien').innerText
            setDzien(dzien)
            const data = doc.querySelector('.data').innerText
            setData(data)
            const okres = doc.querySelector('.period_name').innerText
            setOkres(okres)
            const rok = doc.querySelector('.rok_lit').innerText
            setRok(rok)
            const elements = [...doc.querySelector('.jeden').children];
            elements.splice(-2, 1)
            splitArray(elements)

            setLoading(false)
        }
        catch (err) {
            console.error(err)
        }
    }

    const decodeUnicode = (str) => {
        return str.replace(/\\?u([0-9a-fA-F]{4})/g, (match, grp) => 
          String.fromCharCode(parseInt(grp, 16))
        );
      }


    useEffect(() => {
        getReadings()
    }, [])


    
    return (
        <>
            {loading ? 
                <div className='loader mx-auto my-[64px]'></div>
            : 
                <section className='my-[64px] pl-[64px] w-[1240px] mx-auto bg-white shadow-[4px_4px_10px_#00000040] rounded-[5px] p-[32px] flex justify-between max-xl:w-[1000px] max-xl:pl-[32px] max-lg:flex-col max-lg:gap-[64px] max-lg:w-[600px] max-sm:w-[90%] max-sm:gap-[32px] max-sm:px-[16px]'>
                    <article className='flex flex-col'>
                        <div className='flex gap-[48px] max-sm:gap-[40px]'>
                            <div className='w-[100px] h-[100px] bg-[#CDA272] rounded-[5px] flex justify-center items-center relative max-sm:w-[80px] max-sm:h-[80px]'>
                                <p className='text-[90px] font-extrabold absolute right-[-25px] text-[#343434] max-sm:text-[70px]'>{data.length === 1 && '0'}{data}</p>
                            </div>
                            <div>
                                <p className='text-[30px] text-[#343434] font-extrabold max-sm:text-[25px]'>{decodeUnicode(miesiac)}</p>
                                <p className='text-[30px] text-[#343434] max-sm:text-[25px]'>{decodeUnicode(dzien)}</p>
                            </div>
                        </div>
                        <p className='mt-[32px] text-[18px] text-[#343434] max-w-[400px]'>{decodeUnicode(okres)}</p>
                        <p className='mt-[8px] text-[18px] text-[#343434]'>{decodeUnicode(rok)}</p>
                    </article>

                    <article className='flex flex-col gap-[16px]'>
                        <h2>Liturgia słowa</h2>
                        <div className='flex gap-[64px] max-sm:flex-col max-sm:gap-[0px]'>
                            <div>
                                {czytania[0]?.map((czyt, index) => (
                                    <>
                                        <p className='text-[#5F5F5F] text-[15px]'>{decodeUnicode(czyt.innerText.split(':')[0])}</p>
                                        <p className='text-[#343434] text-[18px] mb-[16px]'>{decodeUnicode(czyt.innerText.split(':')[1])}</p>
                                    </>
                                ))}
                            </div>
                            <div>
                                {czytania[1]?.map((czyt, index) => (
                                    <>
                                        <p className='text-[#5F5F5F] text-[15px]'>{decodeUnicode(czyt.innerText.split(':')[0])}</p>
                                        <p className='text-[#343434] text-[18px] mb-[16px]'>{decodeUnicode(czyt.innerText.split(':')[1])}</p>
                                    </>
                                ))}
                            </div>
                        </div>
                    </article>

                    <Link to="https://opoka.org.pl/liturgia" target='_blank' rel="noreferrer noopener" className='self-end'>
                        <button className='bg-[#CDA272] text-black px-[18px] py-[12px] rounded-[5px] cursor-pointer duration-700 hover:bg-[#e7b67f] max-sm:text-[16px]'>Przejdź do pełnych czytań</button>
                    </Link>
                </section>
            
            }
        </>
    )
}

export default Readings