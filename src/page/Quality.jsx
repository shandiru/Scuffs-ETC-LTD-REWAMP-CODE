import React from 'react'
import QualityAbout from '../components/ServiceSection/QualityGuarantee/QualityAbout'
import QualityStandards from '../components/ServiceSection/QualityGuarantee/standards'
import WarrantyTerms from '../components/ServiceSection/QualityGuarantee/Warranty'
import WarrantyClaimSection from '../components/ServiceSection/QualityGuarantee/Claim'
import Hero from '../common/Hero'
import { HeroData } from '../Data/Quality/Data'
const Quality = () => {
  return (
    <div>
      <Hero {...HeroData}/>
      <QualityAbout />
      <QualityStandards />
      <WarrantyTerms />
      <WarrantyClaimSection />
    </div>
  )
}

export default Quality
