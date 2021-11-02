import { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "./state";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import {
  Navbar,
  MainPage,
  Register,
  SingleProductPage,
  Cart,
} from "./components/Components";

import { State } from "./state";

const App = () => {
  const dispatch = useDispatch();

  const cart = useSelector((state: State) => state.cart);

  const { fetchProducts, fetchCart } = bindActionCreators(
    actionCreators,
    dispatch
  );

  useEffect(() => {
    fetchCart();
    fetchProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <MainPage />
            <button onClick={() => console.log(cart)}>cart</button>
          </Route>
          <Route exact path="/register">
            <Register />
          </Route>
          <Route exact path="/product/:id">
            <SingleProductPage />
          </Route>
          <Route exact path="/cart">
            <Cart />
          </Route>
        </Switch>
      </Router>
    </>
  );
};

export default App;
