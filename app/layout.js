import "./globals.css";
import Footer from "../components/Footer";
import NavbarWrapper from "@/components/NavbarWrapper";
import Marquee from "@/components/Marquee";

export default function RootLayout({ children, params }) {
  const locale = params?.locale || "en";
  return (
    <html lang={locale}>
      <body>
        <NavbarWrapper locale={locale} />
        <Marquee />
        {children}
        <Footer locale={locale} />
      </body>
    </html>
  );
}