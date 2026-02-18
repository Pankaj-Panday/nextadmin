"use client";

import { authenticate } from "@/app/lib/actions";
import styles from "./loginForm.module.css";
import { useFormState } from "react-dom";

export const LoginForm = () => {
  const [error, formAction] = useFormState(authenticate, null);

  return (
    <form action={formAction} className={styles.form}>
      <h1>Login</h1>
      <input type="text" placeholder="username" name="username" />
      <input type="password" placeholder="password" name="password" />
      <button>Login</button>

      {error && <p style={{ color: "red" }}>{error}</p>}
    </form>
  );
};
