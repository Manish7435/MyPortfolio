import React from "react";
import { AiOutlineGlobal } from "react-icons/ai";
import { AiOutlineGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { Box } from "./Box";

const OnWeb = () => {
  return (
    <div className="sm:px-44 px-6 mt-16 ">
      <div className="flex items-center ">
        <div className="text-white mr-4 text-3xl"> On The Web</div>
        <AiOutlineGlobal color="gray" size={34} />
      </div>
      <div className="sm:flex">
      <Box icon={ <AiOutlineGithub size={30}/>} webName={'Github'} href={'https://github.com/Manish7435'}/>
      <Box icon={ <AiFillLinkedin size={30}/>} webName={'LinkedIn'}href={'https://www.linkedin.com/in/manish-kumar-61b35a152/'}/>
      </div>
    </div>
  );
};

export default OnWeb;
