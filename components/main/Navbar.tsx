import React from "react";
import { Socials } from "@/constants";
import Image from "next/image";

const Navbar = () => {
  return (
    <div
      className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2a0e61]
    bg-[#03001417] backdrop-blur-md z-[50] px-10"
    >
      <div
        className="w-full h-full flex flex-row items-center justify-between m-auto
      px-[10px]"
      >
        <a
          href="#about-me"
          className="h-auto w-auto flex flex-row items-center"
        >
          <Image
            src="/NavLogo.png"
            width={70}
            height={70}
            alt="Navlogo"
            className="cursor-pointer hover:animate-spin"
          />
          <span
            className="font-bold ml-[10px] hidden md:block text-gray-300
          text-2xl"
          >
            Dex. <span className="text-cyan-500">dev</span>
          </span>
        </a>
        <div
          className="w-[500px] h-full flex flex-row items-center justify-between
        md:mr-20"
        >
          <div
            className="flex items-center justify-between w-full h-auto
          border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px]
          py-[10px] rounded-full text-gray-200 font-semibold"
          >
            <a href="#about-me" className="cursor-pointer">
              About me
            </a>
            <a href="#skills" className="cursor-pointer">
              Skills
            </a>
            <a href="#projects" className="cursor-pointer">
              Projects
            </a>
            <a href="#contact" className="cursor-pointer">
              Contact
            </a>
          </div>
        </div>
        <div className="flex flex-row gap-5">
          {Socials.map((social) => (
            <Image
              src={social.src}
              width={25}
              height={25}
              alt={social.name}
              key={social.name}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
