"use client";

import { MdSearch } from "react-icons/md";
import styles from "./search.module.css";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";

export const Search = ({ placeholder }) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();
  const defaultQuery = searchParams.get("q") || "";

  const handleSearch = useDebouncedCallback((e) => {
    const value = e.target.value;
    const params = new URLSearchParams(searchParams.toString());
    if (value) {
      value.length > 2 && params.set("q", value);
    } else {
      params.delete("q");
    }
    router.replace(`${pathname}?${params.toString()}`);
  }, 300);

  return (
    <div className={`${styles.container}`}>
      <MdSearch />
      <input
        type="text"
        placeholder={placeholder}
        className={`${styles.input}`}
        onChange={handleSearch}
        defaultValue={defaultQuery}
      />
    </div>
  );
};
