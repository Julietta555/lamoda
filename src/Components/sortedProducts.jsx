import React from "react";
import styles from "../ModuleStyles/sortedProducts.module.css";

function SortedProducts({
  sortedProducts,
  sortingOptions,
  sortType,
  handleSortChange
}) {
  return (
    <div className={styles.sortedProducts}>
      <select value={sortType} onChange={handleSortChange}>
        {sortingOptions.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}

export default SortedProducts;
