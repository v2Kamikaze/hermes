"use client";

import {
  Cross1Icon as CloseMenuIcon,
  TextAlignJustifyIcon as MenuIcon,
} from "@radix-ui/react-icons";
import React, { ReactNode, useState } from "react";

interface AppBarActionsListProps {
  children: ReactNode;
}

export default function AppBarActionsList({
  children,
}: AppBarActionsListProps) {
  const [selected, setSelected] = useState(false);

  return (
    <div>
      <ul className="flex items-center gap-2 justify-center max-lg:hidden">
        {children}
      </ul>

      <div>
        {selected ? (
          <CloseMenuIcon
            onClick={() => setSelected((oldState) => !oldState)}
            className="w-10 h-10 lg:hidden"
          />
        ) : (
          <MenuIcon
            onClick={() => setSelected((oldState) => !oldState)}
            className="w-10 h-10 lg:hidden"
          />
        )}

        {selected && (
          <ul className="flex flex-col items-center gap-2 justify-center w-screen animate-slide-from-top absolute right-0 bg-white p-2 shadow-md lg:hidden">
            {children}
          </ul>
        )}
      </div>
    </div>
  );
}
