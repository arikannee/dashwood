// "use client";
// import { useState, useEffect } from "react";
// import { useSearchParams } from "next/navigation";
// import servicesData from "@/data/services-data";

// export default function Services() {
//   const searchParams = useSearchParams();
//   const service = searchParams.get("service"); // Get the 'service' query parameter
//   const [activeTab, setActiveTab] = useState(service || servicesData[0].link);

//   useEffect(() => {
//     if (service) {
//       setActiveTab(service);
//     }
//   }, [service]);

//   const handleTabClick = (tabLink) => {
//     setActiveTab(tabLink);
//     window.history.replaceState(null, "", `/services?service=${tabLink}`);
//   };

//   return (
//     <div className="bg-gray-800">
//       <div className="container lg">
//         <div className="flex flex-col lg:flex-row bg-gray-100">
//           {/* Sidebar Tabs */}
//           <div className="lg:w-1/4 bg-gray-800 py-4 lg:pr-4 pt-10 flex flex-col gap-2 lg:gap-4">
//             {servicesData.map((service) => (
//               <button
//                 key={service.link}
//                 onClick={() => handleTabClick(service.link)}
//                 className={`w-full lg:text-left text-center px-4 py-2 rounded-lg font-medium transition
//             ${
//               activeTab === service.link
//                 ? "bg-[#fdec01] text-gray-800"
//                 : "bg-gray-700 text-white hover:bg-[#fdec01] hover:bg-opacity-50 hover:text-white"
//             }
//           `}
//               >
//                 {service.title}
//               </button>
//             ))}
//           </div>

//           {/* Content Section */}
//           <div className="flex-1  bg-white flex justify-center">
//             <div>
//               {servicesData
//                 .filter((service) => service.link === activeTab)
//                 .map((service) => (
//                   <div key={service.link}>
//                     <div
//                       className="bg-cover bg-center bg-no-repeat md:h-[300px] lg:h-[400px] w-full h-[200px] "
//                       style={{
//                         backgroundImage: `url(/images/services/${service.image})`,
//                       }}
//                     >
//                       <div className="bg-black w-full h-full bg-opacity-70 flex items-center justify-center -mt-[2px]">
//                         <h2 className="text-2xl lg:text-4xl font-semibold text-white mb-0">
//                           {service.title}
//                         </h2>
//                       </div>
//                     </div>

//                     <p className="text-gray-600 text-lg lg:text-xl p-6 lg:p-10">
//                       {service.description}
//                     </p>
//                   </div>
//                 ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
"use client";
import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import servicesData from "@/data/services-data";

function ServicesContent() {
  const searchParams = useSearchParams();
  const service = searchParams.get("service"); // Get the 'service' query parameter
  const [activeTab, setActiveTab] = useState(service || servicesData[0].link);

  useEffect(() => {
    if (service) {
      setActiveTab(service);
    }
  }, [service]);

  const handleTabClick = (tabLink) => {
    setActiveTab(tabLink);
    window.history.replaceState(null, "", `/services?service=${tabLink}`);
  };

  return (
    <div className="bg-gray-800">
      <div className="container lg">
        <div className="flex flex-col lg:flex-row bg-gray-100">
          {/* Sidebar Tabs */}
          <div className="lg:w-1/4 bg-gray-800 py-4 lg:pr-4 pt-10 flex flex-col gap-2 lg:gap-4">
            {servicesData.map((service) => (
              <button
                key={service.link}
                onClick={() => handleTabClick(service.link)}
                className={`w-full lg:text-left text-center px-4 py-2 rounded-lg font-medium transition  
                ${
                  activeTab === service.link
                    ? "bg-[#fdec01] text-gray-800"
                    : "bg-gray-700 text-white hover:bg-[#fdec01] hover:bg-opacity-50 hover:text-white"
                }`}
              >
                {service.title}
              </button>
            ))}
          </div>

          {/* Content Section */}
          <div className="flex-1 bg-white flex justify-center">
            <div>
              {servicesData
                .filter((service) => service.link === activeTab)
                .map((service) => (
                  <div key={service.link}>
                    <div
                      className="bg-cover bg-center bg-no-repeat md:h-[300px] lg:h-[400px] w-full h-[200px]"
                      style={{
                        backgroundImage: `url(/images/services/${service.image})`,
                      }}
                    >
                      <div className="bg-black w-full h-full bg-opacity-70 flex flex-col items-center justify-center -mt-[2px]">
                        <h2 className="text-xl sm:text-2xl lg:text-4xl font-semibold text-white mb-0 p-4 text-center">
                          {service.title}
                        </h2>
                      </div>
                    </div>

                    <p className="text-gray-600 p-6 lg:p-10">
                      {service.details}
                    </p>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Services() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ServicesContent />
    </Suspense>
  );
}
