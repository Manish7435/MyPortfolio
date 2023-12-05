import React, { useState } from "react";
import { styles } from "@/ui/styles";
import Link from "next/link";
import { close,  menu } from "@/ui/assets";
import Image from "next/image";
import { navLinks } from "@/ui/constants";

const Navebar = () => {
  const [active, setActive] = useState("")
  const [toggle, setToggle] = useState(false)
  return (
    <nav className={`${styles.paddingX} w-full flex item-center fixed top-0 z-20 bg-primary`}>
        <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
          <Link href={'/'} className="flex items-center gap-2" onClick={() => {
            setActive("")
            window.scrollTo(0, 0)
          }}>
            <Image
              src={'/logo.png'}
              alt="logo"
              height={100}
              width={100}
              className="object-contain sm:ml-6"
            />
           
          </Link>
          <ul className="list-none hidden sm:flex flex-row gap-10">
            {
              navLinks.map((nav) =>
              (
                <li key={nav.title}
                  className={`${active === nav.title ? "text-white" : "text-secondary"} hover:text-white text-[18px] font-medium hover:cursor-pointer`}
                  onClick={() => setActive(nav.title)}>
                  <a href={`#${nav.id}`}>
                    {nav.title}
                  </a>
                </li>
              )
              )
            }
          </ul>
          <div className="sm:hidden flex flex-1 justify-end items-center">
            <Image
              src={toggle ? close : menu}
              alt="menu"
              height={28}
              width={28}
              className="object-contain cursor-pointer"
              onClick={() => setToggle(!toggle)}
            />
            <div className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}>
            <ul className="list-none flex justify-end items-start flex-1 flex-col gap-4">
            {
              navLinks.map((nav) =>
              (
                <li key={nav.title}
                className={`font-poppins font-medium cursor-pointer text-[16px] ${
                  active === nav.title ? "text-white" : "text-secondary"
                }`}
                  onClick={() => {
                    setToggle(!toggle)
                    setActive(nav.title)}}>
                  <a href={`#${nav.id}`}>
                    {nav.title}
                  </a>
                </li>
              )
              )
            }
          </ul>
            </div>
          </div>
        </div>
      </nav>
  )
}

export default Navebar