import React, { useEffect } from 'react'
import TitleCard from '../components/TitleCard'
import FixedBg from '../components/FixedBg'
import Team from '../components/charity/Team'
import CharityPosts from '../components/charity/CharityPosts'

const Charity = () => {
  useEffect(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, []);
  return (
    <>
      <TitleCard title="Parafialny Zespół Charytatywny" />

      <Team />
      <CharityPosts />

      <FixedBg />
    </>
  )
}

export default Charity