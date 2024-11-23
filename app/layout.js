import "./globals.css";
import { Montserrat } from "next/font/google";
import Header from "./components/header/Header";

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
      <body className={`${montserrat.className} antialiased`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
