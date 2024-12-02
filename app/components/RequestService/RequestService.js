// "use client";
// import { useRef, useState } from "react";
// import emailjs from "emailjs-com";
// import servicesData from "../../../data/services-data";
// import { MdElectricBolt, MdExpandMore, MdExpandLess } from "react-icons/md"; // Import additional icons

// export default function RequestService() {
//   const form = useRef();
//   const [selectedService, setSelectedService] = useState(""); // Default value is an empty string
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false); // State for dropdown visibility

//   const sendEmail = (e) => {
//     e.preventDefault();
//     emailjs
//       .sendForm(
//         "service_es0xemn",
//         "template_t8h73dq",
//         form.current,
//         "dE9jVLT2-NcfIa14z"
//       )
//       .then(
//         (result) => {
//           alert("Request sent successfully!");
//           e.target.reset(); // Clear the form on success
//         },
//         (error) => {
//           alert("Failed to send the Request, please try again.");
//         }
//       );
//   };

//   const handleServiceChange = (event) => {
//     setSelectedService(event.target.value);
//   };

//   // Function to toggle the dropdown
//   const toggleDropdown = () => {
//     setIsDropdownOpen((prev) => !prev);
//   };

//   return (
//     <div>
//       <div className="container -mt-10 z-10 relative text-center lg:text-left">
//         <div
//           className="bg-[#fdec01] px-5 py-2 rounded-t-xl text-gray-700 font-bold cursor-pointer inline-flex lg:hidden items-center gap-2"
//           onClick={toggleDropdown} // Trigger dropdown on click for medium screens and below
//         >
//           <MdElectricBolt /> Request Services
//           {isDropdownOpen ? (
//             <MdExpandLess className="ml-2" /> // Arrow up when dropdown is open
//           ) : (
//             <MdExpandMore className="ml-2" /> // Arrow down when dropdown is closed
//           )}
//         </div>
//         <div className="hidden lg:inline-block bg-[#fdec01] px-5 py-2 rounded-t-xl text-gray-700 font-bold">
//           <MdElectricBolt className="inline-block" /> Request Services
//         </div>
//       </div>

//       {/* Dropdown Content for Medium Screens and Below */}
//       {isDropdownOpen && (
//         <div className="bg-gray-600 h-auto py-8 flex justify-center lg:hidden">
//           <form
//             ref={form}
//             onSubmit={sendEmail}
//             className="w-full rounded-lg flex flex-col lg:flex-row container gap-4"
//           >
//             {/* Your Name */}
//             <div className="w-full lg:w-1/5 lg:mb-0">
//               <input
//                 type="text"
//                 name="name"
//                 placeholder="Your Name"
//                 className="block w-full p-2 border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-0"
//                 required
//               />
//             </div>

//             {/* Email and Phone in the same row on small screens */}
//             <div className="flex w-full lg:w-2/5">
//               {/* Your Email */}
//               <div className="w-1/2 pr-2">
//                 <input
//                   type="email"
//                   name="email"
//                   placeholder="Your Email"
//                   className="block w-full p-2 border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-0"
//                   required
//                 />
//               </div>

//               {/* Your Phone */}
//               <div className="w-1/2 pl-2">
//                 <input
//                   type="text"
//                   name="phone"
//                   placeholder="Your Phone"
//                   className="block w-full p-2 border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-0"
//                   required
//                 />
//               </div>
//             </div>

//             {/* Service (Select) */}
//             <div className="w-full lg:w-1/4">
//               <select
//                 name="service"
//                 value={selectedService} // Use state to control the selected value
//                 onChange={handleServiceChange}
//                 className="block w-full p-2 border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-0"
//                 required
//               >
//                 <option value="" disabled>
//                   Select Service
//                 </option>
//                 {/* Default option */}
//                 {servicesData.map((service, index) => (
//                   <option key={index} value={service.link}>
//                     {service.title}
//                   </option>
//                 ))}
//               </select>
//             </div>

//             {/* Submit Button */}
//             <div className="w-full lg:w-1/6">
//               <button
//                 type="submit"
//                 className="w-full bg-[#fdec01] text-gray-700 font-semibold py-2 px-4 rounded-lg hover:bg-gray-800 hover:text-[#fdec01]"
//               >
//                 Send Request
//               </button>
//             </div>
//           </form>
//         </div>
//       )}

