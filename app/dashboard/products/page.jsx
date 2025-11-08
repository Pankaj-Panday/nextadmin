import { Pagination } from "@/app/ui/dashboard/pagination/pagination";
import styles from "@/app/ui/dashboard/products/products.module.css";
import { Search } from "@/app/ui/dashboard/search/search";
import Image from "next/image";
import Link from "next/link";

export default function ProductsPage () {
  return (
    <div className={`${styles.container}`}>
      <div className={`${styles.top}`}>
        <Search placeholder={"Search for a product..."} />
        <Link href="/dashboard/products/add">
          <button className={`${styles.addButton}`}>Add New</button>
        </Link>
      </div>

      <table className={`${styles.table}`}>
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Price</th>
            <th>Created At</th>
            <th>Stock</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>
              <div className={`${styles.product}`}>
                <Image src={`/noproduct.jpg`} alt="" width={40} height={40} className={`${styles.productImage}`} />
                Iphone
              </div>
            </td>
            <td>Desc</td>
            <td>$551</td>
            <td>14.11.2025</td>
            <td>24</td>
            <td>
              <div className={`${styles.buttons}`}>
                <Link href="/dashboard/products/iphone">
                  <button className={`${styles.button} ${styles.view}`}>View</button>
                </Link>
                <button className={`${styles.button} ${styles.delete}`}>Delete</button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>

      <Pagination />
    </div>
  );
}