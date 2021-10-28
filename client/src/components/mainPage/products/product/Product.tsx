import * as React from "react";
import { IProduct } from "../Products";

import clsx from "clsx";
import styles from "./Product.module.scss";

const Product: React.FC<IProduct> = ({
  title,
  image,
  description,
  price,
}: IProduct) => {
  return (
    <div className={clsx(styles.product)}>
      <h1 className={styles.title}>{title}</h1>
      <img src={image} alt={title} className={styles.image} />
      <p className={styles.description}>{description}</p>
      <div className={styles.bottomProduct}>
        <span>{price} PLN</span>
        <button>Do koszyka!</button>
      </div>
    </div>
  );
};

export default Product;
