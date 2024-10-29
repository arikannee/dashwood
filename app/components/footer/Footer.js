"use client";
import React, { useEffect } from "react";

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
      <div className="bg-gray-900 h-14 flex text-center justify-center items-center">
        <div className="container lg text-white">
            © DASHWOOD Electrical Services <span className="currentYear"></span> -
            All rights reserved
        </div>
      </div>
    </footer>
  );
}
