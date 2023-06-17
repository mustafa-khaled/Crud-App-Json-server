import {
  AddProduct,
  Header,
  Home,
  NotFoundPage,
  ProductDetails,
} from "./components";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<AddProduct />} />
        <Route path="product/:id" element={<ProductDetails />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
};

export default App;
