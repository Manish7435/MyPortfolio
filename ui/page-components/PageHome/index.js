import React from "react";
import Navebar from "@/ui/components/Navbar";
import Hero from '@/ui/components/Hero'
import About from "@/ui/components/About";
import Experience from "@/ui/components/Experience";
import Tech from "@/ui/components/Tech";
import Contact from "@/ui/components/Contact";
import { Stars } from "@react-three/drei";


function PageHome() {
  return (
    <div className='relative z-0 bg-primary'>
      <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
        <Navebar/>
        <Hero/>
      </div>
    
     <About/>
     <Experience/>
     <Tech/>
     <div className='relative z-0'>
        <Contact/>
        {/* <Stars/> */}
     </div> 
    </div>
  );
}

export default PageHome;
