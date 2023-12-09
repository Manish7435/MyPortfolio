"use client";
import React from "react";
import Typed from "react-typed";
import Link from "next/link";

const Hero = () => {
  return (
    <section
      id="#"
      className="  text-[#09f755]
     leading-10
     justify-center
     h-screen
     sm:mt-[-32px] sm:bg-[url('https://portfoliorecreationshubhamthedev.netlify.app/static/media/home-bg.59b92434.svg')] bg-no-repeat bg-right"
    >
      <div
        className="
        flex
        flex-col
        sm:p-60 
        text-center
        sm:text-left"
      >
        <h1 className=" text-white mt-10 font-extrabold sm:text-7xl text-6xl text-transparent bg-clip-text bg-gradient-to-br from-white to-green-600 ">
          Manish
        </h1>
        Front-end Developer
        <br />
        <Typed
          strings={["JavaScript", "NextJS", "ReactJS", "Tailwind", "Kotlin"]}
          // className="absolute"
          typeSpeed={100}
          backSpeed={100}
          loop
        />

          <Link
            href="#work"
            className="flex text-black text-sm justify-center items-center mx-auto sm:mx-0  bg-[#09f755] w-28 h-10 p-2 rounded-3xl mt-14 hover:bg-black hover:border hover:border-white hover:text-white cursor-pointer"
          >
            About me
          </Link>

      </div>
      {/* </div> */}
    </section>
  );
};
export default Hero;