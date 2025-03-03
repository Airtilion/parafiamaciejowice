import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import Pagination from './Pagination'

const News = ({scrollToTop}) => {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(0)

  const postsPerPage = 2;

  const getData = async (page = 1) => {
    try {
      const response = await fetch(`http://localhost:8881/wp-json/wp/v2/posts?categories=4&_embed&per_page=${postsPerPage}&page=${page}`)
      if (!response.ok) throw new Error('Błąd pobierania');
      const data = await response.json();

      const totalPagesFromHeader = parseInt(response.headers.get('X-WP-TotalPages'), 10);

      setPosts(data)
      setTotalPages(totalPagesFromHeader);
      setLoading(false)
    }
    catch (err) {
      console.error(err)
    }
  }

  useEffect(() => {
    getData(currentPage);
  }, [currentPage])

  useEffect(() => {
    if (!loading && posts.length > 0) {
      scrollToTop();
    }
  }, [loading, posts]);

  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const goToPage = (page) => {
    setCurrentPage(page);
  };

  const polishMonths = [
    'stycznia', 'lutego', 'kwietnia', 'maja', 'czerwca',
    'lipca', 'sierpnia', 'września', 'października', 'listopada', 'grudnia',
  ];

  return (
    <>
      {
        loading ?
          <section className='flex justify-center my-[64px]'>
            <div className="loader"></div>
          </section>
          :
          <section className='my-[64px] flex flex-col justify-center items-center gap-[64px]'>
            {posts.length === 0 ?
              <p>Brak aktaulności do wyświetlenia</p>
              :
              posts.map((post, index) => {
                const date = new Date(post.date);
                const year = date.getFullYear();
                const month = polishMonths[date.getMonth()];
                const day = date.getDate();

                return (
                  <article key={index} className='bg-white w-[1240px] h-[300px] rounded-[5px] flex p-[64px] relative' style={{ boxShadow: '4px 4px 20px 0 rgba(0, 0, 0, 0.25)' }}>
                    <div className='flex flex-col items-center justify-center'>
                      <p className='text-[100px] font-bold text-[#CDA272]'>{day}</p>
                      <p className='text-[18px] font-light mt-[-24px]'>{month}</p>
                      <p className='text-[20px] font-bold'>{year}</p>
                    </div>

                    <div className='flex justify-center items-center px-[32px]'>
                      <hr className='bg-[#D9D9D9] h-[150px] w-[2px] border-none' />
                    </div>


                    <div className='max-w-[940px]'>
                      <h3 className='line-clamp-2' dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
                      <p className='line-clamp-3 mt-[16px] text-[16px]' dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
                    </div>

                    <div className='absolute bottom-[-24px] right-[64px]'>
                      <Link to={`/aktualnosci/${post.id}`}>
                        <button className='bg-[#CDA272] px-[43px] py-[12px] text-black rounded-[5px] cursor-pointer duration-700 hover:bg-[#e7b67f]'>Czytaj dalej</button>
                      </Link>
                    </div>

                  </article>
                )
              })
            }
            <Pagination goToPreviousPage={goToPreviousPage} goToNextPage={goToNextPage} goToPage={goToPage} currentPage={currentPage} totalPages={totalPages} />
          </section>
      }

    </>
  )
}

export default News