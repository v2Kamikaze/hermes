import React from "react";
import { TextProps } from ".";

export default function TextLargeBold({ children }: TextProps) {
  return <p className="text-lg font-bold">{children}</p>;
}
