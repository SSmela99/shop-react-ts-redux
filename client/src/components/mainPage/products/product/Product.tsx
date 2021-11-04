import * as React from "react";
import { IProduct } from "../Products";

import clsx from "clsx";
import styles from "./Product.module.scss";

import { useDispatch } from "react-redux";
import { actionCreators } from "src/state";
import { bindActionCreators } from "redux";

import { Link } from "react-router-dom";

const Product: React.FC<IProduct> = ({ product }: IProduct) => {
  const dispatch = useDispatch();

  const { addToCart, fetchCart } = bindActionCreators(actionCreators, dispatch);

  const AddToCart = (product: any) => {
    addToCart(product);
    fetchCart();
  };

  return (
    <>
      <div className={clsx(styles.product)}>
        <Link to={`/product/${product.id}`}>
          <h1 className={styles.title}>{product.title}</h1>
        </Link>
        <img src={product.image} alt={product.title} className={styles.image} />
        <p className={styles.description}>{product.description}</p>
        <div className={styles.bottomProduct}>
          <span className={styles.price}>{product.price} PLN</span>
          <button
            className={styles.primary_btn}
            onClick={() => AddToCart(product)}
          >
            Do koszyka!
          </button>
        </div>
      </div>
    </>
  );
};

export default Product;
