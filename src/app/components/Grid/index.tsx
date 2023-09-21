import React, { ReactNode } from "react";

interface GridProps {
  children: ReactNode;
}

export default function Grid({ children }: GridProps) {
  return (
    <ul className="grid gap-4 pt-4 grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1">
      {children}
    </ul>
  );
}
