import styles from "./add.module.css";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

const AddProduct = () => {
  // Define the validation schema using Yup
  const validationSchema = Yup.object().shape({
    title: Yup.string().required("Title is required"),
    description: Yup.string().required("Invalid description"),
    photo: Yup.mixed().required("Photo is required"),
  });

  // Define the initial form values
  const initialValues = {
    title: "",
    description: "",
    photo: "", // Updated to an empty string
  };

  // Handle form submission
  const handleSubmit = (values, { resetForm }) => {
    resetForm();
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
              <label htmlFor="photo">Image:</label>
              <Field type="file" id="photo" name="photo" />
              <ErrorMessage
                name="photo"
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
