// App.jsx
// src/App.jsx


import Hero from "../common/Hero";
import AlloyWheelRepair from "../components/ServiceSection/Alloywheelrepairpage/AlloyWheelRepair";
import RestoreWheelsCTA from "../components/ServiceSection/Alloywheelrepairpage/RestoreWheelsCTA";

import { HeroData } from "../Data/AlloyWheel/Data";

function Alloywheelrepairpage() {
  return (
    <>
   
   <Hero {...HeroData}/>
   <AlloyWheelRepair />
   <RestoreWheelsCTA />
    
    </>
  );
}

export default Alloywheelrepairpage;
