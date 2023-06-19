import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {
  productDetails,
  editProduct,
  cleanProduct,
} from "../../redux/slices/productsSlice";
import styles from "./edit.module.css";

import PopupTwo from "../popup2/PopupTwo";

const EditProduct = () => {
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [coverImage, setCoverImage] = useState("");
  const [images, setImages] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  const { id } = useParams();
  const dispatch = useDispatch();
  const product = useSelector((state) => state.products.product);

  useEffect(() => {
    dispatch(cleanProduct());
  }, [dispatch]);

  useEffect(() => {
    dispatch(productDetails(id));
  }, [dispatch, id]);

  useEffect(() => {
    if (product) {
      setTitle(product.title);
      setDescription(product.description);
      setPrice(product.price);
      setCoverImage(product.coverImage);
      setImages(product.images);
    }
  }, [product]);

  const formHandler = (e) => {
    e.preventDefault();

    const editedProduct = {
      id: product.id,
      title,
      description,
      price,
      coverImage,
      images,
    };

    dispatch(editProduct(editedProduct))
      .unwrap()
      .then(() => {
        setShowPopup(true);
        setTimeout(() => {
          setShowPopup(false);
          navigate("/");
        }, 2000);
      });
  };

  return (
    <div className={styles.edit}>
      <div className={`${styles.edit_content} container`}>
        <form onSubmit={formHandler}>
          <div>
            <label>Image URL</label>
            <input
              type="text"
              value={coverImage}
              onChange={(e) => setCoverImage(e.target.value)}
            />
          </div>
          <div>
            <label>Title</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div>
            <label>Description</label>
            <input
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div>
            <label>Price</label>
            <input
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
          <div>
            <label>Images</label>
            <textarea
              value={images}
              onChange={(e) => setImages(e.target.value)}
            />
          </div>
          <button>Edit</button>
          {showPopup && <PopupTwo content="Done" />}
        </form>
      </div>
    </div>
  );
};

export default EditProduct;
