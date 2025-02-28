import React from 'react'
import MainDescription from '../components/home/MainDescription'
import FixedBg from '../components/FixedBg'
import StatsTails from '../components/home/StatsTails'

const Home = () => {
  return (
    <>
      <StatsTails/>
      <MainDescription/>
      <FixedBg/>
    </>
  )
}

export default Home