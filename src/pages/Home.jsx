import React, { lazy, Suspense } from 'react'
const MainDescription = lazy(() => import('../components/home/MainDescription'));
const FixedBg = lazy(() => import('../components/FixedBg'));
const StatsTails = lazy(() => import('../components/home/StatsTails'));
const Villages = lazy(() => import('../components/home/Villages'));
const Readings = lazy(() => import('../components/home/Readings'));
const Quote = lazy(() => import('../components/home/Quote'));
const KrpInfo = lazy(() => import('../components/home/KrpInfo'));
const Church = lazy(() => import('../components/home/Church'));
const NewsSection = lazy(() => import('../components/home/NewsSection'));
const Contact = lazy(() => import('../components/home/Contact'));


const Home = () => {
  return (
    <Suspense fallback={<div>Ładowanie...</div>}>
      <MainDescription />
      <FixedBg />
      <Villages />
      <Readings />
      <Quote />
      <KrpInfo />
      <Church />
      <NewsSection />
      <Contact />
      <StatsTails />
    </Suspense>
  )
}

export default Home