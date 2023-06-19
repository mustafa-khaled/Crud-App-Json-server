import styles from "./popup.module.css";

const PopupTwo = ({ content }) => {
  return (
    <div className={styles.popup}>
      <div>
        <i className="fa-regular fa-circle-check"></i>
        <h4> {content}</h4>
      </div>
    </div>
  );
};

export default PopupTwo;
