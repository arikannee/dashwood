import "./globals.css";
import { Montserrat } from "next/font/google";
import Header from "./components/header/Header";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "DASHWOOD",
  description: "Electrical Services",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} antialiased`}>
        <Header/>
        {children}</body>
    </html>
  );
}
