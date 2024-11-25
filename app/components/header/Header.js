"use client";
import { useEffect, useState } from "react";
import Navbar from "./navbar/Navbar";
import "./header.css";

import { MdLocationPin } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { FaChevronDown, FaChevronUp, FaFacebook } from "react-icons/fa"; // Icons for arrow up and down
import { IoTime } from "react-icons/io5";


const SocialTap = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isExpanded, setIsExpanded] = useState(false); // State to toggle dropdown visibility

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 1) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleDropdown = () => {
    setIsExpanded(!isExpanded); // Toggle the dropdown
  };

  return (
    <div className="header sticky top-0 z-50 shadow-lg">
      {/* Social Tap - Only shows the first line with a dropdown on small screens */}
      <div className={`social-tap ${isVisible ? "block" : "absolute"}`}>
        <div className="container lg text-gray-600 flex flex-col lg:flex-row text-sm font-medium leading-7 lg:leading-5">
          {/* Single line with dropdown button (visible on small screens) */}
          <div
            className="flex justify-center items-center lg:hidden cursor-pointer p-1"
            onClick={toggleDropdown}
          >
            {isExpanded ? <FaChevronUp /> : <FaChevronDown />} {/* Arrow */}
          </div>

          {/* Expanded section with full details */}
          <div
            className={`flex flex-col grow lg:flex-row ${
              isExpanded ? "block" : "hidden lg:flex"
            } justify-between gap-1`}
          >
            <div className="flex items-center justify-center gap-1">
              <MdLocationPin />
              Richmond, North Yorkshire, DL10
            </div>
            <div className="flex items-center justify-center gap-1">
              <IoTime />
              Mon - Fri (8:00 AM - 4:00 PM)
            </div>
            <a
              className="flex items-center justify-center gap-1"
              href="https://www.facebook.com/Dashwoodelectrical"
            >
              <FaFacebook />
              Dashwoodelectrical
            </a>
            <a
              className="flex items-center justify-center gap-1"
              href="tel:+447740272382"
            >
              <FaPhone />
              07740 272 382
            </a>
          </div>
        </div>
      </div>

      {/* Top Navbar */}
      <div className="top-area bg-gray-600 sticky top-0">
        <div className="container lg">
          <Navbar />
        </div>
      </div>
    </div>
  );
};

export default SocialTap;
