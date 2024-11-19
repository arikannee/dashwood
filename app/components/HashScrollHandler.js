// "use client";

// import { useEffect } from "react";

// export default function HashScrollHandler() {
//   useEffect(() => {
//     const adjustScrollPosition = () => {
//       if (window.location.hash) {
//         const targetId = window.location.hash.substring(1);
//         const element = document.getElementById(targetId);

//         if (element) {
//           const yOffset = -60; // Adjust by -60px
//           const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;

//           window.scrollTo({ top: y, behavior: "smooth" });
//         }
//       }
//     };

//     // Adjust scroll on initial load if there's a hash in the URL
//     adjustScrollPosition();

//     // Handle hash navigation changes
//     const handleHashChange = () => adjustScrollPosition();
//     window.addEventListener("hashchange", handleHashChange);

//     // Cleanup on unmount
//     return () => window.removeEventListener("hashchange", handleHashChange);
//   }, []);

//   return null; // This component doesn't render anything visually
// }

"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";

export default function HashScrollHandler() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const handleHashNavigation = () => {
      const hash = window.location.hash;

      if (hash) {
        const targetId = hash.substring(1); // Extract the ID after #
        const element = document.getElementById(targetId);

        if (element) {
          const yOffset = -60; // Offset for fixed navbar
          const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;

          window.scrollTo({ top: y, behavior: "smooth" });
        }
      }
    };

    // Adjust on initial render (if there's a hash)
    handleHashNavigation();

    // Handle hashchange event
    const handleHashChange = () => handleHashNavigation();
    window.addEventListener("hashchange", handleHashChange);

    // Clean up event listener on unmount
    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, [pathname, searchParams]); // Re-run when navigating to a different page or hash changes

  return null;
}
