"use client";
import { useEffect, useState, useRef } from "react";
import emailjs from "emailjs-com";

export default function ContactHome() {
  const [isLightImage, setIsLightImage] = useState(false);
  const sectionRef = useRef(null);

  // Set up an intersection observer to detect when the section is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Toggle image based on whether the section is in view
        setIsLightImage(entry.isIntersecting);
      },
      { threshold: 0.5 } // Trigger when at least 50% of the section is visible
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      // Only unobserve if sectionRef.current exists
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  // Function to handle form submission
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "YOUR_SERVICE_ID", // Replace with your service ID
        "YOUR_TEMPLATE_ID", // Replace with your template ID
        e.target,
        "YOUR_USER_ID" // Replace with your user ID
      )
      .then(
        (result) => {
          alert("Message sent successfully!");
          e.target.reset(); // Clear the form on success
        },
        (error) => {
          alert("Failed to send the message, please try again.");
        }
      );
  };

  return (
    <section ref={sectionRef} className="bg-gray-800">
      <div className="container lg">
        <div className="text-center pb-5">
          <h1 className="text-lg m-1 text-[#e9d600] font-medium">CONTACT US</h1>
          <h2 className="text-3xl text-white leading-tight">
            Reach Out for Custom Solutions
          </h2>
        </div>

        <div className="flex justify-center items-center">
          <div className="mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:px-0 relative">
            {/* Contact Form */}
            <div className="bg-white p-5 sm:p-10 sm:pb-6 rounded-lg shadow-lg relative">
              <form onSubmit={sendEmail}>
                <div className="mb-4">
                  <label className="block text-gray-700">Name *</label>
                  <input
                    type="text"
                    name="user_name"
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-0"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700">Email *</label>
                  <input
                    type="email"
                    name="user_email"
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-0"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700">Phone</label>
                  <input
                    type="tel"
                    name="user_phone"
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-0"
                    inputMode="numeric"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700">Message *</label>
                  <textarea
                    name="message"
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-0"
                    rows="4"
                    required
                  ></textarea>
                </div>
                <div className="flex justify-center">
                  <button
                    type="submit"
                    className="btn text-gray-600 relative inline-flex items-center justify-center overflow-hidden transition-all rounded-lg hover:bg-[#fdec01] group py-1.5 px-2.5 bg-[#fdec01] font-semibold"
                  >
                    <span className="w-full h-48 rounded bg-gray-800 absolute bottom-0 left-0 translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                    <span className="relative w-full text-left transition-colors duration-300 ease-in-out group-hover:text-[#fdec01]">
                      Send Message
                    </span>
                  </button>
                </div>
              </form>
            </div>

            {/* Image with Scroll-Triggered Switching */}
            <div className="relative h-full flex items-center justify-center ">
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
      </div>
    </section>
  );
}
