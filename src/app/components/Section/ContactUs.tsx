import React from "react";
import { Text } from "../Text";
import Image from "next/image";

import contactUsPicture from "../../../../public/contact-us.svg";
import { Button } from "../Button";
import { EnvelopeClosedIcon } from "@radix-ui/react-icons";

export default function ContactUs() {
  return (
    <section className="px-9 py-16 space-y-4 max-w-7xl mx-auto">
      <Text.ExtraLargeBold>
        Entre em contato com <Text.Span>Hermes Bank</Text.Span>
      </Text.ExtraLargeBold>
      <Text.BaseBold>
        Estamos sempre aqui para ouvir você e ajudar com todas as suas
        necessidades bancárias. Sinta-se à vontade para entrar em contato
        conosco a qualquer momento. Sua satisfação é a nossa prioridade.
      </Text.BaseBold>
      <div className="grid items-center gap-4 pt-4 justify-center grid-cols-[3fr_2fr] max-md:grid-cols-1">
        <form className="flex flex-col gap-4">
          <input
            id="name"
            placeholder="Seu nome"
            required
            className="block text-base p-4 border-gray-300 border rounded-md placeholder-black focus:outline-none focus:border-app-orange"
            type="text"
          />
          <input
            id="email"
            placeholder="Seu melhor e-mail"
            required
            className="block text-base p-4 border-gray-300 border rounded-md placeholder-black focus:outline-none focus:border-app-orange"
            type="email"
          />
          <textarea
            placeholder="Sua mensagem"
            required
            className="text-base p-4 border-gray-300 border rounded-md resize-none placeholder-black focus:outline-none focus:border-app-orange"
            rows={5}
          ></textarea>
          <Button.Root>
            <Text.BaseBold>Enviar</Text.BaseBold>
            <EnvelopeClosedIcon className="w-6 h-6 stroke-white" />
          </Button.Root>
        </form>
        <Image className="max-md:hidden" src={contactUsPicture} alt="" />
      </div>
    </section>
  );
}
