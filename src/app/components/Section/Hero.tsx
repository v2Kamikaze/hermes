import React from "react";
import Image from "next/image";
import { Text } from "../Text";
import { Button } from "../Button";

import { ArrowRightIcon } from "@radix-ui/react-icons";

import dataChartPicture from "../../../../public/data-chart.svg";

export default function Hero() {
  return (
    <section className="grid items-center justify-center grid-cols-2 px-9 pt-9 pb-16 max-w-7xl mx-auto gap-4 max-md:grid-cols-1 max-md:pb-9">
      <div className="space-y-4">
        <Text.UltraLargeBold>
          Dê boas vindas ao <Text.Span>Hermes Bank</Text.Span>!
        </Text.UltraLargeBold>

        <Text.LargeBold>
          Venha fazer parte dessa revolução financeira conosco e transforme a
          maneira como você lida com seu dinheiro.
        </Text.LargeBold>

        <Button.Root>
          <Text.BaseBold>Crie sua conta agora</Text.BaseBold>
          <ArrowRightIcon className="w-6 h-6 stroke-white" />
        </Button.Root>
      </div>
      <Image
        src={dataChartPicture}
        alt={"Uma ilustração de pessoas com fotos de gráficos nas mãos"}
        className="w-full"
      />
    </section>
  );
}
