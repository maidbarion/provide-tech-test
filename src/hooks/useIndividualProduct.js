import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { findProductById } from "../utils/utils";

const useIndividualProduct = (id, products) => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const productId = parseInt(id, 10);
    const storedProducts = sessionStorage.getItem("products");
    const productsFromStorage = storedProducts
      ? JSON.parse(storedProducts)
      : products;
    const foundProduct = findProductById(productsFromStorage, productId);

    if (foundProduct) {
      setProduct(foundProduct);
    } else {
      navigate("/error");
    }
    setLoading(false);
  }, [id, products, navigate]);

  return { product, loading };
};

export default useIndividualProduct;
