import styles from "./Loader.module.scss";

const Loading = () => {
  return (
    <>
      <div className="d-flex flex-column align-items-center">
        <div className={styles.loader}></div>
        <span className="mt-2 fs-6">
          Ładowanie może troche potrwać ze względu na API.
        </span>
      </div>
    </>
  );
};

export default Loading;
