import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const NewsItem = ({ id }) => {
    const [post, setPost] = useState(null)
    const [date, setDate] = useState([1, 10, 2025]);
    const [loading, setLoading] = useState(true)

    const polishMonths = [
        'Stycznia', 'Lutego', 'Marca', 'Kwietnia', 'Maja', 'Czerwca',
        'Lipca', 'Sierpnia', 'Września', 'Października', 'Listopada', 'Grudnia',
    ];

    const getData = async () => {
        try {
            const response = await fetch(`https://parafiamaciejowice.pl/wp-json/wp/v2/posts/${id}?_embed`)
            if (!response.ok) throw new Error('Błąd pobierania');
            const data = await response.json();

            const tempDate = date;
            const postDate = new Date(data.date)
            tempDate[0] = postDate.getDate();
            tempDate[1] = polishMonths[postDate.getMonth()];
            tempDate[2] = postDate.getFullYear();
            setDate(tempDate);

            setPost(data)
            setLoading(false)
        }
        catch (err) {
            console.error(err)
        }
    }

    useEffect(() => {
        getData();
    }, [id])

    return (
        <section className='w-[1240px] mx-auto max-xl:w-[950px] max-lg:w-[90%]'>
            <Link to="/aktualnosci" className='mb-[32px]'>
                <p className='mb-[32px] hover:text-[#D79762] duration-500'>« Wróć do poprzedniej zakładki</p>
            </Link>
            <div className='flex justify-center items-center'>
                {
                    loading ?
                        <article className='flex justify-center mb-[64px]'>
                            <div className="loader"></div>
                        </article>
                        :
                        <article className='news bg-white mb-[64px] py-[32px] px-[70px] flex flex-col justify-center items-center max-md:px-[32px]'>
                            <p className='text-[100px] font-bold text-[#CDA272] max-sm:text-[80px]'>{date[0]}</p>
                            <p className='text-[18px] font-light mt-[-24px] max-sm:text-[16px]'>{date[1]}</p>
                            <p className='text-[20px] font-bold max-sm:text-[18px]'>{date[2]}</p>
                            <hr className='border-none bg-[#D9D9D9] w-[630px] h-[2px] max-lg:w-[90%] max-lg:mx-auto' />
                            <h2 className='mt-[32px]' dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
                            <div className='mt-[64px] max-lg:mt-[32px]' dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
                        </article>
                }
            </div>
        </section>
    )
}

export default NewsItem