//       {/* Form for Large Screens */}
//       <div className="hidden lg:bg-gray-600 lg:h-auto lg:py-8 lg:flex lg:justify-center">
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
//               placeholder="Your Name *"
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
//                 placeholder="Your Email *"
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

// "use client";
// import { useRef, useState } from "react";
// import emailjs from "emailjs-com";
// import servicesData from "../../../data/services-data";
// import { MdElectricBolt, MdExpandMore, MdExpandLess } from "react-icons/md"; // Import additional icons

// export default function RequestService() {
//   const form = useRef();
//   const [selectedService, setSelectedService] = useState(""); // Default value is an empty string
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false); // State for dropdown visibility
//   const [honeypot, setHoneypot] = useState(""); // Honeypot field state

//   const sendEmail = (e) => {
//     e.preventDefault();

//     // Honeypot validation: If filled, block submission
//     if (honeypot) {
//       alert("Spam detected. Submission blocked.");
//       return;
//     }

//     emailjs
//       .sendForm(
//         "service_es0xemn",
//         "template_t8h73dq",
//         form.current,
//         "dE9jVLT2-NcfIa14z"
//       )
//       .then(
//         (result) => {
//           alert("Request sent successfully!");
//           e.target.reset(); // Clear the form on success
//         },
//         (error) => {
//           alert("Failed to send the Request, please try again.");
//         }
//       );
//   };

//   const handleServiceChange = (event) => {
//     setSelectedService(event.target.value);
//   };

//   // Function to toggle the dropdown
//   const toggleDropdown = () => {
//     setIsDropdownOpen((prev) => !prev);
//   };

//   return (
//     <div>
//       <div className="container -mt-10 z-10 relative text-center lg:text-left">
//         <div
//           className="bg-[#fdec01] px-5 py-2 rounded-t-xl text-gray-700 font-bold cursor-pointer inline-flex lg:hidden items-center gap-2"
//           onClick={toggleDropdown} // Trigger dropdown on click for medium screens and below
//         >
//           <MdElectricBolt /> Request Services
//           {isDropdownOpen ? (
//             <MdExpandLess className="ml-2" /> // Arrow up when dropdown is open
//           ) : (
//             <MdExpandMore className="ml-2" /> // Arrow down when dropdown is closed
//           )}
//         </div>
//         <div className="hidden lg:inline-block bg-[#fdec01] px-5 py-2 rounded-t-xl text-gray-700 font-bold">
//           <MdElectricBolt className="inline-block" /> Request Services
//         </div>
//       </div>

//       {/* Dropdown Content for Medium Screens and Below */}
//       {isDropdownOpen && (
//         <div className="bg-gray-600 h-auto py-8 flex justify-center lg:hidden">
//           <form
//             ref={form}
//             onSubmit={sendEmail}
//             className="w-full rounded-lg flex flex-col lg:flex-row container gap-4"
//           >
//             {/* Honeypot Field */}
//             <input
//               type="text"
//               name="honeypot"
//               style={{ display: "none" }}
//               value={honeypot}
//               onChange={(e) => setHoneypot(e.target.value)}
//             />

//             {/* Your Name */}
//             <div className="w-full lg:w-1/5 lg:mb-0">
//               <input
//                 type="text"
//                 name="name"
//                 placeholder="Your Name"
//                 className="block w-full p-2 border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-0"
//                 required
//               />
//             </div>

//             {/* Email and Phone in the same row on small screens */}
//             <div className="flex w-full lg:w-2/5">
//               {/* Your Email */}
//               <div className="w-1/2 pr-2">
//                 <input
//                   type="email"
//                   name="email"
//                   placeholder="Your Email"
//                   className="block w-full p-2 border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-0"
//                   required
//                 />
//               </div>

//               {/* Your Phone */}
//               <div className="w-1/2 pl-2">
//                 <input
//                   type="text"
//                   name="phone"
//                   placeholder="Your Phone"
//                   className="block w-full p-2 border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-0"
//                   required
//                 />
//               </div>
//             </div>

