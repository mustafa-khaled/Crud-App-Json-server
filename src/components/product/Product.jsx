import React from "react";
import styles from "./product.module.css";

const Product = ({ product, onDelete }) => {
  return (
    <div className={styles.product} key={product.id}>
      <div className={styles.image_holder}>
        <img src={product.coverImage} alt="photo" />
      </div>
      <h3>{product.title}</h3>
      <p>{product.description}</p>
      <div>
        <button className={styles.edit_btn}>
          <i className="fa-solid fa-pen"></i>
          Edit
        </button>
        <button
          className={styles.delete_btn}
          onClick={() => onDelete(product.id)}>
          <i className="fa-solid fa-trash"></i>
          Delete
        </button>
      </div>
    </div>
  );
};

export default Product;
