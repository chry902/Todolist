import { useState, useId } from "react";
import Todo from "../Todo";
import styles from "./styles.module.scss";

const Home = ({ todo, setTodo }) => {
  const uniqId = useId();
  const [active, setActive] = useState(false);
  const [actModal, setActiveModal] = useState(false);

  const [nameActiviti, setNameActiviti] = useState("");
  const [descrp, setDescrpt] = useState("");
  const [time, setTime] = useState("");
  console.log("props", todo);

  const addTodo = (e) => {
    e.preventDefault();
    const id = uniqId;
    const newTodo = {
      id: id,
      name: nameActiviti,
      description: descrp,
      time: time,
    };
    setTodo((prev) => [...todo, newTodo]);
    console.log("add todo", todo);
    setNameActiviti("");
    setDescrpt("");
    setTime("");
    setActiveModal(!actModal);
  };

  return (
    <div className={styles.homeContainer}>
      <div
        className={`${styles.modale} ${
          actModal === true ? styles.activeMoidale : ""
        }`}
      >
        <div className={styles.headModal}>
          <div className={styles.modalTitle}>Aggiungi attivita</div>
          <div
            className={styles.closeModal}
            onClick={() => setActiveModal(!actModal)}
          >
            X
          </div>
        </div>

        <div className={styles.inputWrapper}>
          <form className={styles.form} onSubmit={addTodo}>
            <label className={styles.label}>Nome attivita</label>
            <input
              required
              className={styles.input}
              type="text"
              value={nameActiviti}
              id="nameActiviti"
              name="nameActiviti"
              onChange={(e) => setNameActiviti(e.target.value)}
            />
            <label className={styles.label}>Descrizione</label>
            <input
              required
              className={styles.input}
              type="text"
              value={descrp}
              id="descrp"
              name="descrp"
              onChange={(e) => setDescrpt(e.target.value)}
            />
            <label className={styles.label}>Data e ora</label>
            <input
              required
              className={styles.input}
              type="text"
              value={time}
              id="time"
              name="time"
              onChange={(e) => setTime(e.target.value)}
            />
            <div className={styles.btnWrapper}>
              <input
                className={styles.btnInput}
                type="submit"
                value="Aggiungi"
              />
            </div>
          </form>
        </div>
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
        <div
          className={styles.addTaskButton}
          onClick={() => setActiveModal(!actModal)}
        >
          <span className={styles.shape}>+</span>{" "}
          <span className={styles.btnText}>Aggiungi attivita</span>
        </div>
      </footer>
    </div>
  );
};
export default Home;
