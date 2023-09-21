import React from "react";
import { TextProps } from ".";

export default function TextExtraLargeBold({ children }: TextProps) {
  return <h2 className="font-bold text-3xl">{children}</h2>;
}
