import React from 'react'
import TitleCard from '../components/TitleCard'
import FixedBg from '../components/FixedBg'
import InformationTable from '../components/information/informationTable'

const Information = () => {
  return (
    <>
      <TitleCard title="Porządek Mszy św." />

      <InformationTable />

      <FixedBg />
    </>
  )
}

export default Information