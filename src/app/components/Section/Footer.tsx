import React from "react";
import { Text } from "../Text";

import { SocialIcon } from 'react-social-icons';

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
    "https://instagram.com",
    "https://facebook.com",
    "https://linkedin.com",
    "https://twitter.com",
    "https://youtube.com",
  ];

  return (
    <footer className="shadow-t-md">
      <div className="max-w-7xl mx-auto px-9 py-6">
        <div className="flex items-center justify-between gap-4 max-md:flex-col">
          <div>
            <Text.BaseBold>Redes sociais</Text.BaseBold>
            <List direction="row">
              {logos.map((url, idx) => (
                <SocialIcon key={idx} className="w-6 h-6" url={url} />
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

          <div className="flex items-center justify-center pb-4">

            <List>
            <Text.BaseBold>Ouvidoria</Text.BaseBold>
              <Text.BaseBold>0800 999 9999</Text.BaseBold>
              <Text.BaseBold>ouvidoria@hermesbank.com.br</Text.BaseBold>
              <Text.BaseBold>
                Atendimento das 9h às 18h (dias úteis)
              </Text.BaseBold>
            </List>
          </div>
        </div>
        <Text.BaseBold className="pt-4 text-center border-b-gray-300 border-t-[1px]">
          Copyright © Hermes Bank. Todos os direitos reservados.
        </Text.BaseBold>
      </div>
    </footer>
  );
}
