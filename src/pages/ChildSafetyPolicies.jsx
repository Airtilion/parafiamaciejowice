import React from 'react'
import TitleCard from '../components/TitleCard'
import ChildSafety from '../components/childSafetyPolicies/ChildSafety'
import FixedBg from '../components/FixedBg'

const ChildSafetyPolicies = () => {
    return (
        <>
            <TitleCard title="Standardy Ochrony Dzieci" />
            <ChildSafety />
            <FixedBg />
        </>
    )
}

export default ChildSafetyPolicies