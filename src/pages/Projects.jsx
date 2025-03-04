import React from 'react'
import TitleCard from '../components/TitleCard'
import FixedBg from '../components/FixedBg'
import NatureEducationTrail from '../components/projects/NatureEducationTrail'
import RequestForQuote from '../components/projects/RequestForQuote'

const Projects = () => {
  return (
    <>
      <TitleCard title="Dofinansowania" />
      <RequestForQuote />
      <NatureEducationTrail />
      <FixedBg />
    </>
  )
}

export default Projects