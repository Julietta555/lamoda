import React from "react";
import Module from "../Components/Module.jsx";
import styles from "../ModuleStyles/productList.module.css";

function ProductList({ products }) {
  return (
    <div className={styles.productList}>
      {products.length > 0 ? (
        products.map((product) => (
          <Module
            key={product.id}
            name={product.name}
            description={product.description}
            color={product.color}
            price={product.price}
            rating={product.rating}
            image={{ src: product.image }}
          />
        ))
      ) : (
        <p>По вашему запросу ничего не найдено.</p>
      )}
    </div>
  );
}

export default ProductList;
