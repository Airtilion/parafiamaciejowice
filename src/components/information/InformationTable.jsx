import React, { useEffect, useState } from 'react'
import InformationDay from './InformationDay'

const InformationTable = () => {
    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(true)

    const getData = async () => {
        try {
            const response = await fetch('https://parafiamaciejowice.pl/wp-json/wp/v2/informator')
            if (!response.ok) throw new Error('Błąd pobierania');
            const data = await response.json()
            console.log(data);
            setPosts(data)
            setLoading(false)
        }
        catch (err) {
            console.error(err)
        }
    }

    useEffect(() => {
        getData();
    }, [])

    return (
        <section className='mb-[64px]'>
            <article className='mx-auto flex justify-center items-center w-[1240px] max-xl:w-[1000px] max-lg:w-[90%]'>
                {
                    loading ?
                        <div className="loader"></div>
                        :
                        <div className='w-full'>
                            {posts.length === 0 ?
                                <p className='flex justify-center'>Tymczasowy brak treści</p>
                                :
                                posts.map((post, index) => {
                                    const formatDate = (dateString) => {
                                        if (!dateString || dateString.length !== 8) return dateString;
                                        const year = dateString.slice(0, 4);
                                        const month = dateString.slice(4, 6);
                                        const day = dateString.slice(6, 8);
                                        return `${day}.${month}.${year}`;
                                    };
                                    return (
                                        <table key={index} className='w-full border-[2px]'>

                                            <thead>
                                                <tr className="font-semibold">
                                                    <th className='pt-[20px] px-[12px]'>Msze św. w Parafii Wniebowzięcia NMP w Maciejowicach</th>
                                                </tr>
                                                <tr>
                                                    <th className='pt-[8px] pb-[20px] font-normal px-[12px]'>{post.acf.informacje_kontaktowe}</th>
                                                </tr>

                                                <tr className='border-t-[2px]'>
                                                    <th className='pt-[12px] font-normal px-[12px]'>{post.acf.informacje_dot_kancelarii}</th>
                                                </tr>

                                                <tr>
                                                    <th className='pt-[8px] pb-[12px] font-normal px-[12px]'>Parafialna strona internetowa: parafiamaciejowice.pl</th>
                                                </tr>

                                            </thead>

                                            <tbody>

                                                <InformationDay day="poniedzialek" textDay="Poniedziałek" post={post} formatDate={formatDate} />
                                                <InformationDay day="wtorek" textDay="Wtorek" post={post} formatDate={formatDate} />
                                                <InformationDay day="sroda" textDay="Środa" post={post} formatDate={formatDate} />
                                                <InformationDay day="czwartek" textDay="Czwartek" post={post} formatDate={formatDate} />
                                                <InformationDay day="piatek" textDay="Piątek" post={post} formatDate={formatDate} />
                                                <InformationDay day="sobota" textDay="Sobota" post={post} formatDate={formatDate} />
                                                <InformationDay day="niedziela" textDay="Niedziela" post={post} formatDate={formatDate} />

                                            </tbody>

                                        </table>
                                    )
                                })
                            }
                        </div>
                }
            </article>
        </section>
    )
}

export default InformationTable