//             {/* Service (Select) */}
//             <div className="w-full lg:w-1/4">
//               <select
//                 name="service"
//                 value={selectedService} // Use state to control the selected value
//                 onChange={handleServiceChange}
//                 className="block w-full p-2 border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-0"
//                 required
//               >
//                 <option value="" disabled>
//                   Select Service
//                 </option>
//                 {/* Default option */}
//                 {servicesData.map((service, index) => (
//                   <option key={index} value={service.link}>
//                     {service.title}
//                   </option>
//                 ))}
//               </select>
//             </div>

//             {/* Submit Button */}
//             <div className="w-full lg:w-1/6">
//               <button
//                 type="submit"
//                 className="w-full bg-[#fdec01] text-gray-700 font-semibold py-2 px-4 rounded-lg hover:bg-gray-800 hover:text-[#fdec01]"
//               >
//                 Send Request
//               </button>
//             </div>
//           </form>
//         </div>
//       )}

//       {/* Form for Large Screens */}
//       <div className="hidden lg:bg-gray-600 lg:h-auto lg:py-8 lg:flex lg:justify-center">
//         <form
//           ref={form}
//           onSubmit={sendEmail}
//           className="w-full rounded-lg flex flex-col lg:flex-row container gap-4"
//         >
//           {/* Honeypot Field */}
//           <input
//             type="text"
//             name="honeypot"
//             style={{ display: "none" }}
//             value={honeypot}
//             onChange={(e) => setHoneypot(e.target.value)}
//           />

//           {/* Your Name */}
//           <div className="w-full lg:w-1/5 lg:mb-0">
//             <input
//               type="text"
//               name="name"
//               placeholder="Your Name *"
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
//                 placeholder="Your Email *"
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
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import emailjs from "emailjs-com";
import servicesData from "../../../data/services-data";
import { MdElectricBolt, MdExpandMore, MdExpandLess } from "react-icons/md";

