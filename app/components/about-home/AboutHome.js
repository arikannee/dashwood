import Image from "next/image";
import "./AboutHome.css";
export default function AboutHome() {
  return (
    <section id="about" className="about-home bg-gray-200">
      <div className="container lg flex flex-col-reverse sm:flex-row relative">
        <div className="div1 w-full sm:w-1/2 sm:drop-shadow-lg sm:rounded-lg overflow-hidden">
          <img
            src="/images/aboutBanner.jpg"
            alt="about banner"
            className="w-full"
          />
        </div>
        <div className="div2 bg-white w-full  sm:w-1/2 p-5 sm:p-10 sm:absolute lg:right-10 sm:top-10 bg-opacity-80 lg:bg-opacity-100 sm:drop-shadow-lg sm:rounded-lg sm:right-0 sm:-mr-5">
          <h5 className="text-[#e9d600] my-1 text-xl">About Us</h5>
          <h1 className="leading-tight text-gray-700 text-2xl sm:text-4xl">
            Your Trusted Partner <br /> for All Electrical Needs
          </h1>
          <p className="border-l-4 border-[#e9d600] pl-5 text-gray-800">
            {/* At DASHWOOD, we’re dedicated to providing top-tier electrical
            solutions for both homes and businesses. Backed by our 100%
            satisfaction guarantee, our expert electricians are ready to handle
            everything from outdoor security lighting installations to
            whole-home generators, ensuring you stay powered during any
            emergency. */}
            At DASHWOOD, we proudly serve Richmond, North Yorkshire, and
            surrounding areas within a one-hour drive, delivering top-tier
            electrical services for homes and businesses. Whether you’re in
            Richmond, Darlington, Catterick, or Northallerton, our expert
            electricians are here to assist you with:
          </p>
          <ul className="check-list space-y-3 py-2">
            <li>Comprehensive electrical design and layout</li>
            <li>Professional wiring, installations, and upgrades</li>
            <li>Reliable backup power solutions (generators)</li>
            <li>And much more—if it’s electrical, we can do it!</li>
          </ul>
          <div className="flex gap-5 justify-between items-center flex-wrap sm:flex-nowrap">
            <div className="flex gap-3 items-center w-full sm:w-4/6">
              <Image
                src="/images/Rob.jpg"
                alt="Rob"
                className="rounded-full"
                height={80}
                width={80}
              />
              <div>
                <h5 className="mb-0">Robert Dashwood </h5>
                <span>Owner, Electrician</span>
              </div>
            </div>
            <div className="w-full sm:w-2/6 text-center">
              <a
                className="btn text-gray-600 relative inline-flex items-center justify-start overflow-hidden font-medium transition-all bg-[#fdec01] rounded hover:bg-gray-600 group py-1.5 px-2.5"
                href="/about-more"
              >
                <span className="relative w-full font-bold text-left transition-colors duration-300 ease-in-out group-hover:text-[#fdec01]">
                  Read More
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
