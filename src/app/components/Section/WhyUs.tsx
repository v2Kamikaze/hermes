import { whyUsMock } from "@/app/data/why-us-mock";
import React from "react";
import { Text } from "../Text";
import Grid from "../Grid";
import Tile from "../Tile";

export default function WhyUs() {
  return (
    <section className="px-9 pt-9 pb-16 space-y-4 max-w-7xl mx-auto max-md:grid-cols-1 max-md:pb-9">
      <Text.ExtraLargeBold>
        Por que escolher o <Text.Span>Hermes Bank</Text.Span>?
      </Text.ExtraLargeBold>

      <Grid>
        {whyUsMock.map(({ title, text }, idx) => (
          <Tile key={idx} title={title} text={text} />
        ))}
      </Grid>
    </section>
  );
}
