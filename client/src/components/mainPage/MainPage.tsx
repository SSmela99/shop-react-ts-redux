import styles from "./MainPage.module.scss";
import clsx from "clsx";

import Products from "./products/Products";

const MainPage = () => {
  return (
    <div className={styles.mainPageContainer}>
      <div className={clsx("container", styles.MainPage)}>
        <Products />
      </div>
    </div>
  );
};

export default MainPage;
