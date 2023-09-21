import { AppBar } from "./components/AppBar";
import { Footer } from "./components/Footer";
import Logo from "./components/Logo";
import AboutUs from "./components/Section/AboutUs";
import ContactUs from "./components/Section/ContactUs";
import Hero from "./components/Section/Hero";
import WhyUs from "./components/Section/WhyUs";
import { Text } from "./components/Text";

export default function Home() {
  return (
    <main>
      <AppBar.Root>
        <Logo />
        <AppBar.Actions>
          <AppBar.Action text="Início" />
          <AppBar.Action text="Sobre nós" />
          <AppBar.Action text="Contate-nos" />
          <AppBar.Action text="Por que nós?" />
        </AppBar.Actions>
      </AppBar.Root>

      <Hero />
      <WhyUs />
      <AboutUs />
      <ContactUs />
      <Footer.Root>
        <Text.BaseBold>
          Copyright © Hermes Bank. Todos os direitos reservados.
        </Text.BaseBold>{" "}
      </Footer.Root>
    </main>
  );
}
