import React from "react";
import styles from "../ModuleStyles/searchColorOrCategory.module.css";

function SearchColorOrCategory({ searchText, handleSearchChange }) {
  return (
    <div className={styles.searchColorOrCategory}>
      <input
        type="text"
        placeholder="Search..."
        value={searchText}
        onChange={handleSearchChange}
      />
    </div>
  );
}

export default SearchColorOrCategory;
