"use client";

import styles from "./pagination.module.css";
import { usePathname, useSearchParams, useRouter } from "next/navigation";

export const Pagination = ({ totalCount }) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  const page = searchParams.get("page") ? parseInt(searchParams.get("page")) : 1;

  const params = new URLSearchParams(searchParams.toString());
  const ITEM_PER_PAGE = 2;

  const hasPrev = ITEM_PER_PAGE * (parseInt(page) - 1) > 0;
  const hasNext = ITEM_PER_PAGE * (parseInt(page) - 1) + ITEM_PER_PAGE < totalCount;

  const handleChangePage = (direction) => {
    if (direction === "next" && hasNext) {
      params.set("page", (page + 1).toString());
    } else if (direction === "prev" && hasPrev) {
      params.set("page", (page - 1).toString());
    }
    router.replace(`${pathname}?${params.toString()}`);
  };

  return (
    <div className={`${styles.container}`}>
      <button className={styles.button} disabled={!hasPrev} onClick={() => handleChangePage("prev")}>
        Previous
      </button>
      <button className={styles.button} disabled={!hasNext} onClick={() => handleChangePage("next")}>
        Next
      </button>
    </div>
  );
};
