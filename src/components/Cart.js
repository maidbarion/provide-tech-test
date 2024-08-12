import React, { useState, useCallback } from "react";
import { Link } from "react-router-dom";
import { Button, List, ListItem, ListItemText } from "@mui/material";
import CheckoutDialog from "./CheckoutDialogue";
import { calculatePrice } from "../utils/utils";

const Cart = React.memo(({ 
  products = [], 
  text = "Browse the items in your cart and then click Checkout", 
  mode = "browse" 
}) => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const { totalPrice, discountedPrice } = calculatePrice(products);

  const handleDialogOpen = useCallback(() => {
    setDialogOpen(true);
  }, []);

  const handleDialogClose = useCallback(() => {
    setDialogOpen(false);
  }, []);

  return (
    <div>
      <h1>Shopping Cart</h1>
      <p>{text}</p>
      <List>
        {products.map((product) => (
          <ListItem key={product.id}>
            <ListItemText
              primary={product.title}
              secondary={"Quantity: " + product.quantity}
            />
          </ListItem>
        ))}
      </List>
      <div className="price-container">
        <div>Total Price: £{totalPrice}</div>
        <div>Price After Discount: £{discountedPrice}</div>
      </div>
      {mode === "browse" ? (
        <Button
          style={{ marginBottom: 10 }}
          component={Link}
          to="/checkout"
          variant="contained"
        >
          Checkout
        </Button>
      ) : (
        <Button
          style={{ marginBottom: 10 }}
          onClick={handleDialogOpen}
          variant="contained"
          disabled={totalPrice <= 0}
        >
          Confirm Order
        </Button>
      )}
      <CheckoutDialog open={dialogOpen} handleClose={handleDialogClose} />
    </div>
  );
});

export default Cart;