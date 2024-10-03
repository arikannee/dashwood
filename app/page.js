// import "./Home.css"
// export default function Home() {
//   return (
//     <div className="relative flex justify-end w-full overflow-hidden">
//       <img
//         src="/images/banner.jpg"
//         alt="banner"
//         className="max-w-150 sm:w-full"
//       />
//       <div className="flex container lg absolute inset-0 items-center">
//         <div className=" flex-auto flex-col justify-center justify-items-start text-white pb-5 text-shadow-lg lg:text-shadow-none">
//           <h1 className="banner-text text-white font-semibold  text-3xl md:text-5xl sm:text-4xl">
//             Efficient, Safe, <br />
//             and Affordable
//             <br /> <span className="yellow">Electrical Services</span>
//           </h1>
//         </div>
//         <div className="flex-auto"></div>
//         <div className="flex-auto"></div>
//       </div>
//     </div>
//   );
// }
export default function Home() {
  return (
    <div className="relative flex justify-end w-full overflow-hidden">
      <img
        src="/images/banner.jpg"
        alt="banner"
        className="max-w-150 sm:w-full"
      />
      <div className="flex container lg absolute inset-0 items-center">
        <div className="flex-auto flex-col justify-center justify-items-start text-white pb-5 text-shadow-lg lg:text-shadow-none">
          <h1 className="banner-text text-white font-semibold text-3xl md:text-5xl sm:text-4xl">
            {/* Text sliding down */}
            <span className="block animate-slide-down leading-snug">
              Efficient, Safe, <br />
              and Affordable
            </span>
            {/* Text sliding up */}
            <span className="block animate-slide-up yellow pt-2">
              Electrical Services
            </span>
          </h1>
        </div>
        <div className="flex-auto"></div>
        <div className="flex-auto"></div>
      </div>
    </div>
  );
}
