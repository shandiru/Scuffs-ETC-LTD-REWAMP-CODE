import React from 'react'
import Hero from '../common/Hero'
import PanelRestoration from '../components/ServiceSection/Panel/PanelRestoration'
import PanelRepairs from '../components/ServiceSection/Panel/PanelRepairs'
import PanelContact from '../components/ServiceSection/Panel/PanelContact'
import PanelTransformation from '../components/ServiceSection/Panel/PanelTransformation'
import ServiceCards from '../components/ServiceSection/Panel/PanelContact'

import { HeroData } from '../Data/PanelDamage/Data'
const PanelDamage = () => {
  return (
    <div>
      <Hero  {...HeroData}/>
      <PanelRestoration />
      <PanelRepairs />
      <ServiceCards />
      <PanelTransformation />
    
    </div>
  )
}

export default PanelDamage
