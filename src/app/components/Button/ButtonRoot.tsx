"use client";
import React, { ComponentProps, ReactNode } from "react";

interface ButtonRootProps extends ComponentProps<"button"> {
  className?: string;
  children?: ReactNode;
}

export default function ButtonRoot({ className, children }: ButtonRootProps) {
  return (
    <button
      className={`flex items-center justify-between gap-4 bg-app-orange text-white p-4 rounded-lg hover:bg-app-orange/90 w-full ${className}`}
    >
      {children}
    </button>
  );
}
