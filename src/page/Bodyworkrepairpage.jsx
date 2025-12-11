import React from 'react'
import BodyworkRepairHero from '../common/Hero'
import BodyworkRestoration from '../components/ServiceSection/Bodyworkrepairpage/BodyworkRestoration'
import BodyworkCTA from '../components/ServiceSection/Bodyworkrepairpage/BodyworkCTA'

import { HeroData } from '../Data/Bodyworkrepairpage/Data'
const Bodywork = () => {
  return (
    <div>
    <BodyworkRepairHero {...HeroData}/>
    <BodyworkRestoration />
    <BodyworkCTA />
    </div>
  )
}

export default Bodywork
