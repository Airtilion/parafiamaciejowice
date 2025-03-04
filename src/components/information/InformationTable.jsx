import React, { useEffect, useState } from 'react'

const InformationTable = () => {
    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(true)

    const getData = async () => {
        try {
            const response = await fetch('http://localhost:8881/wp-json/wp/v2/informator')
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
            <article className='mx-auto w-[1240px] max-xl:w-[1000px] max-lg:w-[90%]'>
                {
                    loading ?
                        <div className="loader"></div>
                        :
                        <div className='mx-auto flex flex-col gap-[16px]'>
                            {posts.length === 0 ?
                                <p className='flex justify-center'>Tymczasowy brak treści</p>
                                :
                                posts.map((post, index) => {
                                    const formatDate = (dateString) => {
                                        if (!dateString || dateString.length !== 8) return dateString; // Sprawdzamy, czy data jest poprawna
                                        const year = dateString.slice(0, 4);
                                        const month = dateString.slice(4, 6);
                                        const day = dateString.slice(6, 8);
                                        return `${day}.${month}.${year}`;
                                    };
                                    return (
                                        <table key={index} className='w-full flex flex-col justify-center items-center border-[2px]'>

                                            <thead className='py-[20px]'>
                                                <tr className="font-semibold">
                                                    <th>Msze św. w Parafii Wniebowzięcia NMP w Maciejowicach</th>
                                                </tr>
                                                <tr>
                                                    <th className='font-normal'>{post.acf.informacje_kontaktowe}</th>
                                                </tr>
                                            </thead>

                                            <tbody className='w-full '>

                                                <tr className='flex justify-center border-t-[2px] pt-[12px]'>
                                                    <td>{post.acf.informacje_dot_kancelarii}</td>
                                                </tr>
                                                <tr className='flex justify-center border-b-[2px] pb-[12px]'>
                                                    <td>Parafialna strona internetowa: parafiamaciejowice.pl</td>
                                                </tr>

                                                <tr className='flex justify-center items-center'>
                                                    <td className='w-full text-center border-r-[2px] py-[20px]'>Poniedziałek {formatDate(post.acf.poniedzialek.data)}</td>
                                                    <td className='w-full text-center'>{post.acf.poniedzialek.dzien}</td>
                                                </tr>

                                                {post.acf.poniedzialek.intencje.h && post.acf.poniedzialek.intencje.h.length > 0 && (
                                                    post.acf.poniedzialek.intencje.h.map((item, idx) => (
                                                        <tr key={idx} className="flex justify-between items-center border-t-[1px] py-[10px]">
                                                            <td className="w-1/4 text-left pl-[20px]">{item.c.includes("†") ? "" : item.c}</td>
                                                            <td className="w-3/4 text-left pr-[20px]">{item.c.includes("†") ? item.c : ""}</td>
                                                        </tr>
                                                    ))
                                                )}

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