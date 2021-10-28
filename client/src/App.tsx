import { useEffect } from "react";

import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "./state";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Navbar, MainPage, Register } from "./components/Components";

const App = () => {
  const dispatch = useDispatch();

  const { fetchProducts } = bindActionCreators(actionCreators, dispatch);

  useEffect(() => {
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
          </Route>
          <Route exact path="/register">
            <Register />
          </Route>
        </Switch>
      </Router>
    </>
  );
};

export default App;
