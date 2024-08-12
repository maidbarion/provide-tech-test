import React from "react";
import { Link } from "react-router-dom";
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from "@mui/material";

const ProductCard = React.memo(({ product, addToCart }) => {
  return (
    <Card>
      <CardMedia
        component="img"
        height="120"
        image={product.thumbnail}
        alt={product.title}
      />
      <CardContent>
        <Typography variant="h5" component="div">
          {product.title}
        </Typography>
      </CardContent>
      <CardActions>
        <Button component={Link} to={`/products/${product.id}`}>
          View Product
        </Button>
      </CardActions>
      <CardActions>
        <Button size="small" onClick={() => addToCart(product)}>
          Add to Cart
        </Button>
      </CardActions>
    </Card>
  );
});

export default ProductCard;