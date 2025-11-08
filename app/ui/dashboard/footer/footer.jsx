import styles from "./footer.module.css";

export const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>Pankaj Panday</div>
      <div className={styles.text}>© All rights reserved.</div>
    </div>
  );
};
