import { useEffect } from "react";

import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "./state";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import {
  Navbar,
  MainPage,
  Register,
  SignIn,
  SingleProductPage,
  Cart,
  Footer,
} from "./components/Components";

const App = () => {
  const dispatch = useDispatch();

  const { fetchProducts, fetchCart, signIn } = bindActionCreators(
    actionCreators,
    dispatch
  );

  useEffect(() => {
    fetchCart();
    fetchProducts();
    if (JSON.parse(sessionStorage.getItem("user")!) !== null) {
      let user = JSON.parse(sessionStorage.getItem("user")!);
      signIn(user);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <MainPage />
          </Route>
          <Route exact path="/register">
            <Register />
          </Route>
          <Route exact path="/login">
            <SignIn />
          </Route>
          <Route exact path="/product/:id">
            <SingleProductPage />
          </Route>
          <Route exact path="/cart">
            <Cart />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </>
  );
};

export default App;
