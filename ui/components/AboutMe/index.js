import React from "react";
import Card from "../Card";

const AboutMe = () => {

  return (
    <section className="flex
    flex-col
    bg-black">
      <div className="text-white text-3xl px-6 sm:px-44 font-black mt-28 sm:mb-20">
        Stuff I’ve Worked On
        </div> 
        <div className="sm:mt-0 mt-8 sm:mx-auto justify-center px-6 flex-wrap">
        <Card />
      </div>
    </section>
  );
};
export default AboutMe;