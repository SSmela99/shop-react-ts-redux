import * as React from "react";
import Product from "./product/Product";

import styles from "./Products.module.scss";

import { useSelector } from "react-redux";
import { State } from "../../../state";

export interface IProducts {
  projects: IProduct[];
}

export interface IProduct {
  catergory: string;
  description: string;
  id: number;
  image: string;
  price: number;
  rating?: object[];
  title: string;
}

const Products = () => {
  const products = useSelector((state: State) => state.products);

  return (
    <div className={styles.productsGrid}>
      {products.map((product: any) => (
        <Product
          title={product.title}
          catergory={product.category}
          description={product.description}
          id={product.id}
          image={product.image}
          price={product.price}
          key={product.id}
        />
      ))}
    </div>
  );
};

export default Products;
