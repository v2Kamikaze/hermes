"use client";
import { useState } from "react";
import { Text } from "../components/Text";
import Image from "next/image";
import contactUsPicture from "../../../public/contact-us.svg";
import { Button } from "../components/Button";
import { PaperPlaneIcon, SymbolIcon } from "@radix-ui/react-icons";
import { Input } from "../components/Input";
import { mask, unMask } from "remask";
import { AppBar } from "../components/AppBar";
import Logo from "../components/Logo";

export default function Home() {
  const [cpf, setCpf] = useState("");
  const [phone, setPhone] = useState("");
  const [icon, setIcon] = useState(
    <PaperPlaneIcon className="w-6 h-6 stroke-white" />
  );

  function handleClick() {
    setIcon(<SymbolIcon className="w-6 h-6 animate-spin stroke-white" />);
  }

  return (
    <>
      <AppBar.Root>
        <Logo />
        <AppBar.Actions>
          <AppBar.Action text="<-- Voltar ao Início" href="/" />
        </AppBar.Actions>
      </AppBar.Root>

      <section className="px-9 py-16 space-y-4 max-w-7xl mx-auto">
        <Text.ExtraLargeBold>
          Faça parte da <Text.Span>maior revolução financeira</Text.Span> dos
          últimos tempos!
        </Text.ExtraLargeBold>
        <Text.BaseBold>
          Com apenas alguns dados você já estará um passo de mudar a forma como
          você lida com seu dinheiro!
        </Text.BaseBold>
        <div className="grid items-center gap-4 pt-4 justify-center grid-cols-[3fr_2fr] max-md:grid-cols-1">
          <form className="flex flex-col gap-4">
            <Text.BaseBold>Seu nome:</Text.BaseBold>
            <Input.Default
              id="name"
              placeholder="Herbert Viana"
              type="text"
              required
            />

            <Text.BaseBold>CPF:</Text.BaseBold>
            <input
              className="block text-base p-4 border-gray-300 border rounded-md placeholder-black focus:outline-none focus:border-app-orange"
              id="cpf"
              placeholder="xxx.xxx.xxx-xx"
              type="text"
              value={cpf}
              onChange={(e) => setCpf(mask(e.target.value, "999.999.999-99"))}
              required
            />

            <Text.BaseBold>Data de nascimento:</Text.BaseBold>
            <Input.Default id="birthdate" type="date" required />

            <Text.BaseBold>Email:</Text.BaseBold>
            <Input.Default
              id="email"
              placeholder="herbertviana@email.com"
              type="email"
              required
            />

            <Text.BaseBold>Seu número de telefone:</Text.BaseBold>
            <input
              className="block text-base p-4 border-gray-300 border rounded-md placeholder-black focus:outline-none focus:border-app-orange"
              id="phone"
              placeholder="(99) 99999-9999"
              type="text"
              value={phone}
              onChange={(e) =>
                setPhone(mask(e.target.value, "(99) 99999-9999"))
              }
              required
            />

            <button
              className="flex items-center justify-between gap-4 bg-app-orange text-white p-4 rounded-lg hover:bg-app-orange/90 w-full"
              onClick={handleClick}
            >
              <Text.BaseBold>Cadastrar</Text.BaseBold>
              {icon}
            </button>

            {/*<Button.Root>
            <Text.BaseBold>Cadastrar</Text.BaseBold>
            {button}
            <span className="w-6 h-6 animate-spin rounded-full border-white border-4 border-t-0"/>
          </Button.Root> */}
          </form>
          <Image className="max-md:hidden" src={contactUsPicture} alt="" />
        </div>
      </section>
    </>
  );
}
