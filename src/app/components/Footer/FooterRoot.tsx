import React, { ReactNode } from "react";

interface FooterRootProps {
  children?: ReactNode;
}

export default function FooterRoot({ children }: FooterRootProps) {
  return (
    <footer className="shadow-t-md">
      <div className="flex items-center justify-between max-w-7xl mx-auto px-9 py-6">
        {children}
      </div>
    </footer>
  );
}
