import React from "react";
import { TextProps } from ".";

export default function TextSpan({ children }: TextProps) {
  return <span className="text-app-orange">{children}</span>;
}
