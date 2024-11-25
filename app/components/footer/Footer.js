"use client";
import React, { useEffect } from "react";
import { MdLocationPin, MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { IoTime } from "react-icons/io5";
import Link from "next/link";
import servicesData from "../../../data/services-data";

export default function Footer() {
  useEffect(() => {
    // Get the current year
    const currentYear = new Date().getFullYear();

    // Update the content of the span element with the current year
    const currentYearElement = document.querySelector(".currentYear");
    if (currentYearElement) {
      currentYearElement.textContent = currentYear;
    }
  }, []);

  return (
    <footer>
      <div className="bg-gray-900 text-white">
        <div className="container lg py-8">
          <div className="flex gap-5 flex-col md:flex-row ">
            <div className="w-full sm:w-1/2 md:w-5/12 justify-center">
              <img src="/images/de-logo.svg" className="h-9 mb-5" />
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-2">
                  <MdLocationPin />
                  Richmond, North Yorkshire, DL10
                </div>
                <div className="flex items-center gap-2">
                  <IoTime />
                  Mon - Fri (8:00 AM - 4:00 PM)
                </div>
                <a
                  className="flex items-center gap-2 hover:text-[#fdec01]"
                  href="https://www.facebook.com/Dashwoodelectrical"
                >
                  <FaFacebook />
                  Dashwoodelectrical
                </a>
                <a
                  className="flex items-center gap-2 hover:text-[#fdec01]"
                  href="tel:+447740272382"
                >
                  <FaPhone />
                  07740 272 382
                </a>
                <a
                  href="mailto:info@dashwood.online"
                  className="flex items-center gap-2 hover:text-[#fdec01]"
                >
                  <MdEmail />
                  info@dashwood.online
                </a>
              </div>
            </div>

            <div className=" w-full sm:w-1/2 md:w-3/12 justify-center">
              <h4>Quick Links</h4>
              <ul className="flex flex-col gap-2 dot-list ul-18-start dot-yellow">
                <li>
                  <Link href="/" className="block hover:text-[#fdec01]">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/#about" className="block  hover:text-[#fdec01]">
                    About
                  </Link>
                </li>

                <li>
                  <Link href="/#gallery" className="block hover:text-[#fdec01]">
                    Gallery
                  </Link>
                </li>
                <li>
                  <Link
                    href="/#contact-us"
                    className="block hover:text-[#fdec01]"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div className=" w-full sm:w-1/2 md:w-4/12 justify-center">
              <h4>Services</h4>
              <ul
                className="flex flex-col gap-2 dot-list ul-18-start dot-yellow"
                aria-labelledby="dropdownNavbarLink"
              >
                {servicesData.map((service, index) => (
                  <li key={index}>
                    <Link
                      href={`/services?service=${service.link}`}
                      className="block hover:text-[#fdec01]"
                    >
                      {service.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-950 h-14 flex text-center justify-center items-center">
        <div className="container lg text-white">
          © DASHWOOD Electrical Services <span className="currentYear"></span> -
          All rights reserved
        </div>
      </div>
    </footer>
  );
}
