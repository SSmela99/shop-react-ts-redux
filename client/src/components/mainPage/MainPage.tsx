import styles from "./MainPage.module.scss";
import clsx from "clsx";

import Products from "./products/Products";

import Loader from "src/components/utils/Loader";

import { useSelector } from "react-redux";
import { State } from "src/state";

const MainPage = () => {
  const products = useSelector((state: State) => state.products);
  return (
    <div className={styles.mainPageContainer}>
      <div className={clsx("container pt-5", styles.MainPage)}>
        {products.length === 0 ? <Loader /> : <Products />}
      </div>
    </div>
  );
};

export default MainPage;
