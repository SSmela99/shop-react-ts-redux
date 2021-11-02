import styles from "./Cart.module.scss";
import clsx from "clsx";

import { useSelector, useDispatch } from "react-redux";
import { actionCreators, State } from "src/state";
import { bindActionCreators } from "redux";

import { IoMdAddCircleOutline as Add } from "react-icons/io";
import { AiOutlineMinusCircle as Minus } from "react-icons/ai";

const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state: State) => state.cart);

  const { addToCart, fetchCart } = bindActionCreators(actionCreators, dispatch);

  const AddToCart = (product: any) => {
    addToCart(product);
    fetchCart();
  };

  return (
    <div className={styles.mainPageContainer}>
      <div
        className={clsx(
          "container d-flex align-items-center justify-content-center",
          styles.cartContainer
        )}
      >
        <div className="bg-white w-100 p-5">
          <h1 className="mb-5">Koszyk</h1>
          {/* @ts-ignore */}
          {cart.map((product) => (
            <div
              className={clsx(
                "d-flex align-items-center w-100 my-4",
                styles.productContainer
              )}
            >
              <img
                src={product.image}
                alt={product.title}
                className={styles.image}
              />
              <h1 className={clsx("fs-6", styles.title)}>{product.title}</h1>
              <div className="d-flex align-items-center">
                <Add className={styles.btns} />
                <span>{product.count}</span>
                <Minus className={styles.btns} />
              </div>
              <p>{product.price * product.count} PLN</p>
              <button>X</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cart;
