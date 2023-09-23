import React from "react";
import Image from "next/image";
import hermesLogo from "../../../../public/hermes-logo.png";

export default function Logo() {
  return (<div>
    <a href="/">
      <Image src={hermesLogo} alt={""} height="120" width="120" className="w-auto h-auto"/>
    </a>
  </div>
  );
}
