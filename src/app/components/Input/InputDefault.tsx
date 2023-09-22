import React, { ComponentProps } from "react";

export default function InputDefault({
  id,
  placeholder,
  type,
}: ComponentProps<"input">) {
  return (
    <input
      id={id}
      placeholder={placeholder}
      required
      className="block text-base p-4 border-gray-300 border rounded-md placeholder-black focus:outline-none focus:border-app-orange"
      type={type}
    />
  );
}
