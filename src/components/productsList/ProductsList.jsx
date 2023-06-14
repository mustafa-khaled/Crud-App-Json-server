import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts, deleteProduct } from "../../redux/slices/productsSlice";
import Product from "../product/Product";
import Loading from "../loading/Loading";
import Popup from "../popup/Popup";
import { memo } from "react";

const ProductsList = () => {
  const dispatch = useDispatch();
  const { products, loading, error } = useSelector((state) => state.products);
  const [deleteProductId, setDeleteProductId] = useState(null);

  const deletePro = useCallback((id) => setDeleteProductId(id), []);

  const handleDelete = () => {
    if (deleteProductId) {
      dispatch(deleteProduct(deleteProductId));
    }
    setDeleteProductId(null);
  };

  const handleClose = () => {
    setDeleteProductId(null);
  };

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      {products.map((product) => (
        <Product key={product.id} product={product} onDelete={deletePro} />
      ))}
      {deleteProductId && (
        <Popup onDelete={handleDelete} onClose={handleClose} />
      )}
    </div>
  );
};

export default memo(ProductsList);
