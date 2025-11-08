import { fetchUsers } from "@/app/lib/data";
import { Pagination } from "@/app/ui/dashboard/pagination/pagination";
import { Search } from "@/app/ui/dashboard/search/search";
import styles from "@/app/ui/dashboard/users/users.module.css";
import Image from "next/image";
import Link from "next/link";

export default async function UsersPage({ searchParams }) {
  const q = searchParams.q || "";
  const users = await fetchUsers(q);
  
  return (
    <div className={`${styles.container}`}>
      <div className={`${styles.top}`}>
        <Search placeholder={"Search for a user..."} />
        <Link href="/dashboard/users/add">
          <button className={`${styles.addButton}`}>Add New</button>
        </Link>
      </div>

      <table className={`${styles.table}`}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Created At</th>
            <th>Role</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {users.map((user) => (
            <tr key={user._id}>
              <td>
                <div className={`${styles.user}`}>
                  <Image
                    src={user.img || "/noavatar.png"}
                    alt=""
                    width={40}
                    height={40}
                    className={`${styles.userImage}`}
                  />
                  {user.username}
                </div>
              </td>
              <td>{user.email}</td>
              <td>
                {user.createdAt
                  ? new Date(user.createdAt).toLocaleString("en-IN", {
                      day: "2-digit",
                      month: "short",
                      year: "numeric",
                      hour: "2-digit",
                      minute: "2-digit",
                    })
                  : "N/A"}
              </td>
              <td>{user.isAdmin ? "Admin" : "User"}</td>
              <td>{user.isActive ? "Active" : "Inactive"}</td>
              <td>
                <div className={`${styles.buttons}`}>
                  <Link href={`/dashboard/users/${user._id}`}>
                    <button className={`${styles.button} ${styles.view}`}>View</button>
                  </Link>
                  <button className={`${styles.button} ${styles.delete}`}>Delete</button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <Pagination />
    </div>
  );
}
