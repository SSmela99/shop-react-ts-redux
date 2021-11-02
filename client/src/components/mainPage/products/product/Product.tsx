import * as React from "react";
import { IProduct } from "../Products";

import clsx from "clsx";
import styles from "./Product.module.scss";

import { useDispatch, useSelector } from "react-redux";
import { State, actionCreators } from "../../../../state";
import { bindActionCreators } from "redux";

const Product: React.FC<IProduct> = ({ product }: IProduct) => {
  const dispatch = useDispatch();
  const cart = useSelector((state: any) => state.cart);

  const { addToCart, fetchCart } = bindActionCreators(actionCreators, dispatch);

  const AddToCart = (product: any) => {
    addToCart(product);
    fetchCart();
  };

  return (
    <div className={clsx(styles.product)}>
      <h1 className={styles.title}>{product.title}</h1>
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
        <button onClick={() => console.log(cart)}>pokaz koszyk</button>
      </div>
    </div>
  );
};

export default Product;
