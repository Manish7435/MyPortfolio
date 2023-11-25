import React from "react";
import Card from "../Card";

const AboutMe = () => {

  return (
    <section className="flex h-screen justify-center items-center px-30 flex-wrap  bg-black">
     <div className="text-white text-3xl font-bold">
      Stuff I’ve Worked On
      </div> 
      <div className="-mt-40">
      <Card />
      </div>
    </section>
  );
};
export default AboutMe;
