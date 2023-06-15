import styles from "./add.module.css";
import { Formik, Field, Form } from "formik";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import { insertProduct } from "../../redux/slices/productsSlice";
import { useNavigate } from "react-router-dom";

const AddProduct = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Define the validation schema using Yup
  const validationSchema = Yup.object().shape({
    title: Yup.string().required("Title is required"),
    description: Yup.string().required("Description is required"),
    price: Yup.number().required("Price is required"),
    coverImage: Yup.string().required("Cover Image URL is required"),
    images: Yup.string(),
  });

  // Define the initial form values
  const initialValues = {
    title: "",
    description: "",
    price: 0,
    coverImage: "",
    images: "",
  };

  // Handle form submission
  const handleSubmit = (values) => {
    // Remove the id field from the form values
    const { id, ...productData } = values;

    // Split the images string into an array of strings
    const images = productData.images ? productData.images.split(" ") : [];

    // Dispatch the insertProduct action with the form values
    dispatch(insertProduct({ ...productData, images }));

    navigate("/");
  };

  return (
    <div className={styles.add_container}>
      <div className={`${styles.add} container`}>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}>
          <Form className={styles.input_holder}>
            <div>
              <label htmlFor="coverImage">Cover Image URL:</label>
              <Field type="text" id="coverImage" name="coverImage" />
            </div>
            <div>
              <label htmlFor="title">Title:</label>
              <Field type="text" id="title" name="title" />
            </div>
            <div>
              <label htmlFor="description">Description:</label>
              <Field type="text" id="description" name="description" />
            </div>
            <div>
              <label htmlFor="price">Price:</label>
              <Field type="number" id="price" name="price" />
            </div>
            <div>
              <label htmlFor="images">Images:</label>
              <Field component="textarea" id="images" name="images" />
              <br />
              <small>Image URLs separated by spaces</small>
            </div>
            <button type="submit" className={styles.btn}>
              Add
            </button>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default AddProduct;
