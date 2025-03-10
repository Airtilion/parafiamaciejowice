import React, { useEffect, useState } from 'react'

const CharityPosts = () => {
    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(true)

    const getData = async () => {
        try {
            const response = await fetch('https://parafiamaciejowice.pl/wp-json/wp/v2/parafialny-zespol-ch')
            if (!response.ok) throw new Error('Błąd pobierania');
            const data = await response.json()
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
        <section className='flex flex-col justify-center items-center'>
            <h3 className='text-center px-[10px]'>Aktualności Parafialnego Zespołu Charytatywnego</h3>
            <div className='mt-[32px] w-full flex justify-center'>
                {
                    loading ?
                        <div className="loader mb-[32px]"></div>
                        :
                        <div className='w-full'>
                            {posts.length === 0 ?
                                <p className='w-full flex justify-center'>Brak postów do wyświetlenia</p>
                                :
                                posts.map((post, index) => (
                                    <article className={`w-full ${index % 2 === 0 ? 'bg-white' : ''}`} key={index}>
                                        <div className='charity w-[1240px] py-[64px] mx-auto max-xl:w-[1000px] max-lg:w-[90%]'>
                                            <h4 className='text-[#cda272] text-[50px] font-semibold'>{post.title.rendered}</h4>
                                            <div dangerouslySetInnerHTML={{ __html: post.content.rendered }}></div>
                                        </div>
                                    </article>
                                ))
                            }
                        </div>
                }
            </div>
        </section>
    )
}

export default CharityPosts