export default function RequestService() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // State for dropdown visibility
  const form = useRef();

  // Validation schema using Yup
  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .required("Name is required")
      .min(3, "Name must be at least 3 characters"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    phone: Yup.string()
      .nullable()
      .matches(
        /^(?:0(7\d{9}|[123]\d{8,9}))$/,
        "Enter a valid UK phone number (landline or mobile)"
      ),
    service: Yup.string().required("Please select a service"),
  });

  // Toggle the dropdown visibility
  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  // Function to send the email using emailjs
  const sendEmail = (values, actions) => {
    emailjs
      .send(
        "service_es0xemn",
        "template_t8h73dq",
        {
          name: values.name,
          email: values.email,
          phone: values.phone,
          service: values.service,
        },
        "dE9jVLT2-NcfIa14z"
      )
      .then(
        () => {
          alert(
            "Your request has been sent successfully! We will get back to you within 2-3 business days."
          );
          actions.resetForm(); // Reset the form
        },
        () => {
          alert("Failed to send the Request, please try again.");
        }
      )
      .finally(() => {
        actions.setSubmitting(false);
      });
  };

  return (
    <div>
      {/* Dropdown Header */}
      <div className="container -mt-10 z-10 relative text-center lg:text-left">
        <div
          className="bg-[#fdec01] px-5 py-2 rounded-t-xl text-gray-700 font-bold cursor-pointer inline-flex lg:hidden items-center gap-2"
          onClick={toggleDropdown}
        >
          <MdElectricBolt /> Request Services
          {isDropdownOpen ? (
            <MdExpandLess className="ml-2" />
          ) : (
            <MdExpandMore className="ml-2" />
          )}
        </div>
        <div className="hidden lg:inline-block bg-[#fdec01] px-5 py-2 rounded-t-xl text-gray-700 font-bold">
          <MdElectricBolt className="inline-block" /> Request Services
        </div>
      </div>

      {/* Form for Small Screens */}
      {isDropdownOpen && (
        <div className="bg-gray-600 h-auto py-8 flex justify-center lg:hidden">
          <Formik
            initialValues={{
              name: "",
              email: "",
              phone: "",
              service: "",
            }}
            validationSchema={Yup.object({
              name: Yup.string().required("Name is required")
              .min(3, "Name must be at least 3 characters long"),
              email: Yup.string()
                .email("Invalid email address")
                .required("Email is required"),
              phone: Yup.string()
                .nullable()
                .matches(
                  /^(?:0(7\d{9}|[123]\d{8,9}))$/,
                  "Enter a valid UK phone number (landline or mobile)"
                ),
              service: Yup.string().required("Please select a service"),
            })}
            onSubmit={(values, actions) => {
              sendEmail(values, actions);
            }}
          >
            {({ isSubmitting }) => (
              <Form
                ref={form}
                className="w-full rounded-lg flex flex-col container gap-4"
              >
                {/* Your Name */}
                <div className="w-full">
                  <Field
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    className="block w-full p-2 border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-0"
                  />
                  <ErrorMessage
                    name="name"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>

                {/* Email and Phone */}
                <div className="w-full">
                  <Field
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    className="block w-full p-2 border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-0"
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>
                <div className="w-full">
                  <Field
                    type="text"
                    name="phone"
                    placeholder="Your Phone"
                    className="block w-full p-2 border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-0"
                  />
                  <ErrorMessage
                    name="phone"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>

                {/* Service */}
                <div className="w-full">
                  <Field
                    as="select"
                    name="service"
                    className="block w-full p-2 border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-0"
                  >
                    <option value="" disabled>
                      Select Service
                    </option>
                    {servicesData.map((service, index) => (
                      <option key={index} value={service.link}>
                        {service.title}
                      </option>
                    ))}
                  </Field>
                  <ErrorMessage
                    name="service"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>

                {/* Submit Button */}
                <div className="w-full">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#fdec01] text-gray-700 font-semibold py-2 px-4 rounded-lg hover:bg-gray-800 hover:text-[#fdec01] disabled:opacity-50"
                  >
                    {isSubmitting ? "Sending..." : "Send Request"}
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      )}

      {/* Form for Large Screens */}
      <div className="hidden lg:flex bg-gray-600 py-8 justify-center">
        <Formik
          initialValues={{
            name: "",
            email: "",
            phone: "",
            service: "",
          }}
          validationSchema={Yup.object({
            name: Yup.string()
              .required("Name is required")
              .min(3, "Name must be at least 3 characters long"),

            email: Yup.string()
              .email("Invalid email address")
              .required("Email is required"),
            phone: Yup.string()
              .nullable()
              .matches(
                /^(?:0(7\d{9}|[123]\d{8,9}))$/,
                "Enter a valid UK phone number (landline or mobile)"
              ),
            service: Yup.string().required("Please select a service"),
          })}
          onSubmit={(values, actions) => {
            sendEmail(values, actions);
          }}
        >
          {({ isSubmitting }) => (
            <Form
              ref={form}
              className="w-full rounded-lg flex flex-row container gap-4"
            >
              {/* Your Name */}
              <div className="w-1/5">
                <Field
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  className="block w-full p-2 border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-0"
                />
                <ErrorMessage
                  name="name"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>

              {/* Email and Phone */}
              <div className="flex w-2/5">
                <div className="w-1/2 pr-2">
                  <Field
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    className="block w-full p-2 border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-0"
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>
                <div className="w-1/2 pl-2">
                  <Field
                    type="text"
                    name="phone"
                    placeholder="Your Phone"
                    className="block w-full p-2 border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-0"
                  />
                  <ErrorMessage
                    name="phone"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>
              </div>

              {/* Service */}
              <div className="w-1/4">
                <Field
                  as="select"
                  name="service"
                  className="block w-full p-2 border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-0"
                >
                  <option value="" disabled>
                    Select Service
                  </option>
                  {servicesData.map((service, index) => (
                    <option key={index} value={service.link}>
                      {service.title}
                    </option>
                  ))}
                </Field>
                <ErrorMessage
                  name="service"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>

              {/* Submit Button */}
              <div className="w-1/6">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#fdec01] text-gray-700 font-semibold py-2 px-4 rounded-lg hover:bg-gray-800 hover:text-[#fdec01] disabled:opacity-50"
                >
                  {isSubmitting ? "Sending..." : "Send Request"}
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}
