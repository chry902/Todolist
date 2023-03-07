import { useState } from "react";
import styles from "./styles.module.scss";

const Todo = ({ item, setCallTask, setModalDeletedItem, modalDeletedItem }) => {
  const nome = item.name || "name";
  const descript = item.description || "descrpt";
  const time = item.time || "9:00";

  const [actionTask, setActionTasck] = useState(false); //azione per cambiare i cerchi rossi in check

  //funzione che mi apre la modale per la conferma dell'eliminazione task
  const openModal = (value) => {
    setModalDeletedItem(!modalDeletedItem); //controllo per aprire modale
    console.log("value", value);
    setCallTask(value); // stato che prende la task da eliminare
  };
  return (
    <div className={styles.taskContain}>
      <div className={styles.taskwrapper}>
        {actionTask === true ? (
          <div
            className={styles.shapeGreen}
            onClick={() => setActionTasck(!actionTask)} //avvio funzione di call per cambiare stato... e cambiare i cerchi rossi ed sbarrare testo
          >
            ✓
          </div>
        ) : (
          <div
            className={styles.shapeRed}
            onClick={() => setActionTasck(!actionTask)}
          ></div>
        )}

        <div
          className={`${styles.nomeTask} ${
            actionTask === true ? styles.lineThrough : ""
          }`}
        >
          {nome}
        </div>
      </div>
      <div className={styles.descTaskWrapper}>
        <div
          className={`${styles.descTask} ${
            actionTask === true ? styles.lineThrough : ""
          }`}
        >
          {descript}
        </div>
        <div className={styles.optionDeletedTask}>⋯</div>
        <div className={styles.smallModale}>
          <div className={styles.modificaAttivita}>
            <span>Modifica attivita</span>
          </div>
          <div
            className={styles.eliminaAttivita}
            onClick={() => openModal(item)} //call della funzione avvia modale per conferma elim. e passare la task da eliminare
          >
            <span>Elimina attivita</span>
          </div>
        </div>
      </div>
      <div
        className={`${styles.timeTask} ${
          actionTask === true ? styles.lineThrough : ""
        }`}
      >
        {time}
      </div>
    </div>
  );
};
export default Todo;
