import React, { useEffect } from 'react'
import TitleCard from '../components/TitleCard'
import FixedBg from '../components/FixedBg'
import HistoryDesc from '../components/history/HistoryDesc'

const History = () => {
  useEffect(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, []);
  return (
    <>
      <TitleCard title="Historia" />
      <HistoryDesc />
      <FixedBg />
    </>
  )
}

export default History