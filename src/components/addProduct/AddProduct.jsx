import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { insertProduct } from "../../redux/slices/productsSlice";
import styles from "./add.module.css";

const validationSchema = Yup.object().shape({
  title: Yup.string().required("Title is required"),
  description: Yup.string().required("Description is required"),
  price: Yup.number().required("Price is required"),
  coverImage: Yup.string().required("Cover Image URL is required"),
  images: Yup.string(),
});

const AddProduct = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (values, { setSubmitting }) => {
    const { id, ...productData } = values;
    const images = productData.images ? productData.images.split(" ") : [];

    try {
      await dispatch(insertProduct({ ...productData, images })).unwrap();
      navigate("/");
    } catch (error) {
      console.error(error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className={styles.add_container}>
      <div className={`${styles.add} container`}>
        <Formik
          initialValues={{
            title: "",
            description: "",
            price: 0,
            coverImage: "",
            images: "",
          }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}>
          {({ isSubmitting }) => (
            <Form className={styles.input_holder}>
              <div>
                <label htmlFor="coverImage">Cover Image URL:</label>
                <Field type="text" id="coverImage" name="coverImage" />
                <ErrorMessage
                  name="coverImage"
                  component="div"
                  className={styles.error}
                />
              </div>
              <div>
                <label htmlFor="title">Title:</label>
                <Field type="text" id="title" name="title" />
                <ErrorMessage
                  name="title"
                  component="div"
                  className={styles.error}
                />
              </div>
              <div>
                <label htmlFor="description">Description:</label>
                <Field type="text" id="description" name="description" />
                <ErrorMessage
                  name="description"
                  component="div"
                  className={styles.error}
                />
              </div>
              <div>
                <label htmlFor="price">Price:</label>
                <Field type="number" id="price" name="price" />
                <ErrorMessage
                  name="price"
                  component="div"
                  className={styles.error}
                />
              </div>
              <div>
                <label htmlFor="images">Images:</label>
                <Field component="textarea" id="images" name="images" />
                <ErrorMessage
                  name="images"
                  component="div"
                  className={styles.error}
                />
                <br />
                <small>Image URLs separated by spaces</small>
              </div>
              <button
                type="submit"
                className={`${styles.btn} ${isSubmitting && styles.disabled}`}
                disabled={isSubmitting}>
                {isSubmitting ? "Submitting..." : "Add"}
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default AddProduct;
