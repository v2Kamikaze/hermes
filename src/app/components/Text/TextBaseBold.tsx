import React from "react";
import { TextProps } from ".";

export default function TextBaseBold({ children, className }: TextProps) {
  return <p className={`text-base font-bold ${className}`}>{children}</p>;
}
