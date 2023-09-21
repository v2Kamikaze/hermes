import React, { ReactNode } from "react";

interface ListProps {
  children: ReactNode;
}

export default function List({ children }: ListProps) {
  return <ul className="flex flex-col gap-4">{children}</ul>;
}
