import React from 'react'
import MainDescription from '../components/home/MainDescription'
import FixedBg from '../components/FixedBg'
import StatsTails from '../components/home/StatsTails'
import Villages from '../components/home/Villages'
import Readings from '../components/home/Readings'
import Quote from '../components/home/Quote'
import KrpInfo from '../components/home/KrpInfo'
import Church from '../components/home/Church'

const Home = () => {
  return (
    <>
      <MainDescription/>
      <Villages/>
      <StatsTails/>
      <Readings/>
      <Quote/>
      <KrpInfo/>
      <Church/>
      <FixedBg/>
    </>
  )
}

export default Home