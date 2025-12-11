import React from 'react'
import FullHeader from '../common/Hero'
import FullAbout from '../components/ServiceSection/FullRespray/FullAbout'
import PaintProcess from '../components/ServiceSection/FullRespray/Procees'
import PaintOptions from '../components/ServiceSection/FullRespray/PaintOption'
import ServiceOptions from '../components/ServiceSection/FullRespray/ServiceOption'
import VehicleTransformation from '../components/ServiceSection/FullRespray/VehicleTransformation'

import { HeroData } from '../Data/FullRespray/Data'
const FullRespray = () => {
  return (
    <div>
      <FullHeader {...HeroData}/>
      <FullAbout />
      <PaintProcess />
      <PaintOptions />
      <ServiceOptions />
      <VehicleTransformation />
    </div>
  )
}

export default FullRespray