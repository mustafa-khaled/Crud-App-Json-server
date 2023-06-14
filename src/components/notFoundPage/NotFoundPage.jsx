import { Link } from "react-router-dom";
import styles from "./notFound.module.css";

const NotFoundPage = () => {
  return (
    <div className={`${styles.not_found} container`}>
      <div>
        <i className="fa-solid fa-triangle-exclamation"></i>
        <h1>The Page You Are Looking For Is Not Exist !.</h1>
        <Link to={"/"}>
          <button>Go Home</button>
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
