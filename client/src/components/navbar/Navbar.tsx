import styles from "./Navbar.module.scss";
import clsx from "clsx";

import logo from "src/assets/logo.svg";

import { MdAccountCircle as Account } from "react-icons/md";
import { BsCart as Cart } from "react-icons/bs";

import { Link } from "react-router-dom";

import { useSelector } from "react-redux";
import { State } from "src/state";

interface User {
  user: {
    account: {
      username: string;
      id: string;
      lastname: string;
      firstname: string;
      email: string;
      date: string;
    };
    success: boolean;
    message: string;
  };
}

const Navbar = () => {
  const cart = useSelector((state: State) => state.cart);
  const user = useSelector((state: User) => state.user);

  return (
    <div className={clsx("w-100 position-fixed top-0 start-0", styles.nav)}>
      <div
        className={clsx(
          "d-flex justify-content-between align-items-center h-100 container",
          styles.navContainer
        )}
      >
        <Link to="/">
          <div className="d-flex justify-content-between align-items-center h-100">
            <img src={logo} alt="logo" className={styles.logo} />
            <h1 className={clsx("ms-2 ms-md-3 ms-xl-4", styles.header1)}>
              Sklep Internetowy
            </h1>
          </div>
        </Link>
        <ul className={styles.nav_menu}>
          <Link to="/login">
            <div className="text-center me-2 me-sm-3 me-md-4">
              <Account className={styles.nav_menu_icon} />
              <p className={styles.nav_menu_text}>
                {"account" in user ? `${user.account.username}` : "Zaloguj się"}
              </p>
            </div>
          </Link>
          <Link to="/cart">
            <div className={clsx("text-center position-relative")}>
              <Cart className={styles.nav_menu_icon} />
              <p className={styles.nav_menu_text}>Koszyk</p>
              <div className={styles.cartBundle}>{`${cart.length}`}</div>
            </div>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
