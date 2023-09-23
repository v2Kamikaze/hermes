import React from "react";
import { Text } from "../Text";

import List from "../List";
import Image from "next/image";
import appStorePicture from "../../../../public/app-store.svg";
import googlePlayPicture from "../../../../public/google-play.svg";

import instagramLogoPicture from "../../../../public/instagram-logo.svg";
import facebookLogoPicture from "../../../../public/facebook-logo.svg";
import linkedinLogoPicture from "../../../../public/linkedin-logo.svg";
import twitterLogoPicture from "../../../../public/twitter-logo.svg";
import youtubeLogoPicture from "../../../../public/youtube-logo.svg";

export default function Footer() {
  const logos = [
    instagramLogoPicture,
    facebookLogoPicture,
    linkedinLogoPicture,
    twitterLogoPicture,
    youtubeLogoPicture,
  ];

  return (
    <footer className="shadow-t-md">
      <div className="max-w-7xl mx-auto px-9 py-6">
        <div className="flex items-center justify-between gap-4">
          <div>
            <Text.BaseBold>Redes sociais</Text.BaseBold>
            <List direction="row">
              {logos.map((logo) => (
                <Image src={logo} alt="" className="w-6 h-6 stroke-black" key={logo}/>
              ))}
            </List>
          </div>

          <div>
            <Text.BaseBold>Baixe nosso App!</Text.BaseBold>
            <List direction="row">
              <Image src={appStorePicture} alt={""} />
              <Image src={googlePlayPicture} alt={""} />
            </List>
          </div>

          <div>
            <Text.BaseBold>Ouvidoria</Text.BaseBold>
            <List>
              <Text.BaseBold>0800 999 9999</Text.BaseBold>
              <Text.BaseBold>ouvidoria@hermesbank.com.br</Text.BaseBold>
              <Text.BaseBold>
                Atendimento das 9h às 18h (dias úteis)
              </Text.BaseBold>
            </List>
          </div>
        </div>
        <Text.BaseBold className="text-center">
          Copyright © Hermes Bank. Todos os direitos reservados.
        </Text.BaseBold>
      </div>
    </footer>
  );
}
