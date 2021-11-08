import * as React from "react";

import styles from "./Register.module.scss";
import clsx from "clsx";

import { useHistory, Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as api from "src/api";

interface IRegister {
  username: string;
  firstname: string;
  lastname: string;
  email: string;
  password: string;
}

const Register = () => {
  let history = useHistory();
  const { register, handleSubmit, reset } = useForm();

  console.log(history);

  const [regInfo, setRegInfo] = React.useState<string>("");

  const onSubmit = async (data: IRegister) => {
    const res = api.registerUser(data);
    setRegInfo("");
    res.then((rs) => {
      if (rs.data["errors"]) {
        setRegInfo("Wszystkie inputy muszą zostać uzupełnione!");
      }

      if (rs.data["success"]) {
        history.push("/login");
      }

      if (rs.data["code"]) {
        setRegInfo(`podany ${Object.keys(rs.data.keyValue)} jest już zajęty`);
      }
    });

    reset({
      username: "",
      firstname: "",
      lastname: "",
      email: "",
      password: "",
    });
  };

  return (
    <div className={styles.registerContainer}>
      <div className="container pt-5">
        <h1>Rejestracja</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="d-flex flex-column">
          <input placeholder="Login" id="username" {...register("username")} />
          <input placeholder="Imię" id="firstname" {...register("firstname")} />
          <input
            placeholder="Nazwisko"
            id="lastname"
            {...register("lastname")}
          />
          <input placeholder="Email" id="email" {...register("email")} />
          <input
            placeholder="Hasło"
            id="password"
            type="password"
            {...register("password")}
          />
          {regInfo.length > 0 && `${regInfo}`}

          <button type="submit" className={clsx("mt-2", styles.btn)}>
            Zarejestruj się!
          </button>
        </form>
        <Link to="/login">
          <p className="mt-2 text-center">
            Masz już konto? <span className={styles.link}>Zaloguj się!</span>
          </p>
        </Link>
      </div>
    </div>
  );
};

export default Register;
