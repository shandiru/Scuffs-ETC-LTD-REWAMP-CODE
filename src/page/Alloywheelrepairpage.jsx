// App.jsx
// src/App.jsx


import AlloyWheelHero from "../common/Hero";
import AlloyWheelRepair from "../components/ServiceSection/Alloywheelrepairpage/AlloyWheelRepair";
import RestoreWheelsCTA from "../components/ServiceSection/Alloywheelrepairpage/RestoreWheelsCTA";

import { HeroData } from "../Data/AlloyWheel/Data";

function Alloywheelrepairpage() {
  return (
    <>
   
   <AlloyWheelHero {...HeroData}/>
   <AlloyWheelRepair />
   <RestoreWheelsCTA />
    
    </>
  );
}

export default Alloywheelrepairpage;
