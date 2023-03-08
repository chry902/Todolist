import { useState, useId } from "react";
import Footer from "../Footer";
import Head from "../Head";

import Todo from "../Todo";
import styles from "./styles.module.scss";

const Home = ({ todo, setTodo }) => {
  const uniqId = useId();

  const [actModal, setActModal] = useState(false); //modale add task
  const [modalDeletedItem, setModalDeletedItem] = useState(false); //stato per controllo apertura e chiusura modale di conf. elimina task
  const [callTask, setCallTask] = useState({}); //stato che passa come prop per prendere dsk da eliminare

  const [nameActiviti, setNameActiviti] = useState(""); //
  const [descrp, setDescrpt] = useState(""); // stati per per conservare volori che arrivano dagli input... per creare nuovitask
  const [time, setTime] = useState(""); //

  // funzione per creare nuoa task
  const addTodo = (e) => {
    e.preventDefault();
    const id = uniqId;
    const newTodo = {
      id: id,
      name: nameActiviti,
      description: descrp,
      time: time,
    };
    setTodo([...todo, newTodo]); //concateno gli elementi task con quella appena creata
    console.log("add todo", todo);

    setNameActiviti(""); //
    setDescrpt(""); // imposto gli stati input nuovamente come stringhe vuote per cancellare la task appena creata una volta creata
    setTime(""); //
    setActModal(!actModal); // cambio valore stato in false per chiudere la modale add task una volta terminata la funzione
  };

  //funzione per cancellare task
  const deletedTask = (e) => {
    e.preventDefault();
    console.log("TaskPREsa>>>", callTask);
    setTodo(todo.filter((el) => el !== callTask)); //prendo stato contenente le task e gli dico di filtrare tutte le task tranne quella che gli passo
    setModalDeletedItem(!modalDeletedItem); // cambio valore stato in false per chiudere la modale add task una volta terminata la funzione
  };

  return (
    <div className={styles.homeContainer}>
      {/***************************  modale conferma eliminazione task */}
      <div
        className={`${styles.optionDeletedModale} ${
          modalDeletedItem === true ? styles.showDeletedModal : ""
        }`}
      >
        <div className={styles.deletModal}>
          <div className={styles.eliminaAttivita}>Elimina attività</div>
          <div className={styles.unaVoltaEliminata}>
            Una volta eliminita, l’attività sarà persa
          </div>
          <div className={styles.btnWrapper}>
            <div
              className={styles.btnAnnulla}
              onClick={() => setModalDeletedItem(!modalDeletedItem)}
            >
              Annulla
            </div>
            <button
              className={styles.btnConferma}
              onClick={(e) => deletedTask(e)} // call funzione conferma cancellazione gli passo (e) evento per annullare gli eeventi di defoult del bottone
            >
              conferma
            </button>
          </div>
        </div>
      </div>

      {/***************************  modale input per agg task  */}
      <div
        className={`${styles.modale} ${
          actModal === true ? styles.activeMoidale : ""
        }`}
      >
        <div className={styles.headModal}>
          <div className={styles.modalTitle}>Aggiungi attivita</div>
          <div
            className={styles.closeModal}
            onClick={() => setActModal(!actModal)}
          >
            X
          </div>
        </div>
        {/****************Input*/}
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
              placeholder="Es: 03/03/2023 09:00"
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

      {/* >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */}
      <header className={styles.headersWrapper}>
        <Head />
      </header>

      {/* >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */}
      <main className={styles.mainWrapper}>
        {todo &&
          todo.map((item) => (
            <Todo
              item={item} //
              key={item.id} // utilizzo metodo map passandogli un componente task per stampare gli elementi (task) conteneti dentro il mio stato
              setCallTask={setCallTask} //
              setModalDeletedItem={setModalDeletedItem}
              modalDeletedItem={modalDeletedItem}
            />
          ))}
      </main>
      {/* >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */}
      <footer className={styles.footerWrapper}>
        <Footer actModal={actModal} setActModal={setActModal} />
      </footer>
    </div>
  );
};
export default Home;
