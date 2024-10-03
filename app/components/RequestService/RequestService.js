// "use client";
// import { useRef, useState } from "react";
// import emailjs from "emailjs-com";
// import servicesData from "../../../data/services-data";
// import { MdElectricBolt } from "react-icons/md";

// export default function RequestService() {
//   const form = useRef();

//   const sendEmail = (e) => {
//     e.preventDefault();
//     emailjs
//       .sendForm(
//         "YOUR_SERVICE_ID",
//         "YOUR_TEMPLATE_ID",
//         form.current,
//         "YOUR_USER_ID"
//       )
//       .then(
//         (result) => {
//           console.log(result.text);
//         },
//         (error) => {
//           console.log(error.text);
//         }
//       );
//   };
//   const [selectedService, setSelectedService] = useState(""); // Default value is an empty string

//   const handleServiceChange = (event) => {
//     setSelectedService(event.target.value);
//   };
//   return (
//     <div>
//       <div className="container lg -mt-10 z-10 relative text-center lg:text-left ">
//         <div className="bg-[#fdec01] inline-block px-5 py-2 rounded-t-xl text-gray-700 font-bold">
//           <MdElectricBolt className="inline-block" /> Request Services
//         </div>
//       </div>
//       <div className="bg-gray-600 h-auto py-8 flex justify-center">
//         <form
//           ref={form}
//           onSubmit={sendEmail}
//           className="w-full rounded-lg flex flex-col lg:flex-row container gap-4"
//         >
//           {/* Your Name */}
//           <div className="w-full lg:w-1/5 lg:mb-0">
//             <input
//               type="text"
//               name="name"
//               placeholder="Your Name"
//               className="block w-full p-2 border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-0"
//               required
//             />
//           </div>

//           {/* Email and Phone in the same row on small screens */}
//           <div className="flex w-full lg:w-2/5">
//             {/* Your Email */}
//             <div className="w-1/2 pr-2">
//               <input
//                 type="email"
//                 name="email"
//                 placeholder="Your Email"
//                 className="block w-full p-2 border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-0"
//                 required
//               />
//             </div>

//             {/* Your Phone */}
//             <div className="w-1/2 pl-2">
//               <input
//                 type="text"
//                 name="phone"
//                 placeholder="Your Phone"
//                 className="block w-full p-2 border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-0"
//                 required
//               />
//             </div>
//           </div>

//           {/* Service (Select) */}
//           <div className="w-full lg:w-1/4">
//             <select
//               name="service"
//               value={selectedService} // Use state to control the selected value
//               onChange={handleServiceChange}
//               className="block w-full p-2 border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-0"
//               required
//             >
//               <option value="" disabled>
//                 Select Service
//               </option>
//               {/* Default option */}
//               {servicesData.map((service, index) => (
//                 <option key={index} value={service.link}>
//                   {service.title}
//                 </option>
//               ))}
//             </select>
//           </div>

//           {/* Submit Button */}
//           <div className="w-full lg:w-1/6">
//             <button
//               type="submit"
//               className="w-full bg-[#fdec01] text-gray-700 font-semibold py-2 px-4 rounded-lg hover:bg-gray-800 hover:text-[#fdec01]"
//             >
//               Send Request
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }

"use client";
import { useRef, useState } from "react";
import emailjs from "emailjs-com";
import servicesData from "../../../data/services-data";
import { MdElectricBolt, MdExpandMore, MdExpandLess } from "react-icons/md"; // Import additional icons

