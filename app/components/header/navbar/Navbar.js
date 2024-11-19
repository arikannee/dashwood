"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import "./Navbar.css";
import servicesData from "../../../../data/services-data";
import { Zilla_Slab, Nunito_Sans } from "next/font/google";
import HashScrollHandler from "../../HashScrollHandler";

const zillaSlab = Zilla_Slab({
  weight: "700",
  style: "italic",
  subsets: ["latin"],
  fallback: ["serif"],
});

const roboto = Nunito_Sans({
  weight: "800",
  style: "italic",
  subsets: ["latin"],
  fallback: ["san-serif"],
});

const Navbar = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen((prev) => !prev);
  };

  // Close the dropdown when clicking on a navigation link
  const closeDropdown = () => {
    setDropdownOpen(false);
  };

  return (
    <div className="nav max-w-screen-xl flex flex-wrap items-center justify-between mx-auto">
      <Link href="/" className="flex logo flex-auto">
        <div className="de relative flex">
          <Image
            src="/images/D.svg"
            alt="D"
            className="letter"
            height={40}
            width={44.7}
          />
          <Image
            src="/images/lightning.svg"
            alt="Lightning"
            className="lightning absolute"
            height={41.2}
            width={28.2}
          />
          <Image
            src="/images/E.svg"
            alt="E"
            className="letter"
            height={40}
            width={40.4}
          />
        </div>
        <div className="logo-txt inline-flex">
          <div className={`logo-line1 ${zillaSlab.className}`}>
            <span>DASHWOOD</span>
          </div>
          <div className="logo-line2">
            <span className={`yellow ${roboto.className}`}>
              Electrical Services
            </span>
          </div>
        </div>
      </Link>
      <button
        type="button"
        className="inline-flex items-center w-10 h-10 justify-center text-sm text-gray-400 rounded-lg lg:hidden hover:bg-gray-700 focus:outline-none border border-gray-300"
        aria-controls="navbar-dropdown"
        aria-expanded={isDropdownOpen}
        onClick={toggleDropdown}
      >
        <span className="sr-only">Open main menu</span>
        <svg
          className="w-5 h-5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 17 14"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M1 1h15M1 7h15M1 13h15"
          />
        </svg>
      </button>
      <div
        className={`w-full lg:block lg:w-auto ${
          isDropdownOpen ? "" : "hidden"
        }`}
        id="navbar-dropdown"
      >
        <ul className="flex flex-col font-medium mt-4 border border-gray-300 rounded-lg lg:space-x-8 lg:flex-row lg:mt-0 lg:border-0 mb-0">
          <li onClick={closeDropdown}>
            <Link href="/" className="block py-2 px-3 hover:text-[#fdec01]">
              Home
            </Link>
          </li>
          <li onClick={closeDropdown}>
            <Link href="/#about" className="block py-2 px-3 hover:text-[#fdec01]">
              About
            </Link>
          </li>
          <li className="relative">
            <button
              onClick={toggleDropdown}
              className="flex items-center justify-between w-full py-2 px-3 hover:text-[#fdec01]"
            >
              Services
              <svg
                className="w-2.5 h-2.5 ml-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 4 4 4-4"
                />
              </svg>
            </button>
            {/* Dropdown menu */}
            <div
              className={`z-10 ${
                isDropdownOpen ? "block" : "hidden"
              } lg:absolute font-normal bg-gray-700 divide-y divide-gray-100 rounded-lg shadow lg:w-44`}
            >
              <ul
                className="py-2 text-sm text-white"
                aria-labelledby="dropdownNavbarLink"
              >
                {servicesData.map((service, index) => (
                  <li key={index} onClick={closeDropdown}>
                    <Link
                      href={`/services?service=${service.link}`}
                      className="block px-4 py-2 hover:bg-gray-500 hover:text-[#fdec01]"
                    >
                      {service.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </li>
          <li onClick={closeDropdown}>
            <Link
              href="/#gallery"
              className="block py-2 px-3 hover:text-[#fdec01]"
            >
              Gallery
            </Link>
          </li>
          <li onClick={closeDropdown}>
            <Link
              href="/#contact-us"
              className="block py-2 px-3 hover:text-[#fdec01]"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
      <div className="flex-auto justify-end hidden lg:flex">
        <Link
          href="/quote"
          className="btn text-gray-600 relative inline-flex items-center justify-start overflow-hidden font-medium transition-all bg-indigo-100 rounded hover:bg-[#fdec01] group py-1.5 px-2.5"
        >
          <span className="w-56 h-48 rounded bg-gray-800 absolute bottom-0 left-0 translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
          <span className="relative w-full text-left transition-colors duration-300 ease-in-out group-hover:text-[#fdec01]">
            Get A Quote
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
