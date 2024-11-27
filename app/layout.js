import "./globals.css";
import { Montserrat } from "next/font/google";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Script from "next/script";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "DASHWOOD - Electrical Services",
  description:
    "Efficient, safe, and affordable electrical services for residential and commercial properties in Richmond, North Yorkshire, and surrounding areas within a one-hour drive. At DASHWOOD, we specialize in installations, repairs, and maintenance, ensuring tailored solutions for your needs. Trust our expert electricians for quality workmanship and exceptional service every time.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
          <head>
        {/* Google Analytics */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-0WKQS7SQYZ"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-0WKQS7SQYZ');
          `}
        </Script>
        
      </head>
      <body className={`${montserrat.className} antialiased`}>
        <Header />
        {children}
        <Footer/>
      </body>
    </html>
  );
}
