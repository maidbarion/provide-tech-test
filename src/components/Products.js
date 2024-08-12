import React, { useContext, useCallback, useMemo } from "react";
import { Grid, Divider } from "@mui/material";
import { AppContext } from "../context/AppContext";
import useProducts from "../hooks/useProducts";
import MemoizedCart from "./Cart";
import ProductCard from "./ProductCard";

const Products = () => {
  const { productsInCart, setProductsInCart } = useContext(AppContext);
  const products = useProducts("https://dummyjson.com/products?limit=20&skip=20");

  const addToCart = useCallback((product) => {
    setProductsInCart((prevProducts) => {
      const index = prevProducts.findIndex((item) => item.id === product.id);

      if (index >= 0) {
        return prevProducts.map((item, idx) =>
          idx === index ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevProducts, { ...product, quantity: 1 }];
      }
    });
  }, [setProductsInCart]);

  const memoizedProducts = useMemo(() => {
    return products.map((product) => (
      <Grid item key={product.id}>
        <ProductCard product={product} addToCart={addToCart} />
      </Grid>
    ));
  }, [products, addToCart]);

  return (
    <div>
      <MemoizedCart products={productsInCart} />
      <Divider />
      <h1>Products</h1>
      <Grid
        container
        spacing={2}
        direction="row"
        justifyContent="space-evenly"
        alignItems="center"
      >
        {memoizedProducts}
      </Grid>
    </div>
  );
};

export default Products;