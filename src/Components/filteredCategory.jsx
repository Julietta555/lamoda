import React from "react";
import styles from "../ModuleStyles/filteredCategory.module.css";

function FilteredCategory({
  selectedCategories,
  handleCategoryChange,
  getCategoryOptions
}) {
  return (
    <div className={styles.filteredCategory}>
      <div className={styles.name}>
        <span>По категории</span>
      </div>
      {getCategoryOptions().map((category) => (
        <label key={category}>
          <input
            type="checkbox"
            value={category}
            checked={selectedCategories.includes(category)}
            onChange={handleCategoryChange}
          />
          {category}
        </label>
      ))}
    </div>
  );
}

export default FilteredCategory;
