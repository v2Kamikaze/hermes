import React from "react";

interface AppBarActionProps {
  text: string;
  href?: string;
}

export default function AppBarAction({ text, href = "#" }: AppBarActionProps) {
  return (
    <li className="px-4 py-1 text-lg text-center w-auto hover:bg-app-orange/70 hover:rounded-md">
      <a href={href}>{text}</a>
    </li>
  );
}
