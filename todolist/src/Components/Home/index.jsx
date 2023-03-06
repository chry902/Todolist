import { useState } from "react";
import Todo from "../Todo";
import styles from "./styles.module.scss";
const mokup = [
  {
    name: "entrare sul drive",
    description: "accedere al drive e completare",
    time: "03/02/23 09:00 ",
    id: 1,
  },
  {
    name: "call con sara rossi",
    description: "accedere al drive e completare",
    time: "03/02/23 09:00 ",
    id: 2,
  },
  {
    name: "contattare aggenzia",
    description: "accedere al drive e completare",
    time: "03/02/23 09:00 ",
    id: 3,
  },
  {
    name: "contattare aggenzia",
    description: "accedere al drive e completare",
    time: "03/02/23 09:00 ",
    id: 3,
  },
];
const Home = () => {
  const [todo, setTodo] = useState(mokup);
  const [active, setActive] = useState(false);
  console.log("props", todo);

  return (
    <div className={styles.homeContainer}>
      <div className={styles.modale}>
        <div className={styles.headModal}>
          <div className={styles.modalTitle}>Aggiungi attivita</div>
          <div className={styles.closeModal}>X</div>
        </div>

        <div></div>
      </div>
      <header className={styles.headersWrapper}>
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
      </header>

      <main className={styles.mainWrapper}>
        {todo && todo.map((item) => <Todo item={item} key={item.id} />)}
      </main>

      <footer className={styles.footerWrapper}>
        <div className={styles.addTaskButton}>
          <span className={styles.shape}>+</span>{" "}
          <span className={styles.btnText}>Aggiungi attivita</span>
        </div>
      </footer>
    </div>
  );
};
export default Home;
