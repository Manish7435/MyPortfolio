import React from "react";
import Card from "../Card";

const AboutMe = () => {

  return (
    <section className="flex
    sm:h-screen 
    justify-center 
    items-center 
    px-30
    mx-6
    flex-wrap  
    bg-black">
     <div className="text-white text-2xl sm:text-3xl font-bold mt-40 ">
      Stuff I’ve Worked On
      </div> 
      <div className="sm:mt-0 mt-8">
      <Card />
      </div>
    </section>
  );
};
export default AboutMe;
