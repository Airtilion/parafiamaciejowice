import React, { useEffect, useState } from 'react'
import { formatDateG } from '../utils/formatDate'
import TitleCard from '../components/TitleCard'
import FixedBg from '../components/FixedBg'
import { Link } from 'react-router-dom'

const Gallery = () => {
  const [albums, setAlbums] = useState([])

  const getAlbums = async () => {
    try{
      const response = await fetch('https://parafiamaciejowice.pl/wp-json/custom/v1/albums/')

      if(!response.ok){
        throw new Error('Nie udało się pobrać albumów')
      }

      const data = await response.json()
      console.log(data)
      setAlbums(data)
    }
    catch(err){
      console.error(err)
    }
  }

  useEffect(() => {
    getAlbums()
  }, [])

  return (
    <>
      <TitleCard title="Galeria" />

      <section className='w-[1168px] mx-auto flex gap-[16px] flex-wrap mb-[64px] max-xl:w-[872px] max-lg:w-[576px] max-sm:w-[90%] max-sm:justify-center'>
        {albums?.map((album, index) => (
          <Link to={`/galeria/${album.name}`} key={index}>
            <article className='gallery-album relative w-[280px] h-[350px] shadow-[4px_4px_20px_#00000040] bg-white overflow-hidden duration-500'>
              <img src={album.cover_image} alt="Zdjęcie okładki albumu" loading='lazy' className='image-shape object-cover h-[250px] w-full duration-500' />
              <div className='absolute bg-white px-[32px] py-[16px]'>
                  <p className='text-[14px] font-light text-[#7D7D7D]'>{formatDateG(album.date)}</p>
                  <p className='text-[18px] font-medium line-clamp-2'>{album.name}</p>
              </div>
            </article>
          </Link>
        ))}
      </section>

      <FixedBg/>
    </>
  )
}

export default Gallery