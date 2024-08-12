import React from "react";
import { Container, Typography } from "@mui/material";

const ProductNotFound = () => {
  return (
    <Container>
      <Typography variant="h5" align="center" color="error">
        Product not found
      </Typography>
    </Container>
  );
};

export default ProductNotFound;
