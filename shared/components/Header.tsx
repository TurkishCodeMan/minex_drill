"use client";

import React, { useState, useEffect } from "react";
import { HiMiniBars3BottomRight, HiChevronDown } from "react-icons/hi2";
import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/react";
import { useTranslations } from 'next-intl';
import '../styles/header.css'
import LanguageSwitcher from "./LanguageSwitcher";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const t = useTranslations('header');

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
    <header
      className={`w-full z-50 transition-all duration-500 ease-in-out clip-triangle pr-10  ${
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
          <a href="/" className="text-white hover:text-red-700">
            {t('home')}
          </a>
          <Menu as="div" className="relative">
            <MenuButton className="text-white hover:text-red-700 flex items-center">
              {t('corporate')}
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
                      {t('about')}
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
                      {t('quality')}
                    </a>
                  )}
                </MenuItem>
                <MenuItem>
                  {({ active }) => (
                    <a
                      href="/vision"
                      className={`${
                        active ? "bg-gray-100" : ""
                      } block px-4 py-2 text-sm text-gray-700`}
                    >
                      {t('visionMission')}
                    </a>
                  )}
                </MenuItem>
              </div>
            </MenuItems>
          </Menu>
          <a href="/services" className="text-white hover:text-red-700">
            {t('services')}
          </a>
          <a href="/machines" className="text-white hover:text-red-700">
            {t('machines')}
          </a>
          <a href="/catalog" className="text-white hover:text-red-700">
            {t('catalog')}
          </a>
          <a href="/isg" className="text-green-500 hover:text-red-700">
            {t('isg')}
          </a>
          <a href="/contact" className="text-white hover:text-red-700">
            {t('contact')}
          </a>
          <LanguageSwitcher />
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
        className={`fixed bg-gradient-to-br from-red-700 to-red-400 bg-opacity-80 inset-0 z-50 flex flex-col items-center justify-center transition-all duration-500 ease-in-out ${
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
          <a href="/" className="hover:text-red-700" onClick={toggleMenu}>
            {t('home')}
          </a>
          <a
            href="/about"
            className="hover:text-red-700"
            onClick={toggleMenu}
          >
            {t('about')}
          </a>
          <a
            href="/quality"
            className="hover:text-red-700"
            onClick={toggleMenu}
          >
            {t('quality')}
          </a>
          <a
            href="/vision"
            className="hover:text-red-700"
            onClick={toggleMenu}
          >
            {t('visionMission')}
          </a>
          <a
            href="/services"
            className="hover:text-red-700"
            onClick={toggleMenu}
          >
            {t('services')}
          </a>
          <a
            href="/machines"
            className="hover:text-red-700"
            onClick={toggleMenu}
          >
            {t('machines')}
          </a>
          <a
            href="/catalog"
            className="hover:text-red-700"
            onClick={toggleMenu}
          >
            {t('catalog')}
          </a>
          <a href="/isg" className="text-green-500 hover:text-red-700" onClick={toggleMenu}>
            {t('isg')}
          </a>
          <a
            href="/contact"
            className="hover:text-red-700"
            onClick={toggleMenu}
          >
            {t('contact')}
          </a>
          <LanguageSwitcher />
        </nav>
      </div>
    </>
  );
};

export default Header;
