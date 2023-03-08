import styles from "./styles.module.scss";

const Footer = ({ actModal, setActModal }) => {
  return (
    <div
      className={styles.addTaskButton}
      onClick={() => setActModal(!actModal)}
    >
      <span className={styles.shape}>+</span>{" "}
      <span className={styles.btnText}>Aggiungi attivita</span>
    </div>
  );
};
export default Footer;
