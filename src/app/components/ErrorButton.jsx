"use client";

import { useTransition } from "react";

export default function ErrorButton() {
  const [pending, startTransition] = useTransition();

  const handleClick = () =>
    startTransition(() => {
      throw new Error("Exception");
    });

  return (
    <button type="button" onClick={handleClick}>
      Click me
    </button>
  );
}
