import React, { useEffect } from 'react'
import TitleCard from '../components/TitleCard'
import ChildSafety from '../components/childSafetyPolicies/ChildSafety'
import FixedBg from '../components/FixedBg'

const ChildSafetyPolicies = () => {
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }, []);
    return (
        <>
            <TitleCard title="Standardy Ochrony Dzieci" />
            <ChildSafety />
            <FixedBg />
        </>
    )
}

export default ChildSafetyPolicies