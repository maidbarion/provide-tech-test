import React from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Button,
} from "@mui/material";

const CheckoutDialog = ({ open, handleClose }) => {
  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Order Placed</DialogTitle>
      <DialogContent>
        <DialogContentText>Thank you for your order.</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Go Back
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default CheckoutDialog;
