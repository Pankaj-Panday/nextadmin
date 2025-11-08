import Image from "next/image";
import styles from "./transactions.module.css";

const transactions = [
  { id: 1, name: "John Doe", status: "pending", date: "15.11.2025", amount: "$3.00" },
  { id: 2, name: "Jane Smith", status: "done", date: "16.11.2025", amount: "$15.00" },
  { id: 3, name: "Alex Johnson", status: "cancelled", date: "17.11.2025", amount: "$8.00" },
  { id: 4, name: "Emily Brown", status: "pending", date: "18.11.2025", amount: "$12.00" },
];

export const Transactions = () => {
  return (
    <div className={`${styles.container}`}>
      <h2 className={`${styles.title}`}>Latest Transactions</h2>
      <table className={`${styles.table}`}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Status</th>
            <th>Date</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((t) => (
            <tr key={t.id}>
              <td>
                <div className={`${styles.user}`}>
                  <Image src="/noavatar.png" alt={t.name} width={40} height={40} className={styles.userImage} />
                  {t.name}
                </div>
              </td>
              <td>
                <span className={`${styles.status} ${styles[t.status]}`}>{t.status}</span>
              </td>
              <td>{t.date}</td>
              <td>{t.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
