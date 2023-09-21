import React from "react";

interface TileProps {
  title: string;
  text: string;
}

export default function Tile({ title, text }: TileProps) {
  return (
    <div className="space-y-4 border-b-gray-300 border-b-[1px] pb-4 px-2">
      <h3 className="font-bold text-base uppercase tracking-wider relative before:content-[''] before:block before:w-[40px] before:h-[15px] before:rotate-[-45deg] before:-z-10 before:bg-app-orange before:absolute before:left-[-10px]">
        {title}
      </h3>
      <p>{text}</p>
    </div>
  );
}
