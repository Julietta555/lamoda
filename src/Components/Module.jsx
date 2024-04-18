import React from "react";
import styles from "../ModuleStyles/Module.module.css";

const Module = (props) => {
  return (
    <div className={styles.moduleSection}>
      <div>
        <img className={styles.image} src={props.image.src} alt="product img" />
        <div>
          <h1> {props.name} </h1>
          <h2>{props.description}</h2>
          <div className={styles.moduleInfo}>
            <p>
              Цвет <span>{props.color}</span>
            </p>
            <p>
              Цена <span>{props.price} byn.</span>
            </p>
            <p>
              Рейтинг <span>{props.rating}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(Module);
