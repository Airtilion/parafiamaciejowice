import React, { useEffect } from 'react'
import TitleCard from '../components/TitleCard'
import FixedBg from '../components/FixedBg'
import InformationTable from '../components/information/InformationTable'

const Information = () => {
  useEffect(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, []);
  return (
    <>
      <TitleCard title="Porządek Mszy św." />

      <InformationTable />

      <FixedBg />
    </>
  )
}

export default Information