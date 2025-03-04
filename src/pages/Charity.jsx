import React from 'react'
import TitleCard from '../components/TitleCard'
import FixedBg from '../components/FixedBg'
import Team from '../components/charity/Team'
import CharityPosts from '../components/charity/CharityPosts'

const Charity = () => {
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