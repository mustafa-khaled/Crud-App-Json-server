import styles from "./loading.module.css";

const Loading = () => {
  return (
    <div className={styles.loading_holder}>
      <span className={styles.loader}></span>;
    </div>
  );
};

export default Loading;
