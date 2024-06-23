"use client";

import React, { useState, useEffect } from "react";
import { HiMiniBars3BottomRight } from "react-icons/hi2";
import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/react";
import { HiChevronDown } from "react-icons/hi2";
import '../styles/header.css'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleScroll = () => {
    if (window.scrollY > 60) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
    {/* <div className="hidden relative z-10  md:flex items-center w-full h-8 bg-[#f5f5f5] text-[#828282] px-4 py-1 text-sm">Derinlerdeki Gücünüz !</div> */}
    <header
  className={`w-full z-50 transition-all duration-500 ease-in-out clip-triangle  ${
    isSticky
      ? "fixed top-0 bg-black shadow-lg py-4 transform translate-y-0"
      : "relative bg-black shadow-md py-5 transform translate-y-0 rotate-0"
  }`}
>
  <div className="container mx-auto flex justify-between items-center">
    <div className="flex items-center">
      <a href="/" className="flex items-center px-1">
        <img
          src="/logo_white.png"
          alt="MinexDrill"
          className={`transition-all duration-500 ease-in-out ${
            isSticky ? "h-10" : "h-12"
          }`}
        />
      </a>
    </div>
    <nav className="hidden md:flex space-x-6 font-semibold">
      <a href="/" className="text-white hover:text-yellow-500">
        ANA SAYFA
      </a>
      <Menu as="div" className="relative">
        <MenuButton className="text-white hover:text-yellow-500 flex items-center">
          KURUMSAL
          <HiChevronDown className="ml-2 h-5 w-5" />
        </MenuButton>
        <MenuItems className="absolute left-0 mt-2 w-56 origin-top-left bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            <MenuItem>
              {({ active }) => (
                <a
                  href="/about"
                  className={`${
                    active ? "bg-gray-100" : ""
                  } block px-4 py-2 text-sm text-gray-700`}
                >
                  HAKKIMIZDA
                </a>
              )}
            </MenuItem>
            <MenuItem>
              {({ active }) => (
                <a
                  href="/quality"
                  className={`${
                    active ? "bg-gray-100" : ""
                  } block px-4 py-2 text-sm text-gray-700`}
                >
                  KALİTE POLİTİKAMIZ
                </a>
              )}
            </MenuItem>
            <MenuItem>
              {({ active }) => (
                <a
                  href="/about"
                  className={`${
                    active ? "bg-gray-100" : ""
                  } block px-4 py-2 text-sm text-gray-700`}
                >
                  VİZYON VE MİSYON
                </a>
              )}
            </MenuItem>
      
          </div>
        </MenuItems>
      </Menu>
      <a href="/services" className="text-white hover:text-yellow-500">
        HİZMETLER
      </a>
      <a href="/machines" className="text-white hover:text-yellow-500">
        MAKİNELER
      </a>
      <a href="/isg" className="text-white hover:text-yellow-500">
        İSG VE ÇEVRE
      </a>
      <a href="/contact" className="text-white hover:text-yellow-500">
        İLETİŞİM
      </a>
      <div className="flex space-x-4">
        <a href="/tr" className="text-red-800 hover:text-yellow-500">
          TR
        </a>
        <a href="/en" className="text-red-800 hover:text-yellow-500">
          EN
        </a>
      </div>
    </nav>
    <div className="md:hidden flex items-center">
      <button
        className="text-white font-bold focus:outline-none"
        onClick={toggleMenu}
      >
        <HiMiniBars3BottomRight size={32} />
      </button>
    </div>
  </div>
</header>


      {/* Fullscreen Menu */}
      <div
        className={`fixed bg-gradient-to-br  from-red-700 to-red-400 bg-opacity-80 inset-0 z-50 flex flex-col items-center justify-center transition-all duration-500 ease-in-out ${
          isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        style={{
          clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 85%)",
        }}
      >
        <button
          className="absolute top-4 right-4 text-white text-2xl font-bold"
          onClick={toggleMenu}
        >
          &times;
        </button>
        <nav className="flex flex-col space-y-6 text-white text-lg font-bold">
          <a href="/" className="hover:text-yellow-500" onClick={toggleMenu}>
            ANA SAYFA
          </a>
          <a
            href="/about"
            className="hover:text-yellow-500"
            onClick={toggleMenu}
          >
            HAKKIMIZDA
          </a>
          <a
            href="/quality"
            className="hover:text-yellow-500"
            onClick={toggleMenu}
          >
            KALİTE POLİTİKAMIZ
          </a>
          <a
            href="/"
            className="hover:text-yellow-500"
            onClick={toggleMenu}
          >
            VİZYON VE MİSYON
          </a>
        
          <a
            href="/services"
            className=" hover:text-yellow-500"
            onClick={toggleMenu}
          >
            HİZMETLER
          </a>
          <a
            href="/machines"
            className=" hover:text-yellow-500"
            onClick={toggleMenu}
          >
            MAKİNELER
          </a>
          <a href="/isg" className="hover:text-yellow-500" onClick={toggleMenu}>
            İSG VE ÇEVRE
          </a>
          <a
            href="/contact"
            className="hover:text-yellow-500"
            onClick={toggleMenu}
          >
            İLETİŞİM
          </a>
        </nav>
      </div>
    </>
  );
};

export default Header;
