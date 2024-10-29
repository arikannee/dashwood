// "use client";
// import { useEffect, useState, useRef } from "react";

// export default function ContactHome() {
//   const [isLightImage, setIsLightImage] = useState(false);
//   const sectionRef = useRef(null);

//   // Set up an intersection observer to detect when the section is in view
//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         // Toggle image based on whether the section is in view
//         setIsLightImage(entry.isIntersecting);
//       },
//       { threshold: 0.5 } // Trigger when at least 50% of the section is visible
//     );

//     if (sectionRef.current) {
//       observer.observe(sectionRef.current);
//     }

//     return () => {
//       if (sectionRef.current) {
//         observer.unobserve(sectionRef.current);
//       }
//     };
//   }, []);

//   return (
//     <section ref={sectionRef} className="bg-gray-800">
//       <div className="text-center pb-5">
//         <h1 className="text-lg m-1 text-[#e9d600] font-medium">CONTACT US</h1>
//         <h2 className="text-3xl text-white leading-tight">
//           Reach Out for Custom Solutions
//         </h2>
//       </div>

//       <div className="flex justify-center items-center">
//         <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 px-5 lg:px-0">
//           {/* Contact Form */}
//           <div className="bg-white p-10 rounded-lg shadow-lg">
//             <form>
//               <div className="mb-4">
//                 <label className="block text-gray-700">Name</label>
//                 <input
//                   type="text"
//                   className="w-full px-4 py-2 border rounded-md"
//                 />
//               </div>
//               <div className="mb-4">
//                 <label className="block text-gray-700">Email</label>
//                 <input
//                   type="email"
//                   className="w-full px-4 py-2 border rounded-md"
//                 />
//               </div>
//               <div className="mb-4">
//                 <label className="block text-gray-700">Message</label>
//                 <textarea
//                   className="w-full px-4 py-2 border rounded-md"
//                   rows="4"
//                 ></textarea>
//               </div>
//               <button
//                 type="submit"
//                 className="w-full bg-[#e9d600] text-gray-800 font-bold py-2 rounded-md hover:bg-gray-700 hover:text-white transition-colors"
//               >
//                 Send Message
//               </button>
//             </form>
//           </div>

//           {/* Image with Scroll-Triggered Switching */}
//           <div className="relative h-[400px] lg:h-auto flex items-center justify-center">
//             <img
//               src={
//                 isLightImage
//                   ? "/images/yellow-room-light.jpg"
//                   : "/images/yellow-room-dark.jpg"
//               }
//               alt="Background with scroll-triggered switching"
//               className="rounded-lg transition-opacity duration-1000"
//             />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";
import { useEffect, useState, useRef } from "react";

export default function ContactHome() {
  const [isLightImage, setIsLightImage] = useState(false);
  const sectionRef = useRef(null);

  // Set up an intersection observer to detect when the section is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsLightImage(entry.isIntersecting);
      },
      {
        threshold: 0.6, // Increase threshold for more reliable visibility
        rootMargin: "-10% 0px", // Adjust root margin for earlier triggering
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="bg-gray-800">
      <div className="text-center pb-5">
        <h1 className="text-lg m-1 text-[#e9d600] font-medium">CONTACT US</h1>
        <h2 className="text-3xl text-white leading-tight">
          Reach Out for Custom Solutions
        </h2>
      </div>

      <div className="flex justify-center items-center">
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 px-5 lg:px-0">
          {/* Contact Form */}
          <div className="bg-white p-10 rounded-lg shadow-lg">
            <form>
              <div className="mb-4">
                <label className="block text-gray-700">Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border rounded-md"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-2 border rounded-md"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Phone</label>
                <input
                  type="tel"
                  className="w-full px-4 py-2 border rounded-md"
                  inputMode="numeric" // Ensures numeric keypad on mobile
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Message</label>
                <textarea
                  className="w-full px-4 py-2 border rounded-md"
                  rows="4"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-[#e9d600] text-gray-800 font-bold py-2 rounded-md hover:bg-gray-700 hover:text-white transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Image with Scroll-Triggered Switching */}
          <div className="relative h-[400px] lg:h-auto flex items-center justify-center">
            <img
              src={
                isLightImage
                  ? "/images/yellow-room-light.jpg"
                  : "/images/yellow-room-dark.jpg"
              }
              alt="Background with scroll-triggered switching"
              className="rounded-lg transition-opacity duration-1000"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
