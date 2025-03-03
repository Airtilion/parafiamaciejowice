import React, { useEffect } from 'react'

const Readings = () => {
    

    // const getReadings = async () => {
    //     try {
    //         const response = await fetch('https://opoka.org.pl/liturgia_iframe');
    //         if (!response.ok) {
    //             throw new Error('Nie udało się pobrać czytań')
    //         }

    //         const html = await response.text()
    //         console.log(html)
    //     }
    //     catch (err) {
    //         console.error(err)
    //     }
    // }


    // useEffect(() => {
    //     getReadings()
    // }, [])

    return (
        <section className='my-[64px] w-[1240px] mx-auto bg-white shadow-[4px_4px_10px_#00000040] rounded-[5px]'>
        </section>
    )
}

export default Readings