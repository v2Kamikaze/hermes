import React from "react";
import { Text } from "../Text";

import { SocialIcon } from "react-social-icons";

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
    <footer className="shadow-t-md animate-slide-from-bottom-slow">
      <div className="max-w-7xl mx-auto px-9 py-6">
        <div className="grid items-center pb-4 justify-between max-lg:justify-center gap-4 grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1">
          <div className="flex items-center flex-col gap-4">
            <Text.BaseBold>Redes sociais</Text.BaseBold>
            <List direction="row">
              {logos.map((url, idx) => (
                <SocialIcon key={idx} url={url}  className="max-w- max-w-[80px]" />
              ))}
            </List>
          </div>

          <div className="flex items-center flex-col pb-4 gap-4">
            <Text.BaseBold>Baixe nosso App!</Text.BaseBold>
            <List direction="row">
              <Image src={appStorePicture} alt={""} className="max-w- max-w-[100px]" />
              <Image src={googlePlayPicture} alt={""} className="max-w- max-w-[100px]" />
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
