import * as React from "react";

import { useLocation } from "react-router-dom";
import * as api from "src/api";

import { useDispatch } from "react-redux";
import { actionCreators } from "src/state";
import { bindActionCreators } from "redux";

import styles from "./SingleProductPage.module.scss";
import clsx from "clsx";

import Loader from "src/components/utils/Loader";

const SingleProductPage = () => {
  const dispatch = useDispatch();

  const { addToCart, fetchCart } = bindActionCreators(actionCreators, dispatch);

  const AddToCart = (product: any) => {
    addToCart(product);
    fetchCart();
  };

  const [product, setProduct] = React.useState(Object);

  const location = useLocation();
  const id = location.pathname.split("/")[2];

  React.useEffect(() => {
    api.fetchProduct(id).then((res) => {
      setProduct(res.data);
    });
  }, [id]);

  return (
    <div className={styles.mainPageContainer}>
      <div
        className={clsx(
          "container d-flex align-items-center justify-content-center",
          styles.products
        )}
      >
        {Object.keys(product).length > 0 ? (
          <div className={clsx("bg-white p-5 h-100", styles.product)}>
            <h1 className="mb-5">{product.title}</h1>
            <div className="d-flex align-items-center justify-content-center">
              <img
                src={product.image}
                alt={product.title}
                className={styles.image}
              />
              <p className={styles.description}>{product.description}</p>
            </div>

            <div className="d-flex justify-content-end align-items-center mt-5">
              <p className="me-4 fs-4 fw-bold">{product.price} PLN</p>
              <button className={styles.btn} onClick={() => AddToCart(product)}>
                Dodaj do koszyka!
              </button>
            </div>
          </div>
        ) : (
          <Loader />
        )}
      </div>
    </div>
  );
};

export default SingleProductPage;
