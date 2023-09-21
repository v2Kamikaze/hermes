import React from "react";

import { Text } from "../Text";
import Image from "next/image";

import personPicture from "../../../../public/person.svg";
import List from "../List";
import { aboutUsMock } from "@/app/data/about-us-mock";
import Tile from "../Tile";

export default function AboutUs() {
  return (
    <section className="px-9 space-y-4 max-w-7xl mx-auto">
      <Text.ExtraLargeBold>
        Sobre o <Text.Span>Hermes Bank</Text.Span>{" "}
      </Text.ExtraLargeBold>
      <Text.BaseBold>
        No <Text.Span>Hermes Bank</Text.Span>, nossa jornada é impulsionada por
        uma visão ousada: redefinir a experiência bancária na América Latina.
        Desde nossa fundação, temos trabalhado incansavelmente para criar um
        banco que coloque você, nosso cliente, no centro de tudo o que fazemos.
      </Text.BaseBold>
      <div className="grid items-center justify-center gap-4 grid-cols-[2fr_3fr] pt-4 max-md:grid-cols-1">
        <Image src={personPicture} alt={""} className="w-full" />
        <List>
          {aboutUsMock.map(({ title, text }, idx) => (
            <Tile key={idx} title={title} text={text} />
          ))}
        </List>
      </div>
    </section>
  );
}
