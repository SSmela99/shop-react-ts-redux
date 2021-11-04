import * as React from "react";
import Product from "./product/Product";

import styles from "./Products.module.scss";

import { useSelector } from "react-redux";
import { State } from "../../../state";

import Loader from "src/components/utils/Loader";

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

  const [filtered, setFiltered] = React.useState<string>("");

  return (
    <>
      <div className={styles.searchBarContainer}>
        <h3 className="pt-3">Wyszukaj przedmiot</h3>
        <input
          placeholder="Szukaj"
          onChange={(e) => setFiltered(e.target.value)}
        />
      </div>
      <div className={styles.productsGrid}>
        {products.length === 0 ? (
          <>
            <Loader />
          </>
        ) : (
          <>
            {products

              // eslint-disable-next-line array-callback-return
              .filter((products: any) => {
                if (filtered === "") {
                  return products;
                } else if (
                  products.title.toLowerCase().includes(filtered.toLowerCase())
                ) {
                  return products;
                }
              })
              .map((product: any) => (
                <Product product={product} key={product.id} />
              ))}
          </>
        )}
      </div>
    </>
  );
};

export default Products;
