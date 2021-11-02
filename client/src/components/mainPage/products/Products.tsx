import * as React from "react";
import Product from "./product/Product";

import styles from "./Products.module.scss";

import { useSelector } from "react-redux";
import { State } from "../../../state";

export interface IProduct {
  product: {
    catergory: string;
    description: string;
    id: number;
    image: string;
    price: number;
    rating?: object[];
    title: string;
  };
}

const Products = () => {
  const products = useSelector((state: State) => state.products);

  return (
    <div className={styles.productsGrid}>
      {products.map((product: any) => (
        <Product product={product} key={product.id} />
      ))}
    </div>
  );
};

export default Products;
