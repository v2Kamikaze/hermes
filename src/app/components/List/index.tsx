import React, { ReactNode } from "react";

interface ListProps {
  children: ReactNode;
  direction?: "col" | "row";
}

export default function List({ children, direction = "col" }: ListProps) {
  return (
    <ul
      className={`flex ${direction == "col" ? "flex-col" : "flex-row"} gap-4`}
    >
      {children}
    </ul>
  );
}
