import styles from "./styles.module.scss";

const Home = () => {
  return (
    <div className={styles.homeContainer}>
      <header className={styles.headersWrapper}>
        <h3 className={styles.lavoro}>Lavoro</h3>

        <div className={styles.rectanglesWrapper}>
          <div className={styles.rectangleLeft}>
            <span className={styles.options}>Predefinito</span>
            <div className={styles.path}>↓</div>
          </div>

          <div className={styles.rectangleRigth}>
            <div className={styles.shape}>+</div>
            <span className={styles.nuovaSezione}>Nuova sezione</span>
          </div>
        </div>
      </header>

      <body></body>

      <footer></footer>
    </div>
  );
};
export default Home;
