"use client";
import React from "react";
import Typed from "react-typed"
import Link from "next/link";


const Hero = () => {
  return (
    <section id="#" className="h-screen mt-[-32px] bg-black sm:backdrop-blur-2xl bg-[url('https://portfoliorecreationshubhamthedev.netlify.app/static/media/home-bg.59b92434.svg')] bg-no-repeat bg-right">
        <div className="text-left p-60 h-screen" >
          <h1 className=" text-white mt-10 font-extrabold text-7xl text-transparent bg-clip-text bg-gradient-to-br from-white to-green-600 ">Manish</h1>
          <div className="text-xl mt-5 text-[#09f755] leading-10 ">
            Front-end Developer
            <br />
            
            <Typed
              strings={[
                "JavaScript",
                "NextJS",
                "ReactJS",
                "Tailwind",
                "Kotlin",
              ]}
              className="absolute"
              typeSpeed={100}
              backSpeed={100}
              loop
            />
          </div>
          <Link href='#work' className="flex text-sm justify-center items-center bg-[#09f755] w-28 h-10 p-2 rounded-3xl mt-14 hover:bg-black hover:border hover:border-white hover:text-white cursor-pointer">
          About me
          </Link>
        </div>
    </section>
  );
};
export default Hero;
