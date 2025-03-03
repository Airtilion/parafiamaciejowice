import { Icon } from '@iconify/react/dist/iconify.js'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const NewsSection = () => {
    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(true)

    const getData = async () => {
        try {
            const response = await fetch('http://localhost:8881/wp-json/wp/v2/posts?categories=4&per_page=3')
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

    const polishMonths = [
        'Stycznia', 'Lutego', 'Marca', 'Kwietnia', 'Maja', 'Czerwca',
        'Lipca', 'Sierpnia', 'Września', 'Października', 'Listopada', 'Grudnia',
    ];

    return (
        <section className='my-[64px] w-[1240px] mx-auto max-xl:w-[1000px] max-lg:w-[90%]'>
            <article className='flex flex-col'>
                <h2 className='font-light'>Aktualności z życia parafii</h2>
                <p className='mt-[16px] text-[18px] font-light max-sm:text-[16px]'>Poniżej znajdziesz trzy najnowsze informacje dotyczące życia naszej parafii. Aby zobaczyć więcej aktualności, kliknij przycisk poniżej.</p>

                <div className='mt-[32px]'>
                    {
                        loading ?
                            <div className="loader"></div>
                            :
                            <div className='flex flex-col gap-[16px]'>
                                {posts.length === 0 ?
                                    <p className='w-full flex justify-center'>Brak postów do wyświetlenia</p>
                                    :
                                    posts.map((post, index) => {
                                        const date = new Date(post.date);
                                        const formattedDate = `${date.getDate()} ${polishMonths[date.getMonth()]} ${date.getFullYear()}`;
                                        return (
                                            <article key={index} style={{ borderBottom: (index === 0 || index === 1) && 'solid 1px #D3D3D3' }}>
                                                <Link to={`/aktualnosci/${post.id}`} className='flex justify-between items-center'>
                                                    <div>
                                                        <p className='font-light text-[20px] max-sm:text-[18px] max-sm:line-clamp-2' dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
                                                        <p className='font-light text-[#7D7D7D]'>{formattedDate}</p>
                                                    </div>
                                                    <div>
                                                        <Icon icon="mingcute:right-line" height="24" alt="Ikona strzałki w prawo" className="text-black" />
                                                    </div>
                                                </Link>
                                            </article>
                                        )
                                    })
                                }
                            </div>
                    }
                </div>

                <div className='flex justify-center items-center'>
                    <Link to="/aktualnosci" className='mt-[64px]'>
                        <button className='text-black px-[32px] py-[12px] bg-[#CDA272] cursor-pointer rounded-[5px] duration-700 hover:bg-[#e7b67f]'>Zobacz więcej aktualności</button>
                    </Link>
                </div>
            </article>
        </section>
    )
}

export default NewsSection