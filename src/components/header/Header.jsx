import React, { useState } from "react";
import styles from "./header.module.css";
import user from "../../assets/photo-1633332755192-727a05c4013d.jpg";
import { Link } from "react-router-dom";

const Header = () => {
  const [isListOpen, setIsListOpen] = useState(false);

  const toggleList = () => {
    setIsListOpen(!isListOpen);
  };

  return (
    <header>
      <div className={`${styles.header_content} container`}>
        <div className={styles.menu_icon} onClick={toggleList}>
          <i
            className={`fas ${
              isListOpen ? "fa-times" : "fa-bars"
            } open-list`}></i>
        </div>
        <div>
          <Link href="#">Login</Link>
        </div>
      </div>
      <div className={`${styles.list} ${isListOpen ? `${styles.active}` : ""}`}>
        <img src={user} alt="User Photo" />
        <div>
          <i className="fa-solid fa-house"></i>
          <Link to="/">Home</Link>
        </div>
        <div>
          <i className="fa-solid fa-square-plus"></i>
          <Link to="/add">Add Product</Link>
        </div>
      </div>
      <div
        className={`${styles.overLay} ${
          isListOpen ? `${styles.active_overlay}` : ""
        }`}
        onClick={toggleList}></div>
    </header>
  );
};

export default Header;
