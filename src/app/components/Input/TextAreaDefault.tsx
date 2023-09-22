import React, { ComponentProps } from "react";

export default function TextAreaDefault({
  id,
  placeholder,
  rows = 5,
}: ComponentProps<"textarea">) {
  return (
    <textarea
      id={id}
      placeholder={placeholder}
      required
      className="text-base p-4 border-gray-300 border rounded-md resize-none placeholder-black focus:outline-none focus:border-app-orange"
      rows={rows}
    ></textarea>
  );
}
