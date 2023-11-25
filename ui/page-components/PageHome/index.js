import React from "react";
import Navebar from "@/ui/components/Navbar";
import Hero from '@/ui/components/Hero'
import AboutMe from "@/ui/components/AboutMe";
import Link from "next/link";

function PageHome() {
  return (
    <div className="flex flex-col">
     {/* <Navebar/> */}
     <Hero/>
     <AboutMe/>
     <div>
      <Link href='#' className="flex justify-center text-sm text-white sm:mt-20 bg-black py-4"> Go to homepage</Link>
     </div>
    </div>
  );
}

export default PageHome;
