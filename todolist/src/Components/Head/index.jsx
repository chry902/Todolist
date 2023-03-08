import styles from "./styles.module.scss";
import { useState } from "react";
const Head = () => {
  const [active, setActive] = useState(false); //modale option predefinito...

  return (
    <>
      <h3 className={styles.lavoro}>Lavoro</h3>

      <div className={styles.rectanglesContain}>
        <div className={styles.rectangleLeftWrapper}>
          <div
            className={styles.rectangleLeft}
            onClick={() => setActive(!active)}
          >
            <span className={styles.options}>Predefinito</span>
            <div className={styles.path}>↓</div>
          </div>

          <div
            className={`${styles.rectangleLeftModal} ${
              active === true ? styles.active : ""
            }`}
          >
            <div className={styles.rectangle}>
              <span className={styles.tutti}>Tutti</span>
            </div>
            <div className={styles.rectangle}>
              <span className={styles.completati}>Completati</span>
            </div>
            <div className={styles.rectangle}>
              <span className={styles.daCompletare}>Da completare</span>
            </div>
          </div>
        </div>

        <div className={styles.rectangleRigth}>
          <div className={styles.shape}>+</div>
          <span className={styles.nuovaSezione}>Nuova sezione</span>
        </div>
      </div>
    </>
  );
};
export default Head;
