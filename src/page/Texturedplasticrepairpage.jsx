import React from 'react'
import TexturedPlasticRepairs from '../common/Hero'
import TexturedPlasticRestoration from '../components/ServiceSection/Texturedplasticrepairpage/TexturedPlasticRestoration'
import PlasticComponentCTA from '../components/ServiceSection/Texturedplasticrepairpage/PlasticComponentCTA'

import { HeroData } from '../Data/Texturedplasticrepairpage/Data'

const Textured = () => {
  return (
    <div>
   <TexturedPlasticRepairs {...HeroData} />
   <TexturedPlasticRestoration />
   <PlasticComponentCTA />
    </div>
  )
}

export default Textured
