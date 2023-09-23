import AboutUs from "./components/Section/AboutUs";
import ContactUs from "./components/Section/ContactUs";
import Hero from "./components/Section/Hero";
import WhyUs from "./components/Section/WhyUs";
import { AppBar } from "./components/AppBar";
import Logo from "./components/Logo";

export default function Home() {
  return (
    <main>
      <AppBar.Root>
        <Logo />
        <AppBar.Actions>
          <AppBar.Action text="Início" href="/"/>
          <AppBar.Action text="Sobre nós" href="#about-us"/>
          <AppBar.Action text="Contate-nos" href="#contact-us"/>
          <AppBar.Action text="Por que nós?" href="#why-us"/>
        </AppBar.Actions>
      </AppBar.Root>
      <Hero />
      <WhyUs />
      <AboutUs />
      <ContactUs />
    </main>
  );
}