export default function RequestService() {
  const form = useRef();
  const [selectedService, setSelectedService] = useState(""); // Default value is an empty string
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // State for dropdown visibility

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        form.current,
        "YOUR_USER_ID"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const handleServiceChange = (event) => {
    setSelectedService(event.target.value);
  };

  // Function to toggle the dropdown
  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  return (
    <div>
      <div className="container -mt-10 z-10 relative text-center lg:text-left">
        <div
          className="bg-[#fdec01] px-5 py-2 rounded-t-xl text-gray-700 font-bold cursor-pointer inline-flex lg:hidden items-center gap-2"
          onClick={toggleDropdown} // Trigger dropdown on click for medium screens and below
        >
          <MdElectricBolt /> Request Services
          {isDropdownOpen ? (
            <MdExpandLess className="ml-2" /> // Arrow up when dropdown is open
          ) : (
            <MdExpandMore className="ml-2" /> // Arrow down when dropdown is closed
          )}
        </div>
        <div className="hidden lg:inline-block bg-[#fdec01] px-5 py-2 rounded-t-xl text-gray-700 font-bold">
          <MdElectricBolt className="inline-block" /> Request Services
        </div>
      </div>

      {/* Dropdown Content for Medium Screens and Below */}
      {isDropdownOpen && (
        <div className="bg-gray-600 h-auto py-8 flex justify-center lg:hidden">
          <form
            ref={form}
            onSubmit={sendEmail}
            className="w-full rounded-lg flex flex-col lg:flex-row container gap-4"
          >
            {/* Your Name */}
            <div className="w-full lg:w-1/5 lg:mb-0">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="block w-full p-2 border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-0"
                required
              />
            </div>

            {/* Email and Phone in the same row on small screens */}
            <div className="flex w-full lg:w-2/5">
              {/* Your Email */}
              <div className="w-1/2 pr-2">
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  className="block w-full p-2 border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-0"
                  required
                />
              </div>

              {/* Your Phone */}
              <div className="w-1/2 pl-2">
                <input
                  type="text"
                  name="phone"
                  placeholder="Your Phone"
                  className="block w-full p-2 border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-0"
                  required
                />
              </div>
            </div>

            {/* Service (Select) */}
            <div className="w-full lg:w-1/4">
              <select
                name="service"
                value={selectedService} // Use state to control the selected value
                onChange={handleServiceChange}
                className="block w-full p-2 border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-0"
                required
              >
                <option value="" disabled>
                  Select Service
                </option>
                {/* Default option */}
                {servicesData.map((service, index) => (
                  <option key={index} value={service.link}>
                    {service.title}
                  </option>
                ))}
              </select>
            </div>

            {/* Submit Button */}
            <div className="w-full lg:w-1/6">
              <button
                type="submit"
                className="w-full bg-[#fdec01] text-gray-700 font-semibold py-2 px-4 rounded-lg hover:bg-gray-800 hover:text-[#fdec01]"
              >
                Send Request
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Form for Large Screens */}
      <div className="hidden lg:bg-gray-600 lg:h-auto lg:py-8 lg:flex lg:justify-center">
        <form
          ref={form}
          onSubmit={sendEmail}
          className="w-full rounded-lg flex flex-col lg:flex-row container gap-4"
        >
          {/* Your Name */}
          <div className="w-full lg:w-1/5 lg:mb-0">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="block w-full p-2 border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-0"
              required
            />
          </div>

          {/* Email and Phone in the same row on small screens */}
          <div className="flex w-full lg:w-2/5">
            {/* Your Email */}
            <div className="w-1/2 pr-2">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                className="block w-full p-2 border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-0"
                required
              />
            </div>

            {/* Your Phone */}
            <div className="w-1/2 pl-2">
              <input
                type="text"
                name="phone"
                placeholder="Your Phone"
                className="block w-full p-2 border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-0"
                required
              />
            </div>
          </div>

          {/* Service (Select) */}
          <div className="w-full lg:w-1/4">
            <select
              name="service"
              value={selectedService} // Use state to control the selected value
              onChange={handleServiceChange}
              className="block w-full p-2 border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-0"
              required
            >
              <option value="" disabled>
                Select Service
              </option>
              {/* Default option */}
              {servicesData.map((service, index) => (
                <option key={index} value={service.link}>
                  {service.title}
                </option>
              ))}
            </select>
          </div>

          {/* Submit Button */}
          <div className="w-full lg:w-1/6">
            <button
              type="submit"
              className="w-full bg-[#fdec01] text-gray-700 font-semibold py-2 px-4 rounded-lg hover:bg-gray-800 hover:text-[#fdec01]"
            >
              Send Request
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
