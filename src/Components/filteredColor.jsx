import React from "react";
import styles from "../ModuleStyles/filteredColor.module.css";

function FilteredColor({
  selectedColors,
  handleColorChange,
  getAvailableColors
}) {
  return (
    <div className={styles.filteredColor}>
      <span>По цвету</span>
      {getAvailableColors().map((color) => (
        <label key={color}>
          <input
            type="checkbox"
            value={color}
            checked={selectedColors.includes(color)}
            onChange={handleColorChange}
          />
          {color}
        </label>
      ))}
    </div>
  );
}

export default FilteredColor;
