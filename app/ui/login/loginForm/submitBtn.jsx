"use client";

import { useFormStatus } from "react-dom";

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button disabled={pending}>{pending ? "Logging in..." : "Login"}</button>
  );
}

export default SubmitButton;
