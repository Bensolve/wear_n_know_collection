"use client";
import Image from 'next/image'
import Link from 'next/link';
import { useState } from "react";
import { NAV_LINKS } from "../constants";




const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);
  const iconPath = toggle ? "/assets/icons/close.svg" : "/assets/icons/menu.svg";
  return (
    <header className="w-full">
      <nav className="nav">
        <Link href="/" className="flex items-center gap-1">
          <Image
            src="/assets/images/logo.jpg"
            width={28}
            height={28}
            alt="logo"
          />

          <p className="nav-logo">
            Wear_N_<span className='text-primary'>Know </span>
          </p>
        </Link>

        <ul className="list-none sm:flex hidden justify-end items-center flex-1 ">
          {NAV_LINKS.map((nav, index) => (
            <li
              key={nav.id} // Using 'key' from your NAV_LINKS array
              className={`font-poppins font-normal cursor-pointer text-[16px] ${active === nav.title ? "text-black" : "text-secondary"}
                } ${index === NAV_LINKS.length - 1 ? "mr-0" : "mr-10"}`}
              onClick={() => setActive(nav.title)}
            >
              <Link href={`${nav.id}`}>{nav.title}  

              </Link>

            </li>

          ))}

        

        </ul>

        

        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={iconPath}
            alt="menu"
            className="w-[28px] h-[28px] object-contain"
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${!toggle ? "hidden" : "flex"
              } p-6 bg-black-gradient absolute top-5 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
          >
            <ul className="list-none flex justify-end items-start flex-1 flex-col">
              {NAV_LINKS.map((nav, index) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px] ${active === nav.title ? "text-black" : "text-secondary"}
                    } ${index === NAV_LINKS.length - 1 ? "mb-0" : "mb-4"}`}
                  onClick={() => setActive(nav.title)}
                >
                  <Link href={`${nav.id}`}>{nav.title}</Link>
                </li>
              ))}

            </ul>
          </div>
        </div>


      </nav>
    </header>
  )
}

export default Navbar