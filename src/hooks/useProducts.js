import { useState, useEffect } from "react";
import axios from "axios";

const useProducts = (url) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const storedProducts = sessionStorage.getItem("products");

      if (storedProducts) {
        setProducts(JSON.parse(storedProducts));
      } else {
        try {
          const response = await axios.get(
            url,
          );
          const productsFromApi = response.data.products;
          setProducts(productsFromApi);
          sessionStorage.setItem("products", JSON.stringify(productsFromApi));
        } catch (error) {
          console.error("Failed to fetch products:", error);
        }
      }
    };

    fetchProducts();
  }, [url]);

  return products;
};

export default useProducts;
