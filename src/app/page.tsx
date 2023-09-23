import AboutUs from "./components/Section/AboutUs";
import ContactUs from "./components/Section/ContactUs";
import Hero from "./components/Section/Hero";
import WhyUs from "./components/Section/WhyUs";

export default function Home() {
  return (
    <main>
      <Hero />
      <WhyUs />
      <AboutUs />
      <ContactUs />
    </main>
  );
}
