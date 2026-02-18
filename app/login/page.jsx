import styles from "../ui/login/login.module.css";
import { LoginForm } from "../ui/login/loginForm/loginForm";

export default async function LoginPage() {
  return (
    <div className={styles.container}>
      <LoginForm />
    </div>
  );
}
