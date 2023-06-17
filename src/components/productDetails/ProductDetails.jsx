import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { productDetails } from "../../redux/slices/productsSlice";
import Loading from "../loading/Loading";
import styles from "./productDetails.module.css";

const ProductDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const product = useSelector((state) => state.products.product);
  const loading = useSelector((state) => state.products.loading);
  const error = useSelector((state) => state.products.error);
  const [mainImage, setMainImage] = useState("");

  useEffect(() => {
    dispatch(productDetails(id));
  }, [dispatch, id]);

  const handleImageClick = (image) => {
    setMainImage(image);
  };

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!product) {
    return <div>No product found</div>;
  }

  return (
    <div className={`${styles.details} container`}>
      <div className={styles.images_holder}>
        <img
          src={mainImage || product.coverImage}
          className={styles.main_img}
        />
        <div>
          {product.images?.map((image, index) => (
            <img
              src={image}
              key={index}
              onClick={() => handleImageClick(image)} // Set the clicked image as the main image
              className={mainImage === image ? styles.selected : ""}
            />
          ))}
        </div>
      </div>
      <div className={styles.text}>
        <h2>{product.title}</h2>
        <p>{product.description}</p>
        <p> $ {product.price}</p>
      </div>
    </div>
  );
};

export default ProductDetails;
