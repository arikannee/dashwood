// import servicesData from "@/data/services-data";
// import "./ServicesHome.css"

// export default function ServicesHome() {
//   return (
//     <section className="bg-gray-800 service-home">
//       <div className="container lg">
//         <div className="text-center pb-5">
//           <h1 className="text-lg m-1 text-[#e9d600] font-medium">OUR SERVICES</h1>
//           <h2 className="text-3xl text-white leading-tight">
//             Domestic, Commercial <br/> & Industrial Services
//           </h2>
//         </div>
//         <div className="grid grid-cols-12 lg:grid-cols-12 gap-5">
//         {servicesData.map((service, index) => (
//             <div key={index} className="bg-white p-5 pt-10 col-span-12 sm:col-span-6 lg:col-span-4 text-center rounded-lg hover:scale-105 ease-in-out duration-300">
//                 <a href={`services/${service.link}`}>
//                 <img src={`/images/icon/${service.icon}`} className="w-14 m-auto pb-4 icon"/>
//                 <h3 className="text-lg text-gray-700 mb-1 block">{service.title}</h3>
//                 <p className="text-gray-500">{service.description}</p>
//                 </a>
//             </div>
//             ))}
//         </div>
//       </div>
//     </section>
//   );
// }
"use client";
import { useState, useEffect } from "react";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";
import servicesData from "@/data/services-data";
import "./ServicesHome.css";

export default function ServicesHome() {
  const [showMore, setShowMore] = useState(false);
  const [isMobileView, setIsMobileView] = useState(false);

  const toggleShowMore = () => {
    setShowMore((prev) => !prev);
  };

  // Use useEffect to detect window width on the client side
  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth < 640); // Set to true if width is less than 640px (mobile breakpoint)
    };

    // Check on mount
    handleResize();

    // Add resize event listener
    window.addEventListener("resize", handleResize);

    // Cleanup the event listener on unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Slice data based on mobile view or showMore state
  const visibleServices = isMobileView && !showMore ? servicesData.slice(0, 3) : servicesData;

  return (
    <section className="bg-gray-800 service-home">
      <div className="container lg">
        <div className="text-center pb-5">
          <h1 className="text-lg m-1 text-[#e9d600] font-medium">OUR SERVICES</h1>
          <h2 className="text-3xl text-white leading-tight">
            Domestic, Commercial <br /> & Industrial Services
          </h2>
        </div>

        <div className="grid grid-cols-12 gap-5">
          {visibleServices.map((service, index) => (
            <div
              key={index}
              className="bg-white p-5 pt-10 col-span-12 sm:col-span-6 lg:col-span-4 text-center rounded-lg hover:scale-105 ease-in-out duration-300"
            >
              <a href={`services/${service.link}`}>
                <img
                  src={`/images/icon/${service.icon}`}
                  className="w-14 m-auto pb-4 icon"
                  alt={service.title}
                />
                <h3 className="text-lg text-gray-700 mb-1 block">{service.title}</h3>
                <p className="text-gray-500">{service.description}</p>
              </a>
            </div>
          ))}
        </div>

        {/* Button to toggle more services on smaller screens */}
        {servicesData.length > 3 && isMobileView && (
          <div className="text-center mt-5">
            <button
              onClick={toggleShowMore}
              className="text-[#e9d600] font-medium flex items-center justify-center mx-auto"
            >
              {showMore ? (
                <>
                  Hide More Services <FaChevronUp className="ml-2" />
                </>
              ) : (
                <>
                  Show More Services <FaChevronDown className="ml-2" />
                </>
              )}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
