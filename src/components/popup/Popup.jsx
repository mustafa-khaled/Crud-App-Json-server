import React from "react";
import styles from "./popup.module.css";

const Popup = ({ onDelete, onClose }) => {
  const handleYes = () => {
    onDelete();
    onClose();
  };

  const handleNo = () => {
    onClose();
  };

  return (
    <>
      <div className={styles.overlay} onClick={handleNo}></div>
      <div className={styles.popup}>
        <div>
          <h3>Are You Sure You Want To Delete This Product?</h3>
          <div className={styles.btns}>
            <button onClick={handleYes}>Yes</button>
            <button onClick={handleNo}>No</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Popup;
