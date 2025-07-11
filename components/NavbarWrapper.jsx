import { getDictionary } from "../app/dictionaries";
import Navbar from "./Navbar";

export default async function NavbarWrapper({ locale = "en" }) {
  const dict = await getDictionary(locale);

  return <Navbar locale={locale} dict={dict} />;
}
