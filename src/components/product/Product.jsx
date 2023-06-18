import { Link, useNavigate } from "react-router-dom";
import styles from "./product.module.css";

const Product = ({ product, onDelete }) => {
  const navigate = useNavigate();

  return (
    <div className={styles.product} key={product.id}>
      <Link to={`/product/${product.id}`}>
        <div className={styles.image_holder}>
          <img src={product.coverImage} alt="photo" />
        </div>
        <h3>{product.title.slice(0, 20)}</h3>
        <p>{product.description.slice(0, 30)}</p>
      </Link>
      <div className={styles.btns_holder}>
        <button
          className={styles.edit_btn}
          onClick={() => navigate(`product/${product.id}/edit`)}>
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
