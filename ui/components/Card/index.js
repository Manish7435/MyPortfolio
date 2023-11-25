import React from "react";

const Card = () => {
  return (
    <div id="work" className="flex flex-row scroll-smooth">
      <div className="w-[330px] h-[350px] flex flex-col p-20   items-start bg-gradient-to-br from-[#f3cbab] to-[#feedca] mr-8    hover:from-black hover:to-black hover:text-white hover:border hover:border-white ">
        <div className="text-4xl mt-[90px] font-bold ">Public Website</div>
        <div className="text-sm mt-16"> API NEXT JS</div>
      </div>

      <div className="w-[330px] h-[350px] flex flex-col p-20  items-start bg-gradient-to-br from-[#b1e5f9] to-[#f4d2fe] mr-8    hover:from-black hover:to-black hover:text-white hover:border hover:border-white ">
        <div className="text-4xl mt-[90px] font-bold ">Package Icons</div>
        <div className="text-sm sm mt-16 "> NPM PACKAGE</div>
      </div>

      <div className="w-[330px] h-[350px] flex flex-col p-20  items-start bg-gradient-to-br from-[#dbb4f3] to-[#efb7d7] mr-8    hover:from-black hover:to-black hover:text-white hover:border hover:border-white ">
        <div className="text-4xl mt-[90px] font-bold ">Website SEO</div>
        <div className="text-sm sm mt-16"> AHREFS BASH SCRIPT</div>
      </div>
    </div>
  );
};

export default Card;
