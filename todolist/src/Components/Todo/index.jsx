import styles from "./styles.module.scss";

const Todo = ({ item }) => {
  const nome = item.name || "name";
  const descript = item.description || "descrpt";
  const time = item.time || "9:00";

  return (
    <div className={styles.taskContain}>
      <div className={styles.taskwrapper}>
        <div className={styles.shape}></div>
        <div className={styles.nomeTask}>{nome}</div>
      </div>
      <div className={styles.descTask}>{descript}</div>
      <div className={styles.timeTask}>{time}</div>
    </div>
  );
};
export default Todo;
