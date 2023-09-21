import React from "react";
import { TextProps } from ".";

export default function TextUltraLargeBold({ children }: TextProps) {
  return (
    <h1 className="bg-red text-7xl font-bold tracking-wider max-sm:text-5xl">
      {children}
    </h1>
  );
}
