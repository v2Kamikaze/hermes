import React from "react";
import { TextProps } from ".";

export default function TextBaseBold({ children }: TextProps) {
  return <p className="text-base font-bold">{children}</p>;
}
