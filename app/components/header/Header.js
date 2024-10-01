
"use client";
import { useEffect, useState } from "react";
import Navbar from "./navbar/Navbar";
import "./header.css";


const SocialTap = () => {
  const [isVisible, setIsVisible] = useState(true);

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

  return (
    <div className="header sticky top-0 z-50">
      <div className={`social-tap h-3 ${isVisible ? "block" : "absolute"}`}>
      </div>
      <div className="top-area bg-gray-600 sticky top-0 ">
        <div className="container lg">
          <Navbar />
        </div>
      </div>
    </div>
  );
};

export default SocialTap;
