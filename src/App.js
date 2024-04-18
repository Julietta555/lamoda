import React, { useState } from "react";
import styles from "../src/ModuleStyles/App.module.css";
import FilteredColor from "../src/Components/filteredColor.jsx";
import FilteredCategory from "../src/Components/filteredCategory.jsx";
import SortedProducts from "../src/Components/sortedProducts.jsx";
import ProductList from "../src/Components/productList.jsx";
import SearchColorOrCategory from "../src/Components/searchColorOrCategory.jsx";
import generateContent from "./generateContent.js";

function App() {
  const [products] = useState(generateContent(500));

  const [searchText, setSearchText] = useState("");
  const [selectedColors, setSelectedColors] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);

  const sortingOptions = [
    { value: "price-asc", label: "Сначала дешёвые" },
    { value: "price-desc", label: "Сначала дорогие" },
    { value: "rating-desc", label: "Сначала популярные" }
  ];

  const [sortType, setSortType] = useState("price-asc");

  const handleSortChange = (e) => {
    setSortType(e.target.value);
  };

  const handleColorChange = (e) => {
    const color = e.target.value;
    setSelectedColors((prevSelected) =>
      prevSelected.includes(color)
        ? prevSelected.filter((c) => c !== color)
        : [...prevSelected, color]
    );
  };

  const getAvailableColors = () => {
    const allColors = products.map((product) => product.color);
    return Array.from(new Set(allColors));
  };

  const handleSearchChange = (e) => {
    setSearchText(e.target.value);
  };

  const getCategoryOptions = () => {
    const categories = Array.from(
      new Set(products.map((product) => product.name))
    );
    return categories;
  };

  const handleCategoryChange = (e) => {
    const category = e.target.value;
    setSelectedCategories((prevSelected) =>
      prevSelected.includes(category)
        ? prevSelected.filter((c) => c !== category)
        : [...prevSelected, category]
    );
  };

  const filteredProducts = products
    .filter(
      (product) =>
        selectedCategories.length === 0 ||
        selectedCategories.includes(product.name)
    )
    .filter(
      (product) =>
        selectedColors.length === 0 || selectedColors.includes(product.color)
    )
    .filter((product) => {
      const search = searchText.toLowerCase();
      return (
        (product.description &&
          product.description.toLowerCase().includes(search)) ||
        (product.name && product.name.toLowerCase().includes(search))
      );
    });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortType) {
      case "price-asc":
        return a.price - b.price;
      case "price-desc":
        return b.price - a.price;
      case "rating-desc":
        return b.rating - a.rating;
      default:
        return a.name && b.name ? a.name.localeCompare(b.name) : 0;
    }
  });

  return (
    <div className={styles.App}>
      <h1>Online Store</h1>
      <div className={styles.SortAndSearch}>
        <SortedProducts
          sortedProducts={sortedProducts}
          sortingOptions={sortingOptions}
          sortType={sortType}
          handleSortChange={handleSortChange}
        />
        <SearchColorOrCategory
          searchText={searchText}
          handleSearchChange={handleSearchChange}
        />
      </div>
      <div className={styles.list}>
        <div className={styles.filters}>
          <FilteredColor
            selectedColors={selectedColors}
            handleColorChange={handleColorChange}
            getAvailableColors={getAvailableColors}
          />
          <FilteredCategory
            selectedCategories={selectedCategories}
            handleCategoryChange={handleCategoryChange}
            getCategoryOptions={getCategoryOptions}
          />
        </div>
        <ProductList products={sortedProducts} />
      </div>
    </div>
  );
}

export default App;
