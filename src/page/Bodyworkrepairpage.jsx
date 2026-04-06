import React from 'react'
import Hero from '../common/Hero'
import BodyworkRestoration from '../components/ServiceSection/Bodyworkrepairpage/BodyworkRestoration'
import BodyworkCTA from '../components/ServiceSection/Bodyworkrepairpage/BodyworkCTA'

import { HeroData } from '../Data/Bodyworkrepairpage/Data'
const BodyworkRepairPage = () => {
  return (
    <div>
    <Hero {...HeroData}/>
    <BodyworkRestoration />
    <BodyworkCTA />
    </div>
  )
}

export default BodyworkRepairPage
