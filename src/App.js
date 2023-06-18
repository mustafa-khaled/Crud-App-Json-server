import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Loading from "./components/loading/Loading";

const AddProduct = lazy(() => import("./components/addProduct/AddProduct"));
const EditProduct = lazy(() => import("./components/editProduct/EditProduct"));
const NotFoundPage = lazy(() =>
  import("./components/notFoundPage/NotFoundPage")
);
const ProductDetails = lazy(() =>
  import("./components/productDetails/ProductDetails")
);
const Header = lazy(() => import("./components/header/Header"));
const Home = lazy(() => import("./components/home/Home"));
const WithGuard = lazy(() => import("./components/withGuard/WithGuard"));

const App = () => {
  return (
    <div>
      <Suspense fallback={<Loading />}>
        <WithGuard>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="add" element={<AddProduct />} />
            <Route path="product/:id/edit" element={<EditProduct />} />
            <Route path="product/:id" element={<ProductDetails />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </WithGuard>
      </Suspense>
    </div>
  );
};

export default App;
