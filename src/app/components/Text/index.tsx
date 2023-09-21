import { ReactNode } from "react";
import TextBaseBold from "./TextBaseBold";
import TextUltraLargeBold from "./TextUltraLargeBold";
import TextSpan from "./TextSpan";
import TextLargeBold from "./TextLargeBold";
import TextExtraLargeBold from "./TextExtraLargeBold";

export interface TextProps {
  children: ReactNode;
}

export const Text = {
  Span: TextSpan,
  BaseBold: TextBaseBold,
  LargeBold: TextLargeBold,
  ExtraLargeBold: TextExtraLargeBold,
  UltraLargeBold: TextUltraLargeBold,
};
