import React from 'react'
import Hero from '../common/Hero'
import TexturedPlasticRestoration from '../components/ServiceSection/Texturedplasticrepairpage/TexturedPlasticRestoration'
import PlasticComponentCTA from '../components/ServiceSection/Texturedplasticrepairpage/PlasticComponentCTA'

import { HeroData } from '../Data/Texturedplasticrepairpage/Data'

const Textured = () => {
  return (
    <div>
   <Hero {...HeroData} />
   <TexturedPlasticRestoration />
   <PlasticComponentCTA />
    </div>
  )
}

export default Textured
