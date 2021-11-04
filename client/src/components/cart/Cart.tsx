// @ts-nocheck
import * as React from "react";

import { Link } from "react-router-dom";

import styles from "./Cart.module.scss";
import clsx from "clsx";

import { useSelector, useDispatch } from "react-redux";
import { actionCreators, State } from "src/state";
import { bindActionCreators } from "redux";

import { IoMdAddCircleOutline as Add } from "react-icons/io";
import { AiOutlineMinusCircle as Minus } from "react-icons/ai";
import { MdDeleteForever as Delete } from "react-icons/md";

const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state: State) => state.cart);

  const [summaryPrice, setSummaryPrice] = React.useState<number>(0);

  const { addToCart, fetchCart, deleteFromCart, removeFromCart } =
    bindActionCreators(actionCreators, dispatch);

  const AddToCart = (product: any) => {
    addToCart(product);
    fetchCart();
  };

  const RemoveFromCart = (product: any) => {
    removeFromCart(product);
    fetchCart();
  };

  const DeleteFromCart = (product: any) => {
    deleteFromCart(product);
    fetchCart();
  };

  React.useEffect(() => {
    const getSummary = () => {
      const arr = [];
      if (cart.length === 0) {
        setSummaryPrice(0);
      } else {
        cart.forEach((x) => {
          arr.push(x.price * x.count);
          setSummaryPrice(arr.reduce((a, b) => a + b).toFixed(2));
        });
      }
    };

    getSummary();
  }, [cart]);

  return (
    <div className={styles.mainPageContainer}>
      <div className={clsx("container pt-lg-3 py-5", styles.cartContainer)}>
        {cart.length === 0 ? (
          <div className="text-center">
            <p>
              Brak przedmiotów w koszyku, przejdź do{" "}
              <Link to="/" className={styles.redirect}>
                sklepu
              </Link>{" "}
              aby wybrać produkty
            </p>
          </div>
        ) : (
          <div
            className={clsx("bg-white w-100 p-md-5 p-4 my-lg-5", styles.border)}
          >
            <h1 className="mb-lg-5">Koszyk</h1>
            {/* @ts-ignore */}
            {cart.map((product) => (
              <div
                className={clsx(
                  "d-md-flex text-md-start text-center align-items-center justify-content-between w-100 my-md-4",
                  styles.productContainer
                )}
                key={product.id}
              >
                <img
                  src={product.image}
                  alt={product.title}
                  className={styles.image}
                />
                <h1 className={clsx("fs-lg-6 fs-5", styles.title)}>
                  {product.title}
                </h1>
                <p className="mx-md-2 fs-md-5 fs-4 mb-md-0 mb-3">
                  {(product.price * product.count).toFixed(2)} PLN
                </p>
                <div className="d-flex align-items-center justify-content-center">
                  <div className="d-flex align-items-center">
                    <Add
                      className={styles.btns}
                      onClick={() => AddToCart(product)}
                    />
                    <span className="mx-2 fs-md-5 fs-4 fw-bold">
                      {product.count}
                    </span>
                    <Minus
                      className={styles.btns}
                      onClick={() => RemoveFromCart(product)}
                    />
                  </div>

                  <Delete
                    onClick={() => DeleteFromCart(product)}
                    className={clsx("ms-4", styles.btns)}
                  />
                </div>
              </div>
            ))}
            <div className="d-flex flex-lg-row flex-column align-items-center justify-content-end">
              <p className="me-md-3 fs-md-5 fs-4 mb-md-0 mb-2">
                Łącznie: {summaryPrice} PLN
              </p>
              <button className={styles.submit}>Przejdź do płatności</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
