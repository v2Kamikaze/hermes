import React, { ReactNode } from "react";

interface AppBarRootProps {
  children?: ReactNode;
}

export default function AppBarRoot({ children }: AppBarRootProps) {
  return (
    <nav className="shadow-md">
      <div className="flex items-center justify-between max-w-7xl mx-auto px-9 py-6">
        {children}
      </div>
    </nav>
  );
}
