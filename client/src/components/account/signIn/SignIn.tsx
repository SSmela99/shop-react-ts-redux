import * as React from "react";
import axios from "axios";

import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "src/state";

import { useHistory, Link } from "react-router-dom";

import styles from "./SignIn.module.scss";

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

const SignIn = () => {
  let history = useHistory();

  const dispatch = useDispatch();
  const user = useSelector((state: User) => state.user);

  const { signIn, logout } = bindActionCreators(actionCreators, dispatch);

  const [info, setInfo] = React.useState<string>("");
  const [userData, setUserData] = React.useState({
    username: "",
    password: "",
  });

  const Logout = () => {
    setInfo("");
    logout(user);
    history.push("/login");
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setInfo("");

    const data = await axios.post("http://localhost:5000/signin", userData);

    const { message } = data.data;

    signIn(data.data);

    setUserData({
      username: "",
      password: "",
    });

    setInfo(message);
  };

  React.useEffect(() => {
    if (JSON.parse(sessionStorage.getItem("user")!) !== null) {
      let user = JSON.parse(sessionStorage.getItem("user")!);
      signIn(user);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={styles.registerContainer}>
      <div className="container pt-5">
        {"account" in user ? (
          <div className="text-center w-100 mx-auto">
            <p onClick={Logout} className={styles.logout}>
              Wyloguj się!
            </p>
          </div>
        ) : (
          <>
            <h1>Logowanie</h1>
            <form
              className="d-flex flex-column"
              data-ajax="false"
              onSubmit={handleSubmit}
            >
              <input
                placeholder="Login"
                id="username"
                onChange={(e) =>
                  setUserData({ ...userData, username: e.target.value })
                }
                value={userData.username}
              />
              <input
                placeholder="Hasło"
                id="password"
                type="password"
                onChange={(e) =>
                  setUserData({ ...userData, password: e.target.value })
                }
                value={userData.password}
              />

              <button className={styles.btn}>Zaloguj się!</button>
            </form>
            <p className="text-center mt-2">
              Nie masz jeszcze konta?{" "}
              <Link to="/register" className={styles.link}>
                Zarejestruj się tutaj!
              </Link>
            </p>
          </>
        )}
        {Object.keys(user).length > 0 && (
          <p
            className={
              Object.keys(user).length === 3
                ? `${styles.logged}`
                : `${styles.error}`
            }
          >
            {info}
          </p>
        )}
      </div>
    </div>
  );
};

export default SignIn;
