import React, { useEffect, useState } from 'react'

const RequestForQuote = () => {
    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(true)

    const getData = async () => {
        try {
            const response = await fetch('http://localhost:8881/wp-json/wp/v2/dofinansowanie')
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
        <section className='mb-[64px]'>
            <article className='mx-auto px-[16px] w-[1240px] max-xl:w-[1000px] max-lg:w-[90%]'>
                {
                    loading ?
                        <div className="mx-auto loader"></div>
                        :
                        <div className='flex flex-col gap-[16px]'>
                            {posts.length === 0 ?
                                <p className='w-full flex justify-center'>Brak treści do wyświetlenia</p>
                                :
                                posts.map((post, index) => (
                                    <div className='projects flex flex-col justify-center items-center' key={index} dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
                                ))
                            }
                        </div>
                }
            </article>
        </section>
    )
}

export default RequestForQuote