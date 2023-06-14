import ProductsList from "../productsList/ProductsList";
import styles from "./home.module.css";

const Home = () => {
  return (
    <div className={`${styles.home} container`}>
      <h2>Products List</h2>
      <div className={styles.home_content}>
        <ProductsList />
      </div>
    </div>
  );
};

export default Home;
