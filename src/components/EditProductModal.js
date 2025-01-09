import React, { useState } from "react";
import { Modal, Box, TextField, Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { editProduct } from "../feature/productsSlice";

const EditProductModal = ({ open, handleClose, product }) => {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    name: product?.name || "",
    price: product?.price || "",
    quantity: product?.quantity || "",
    category: product?.category || "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    dispatch(editProduct({ ...product, ...formData }));
    handleClose();
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 400,
          bgcolor: "background.paper",
          boxShadow: 24,
          p: 4,
        }}
      >
        <h2>Edit Product</h2>
        <TextField
          fullWidth
          label="Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          margin="normal"
        />
        <TextField
          fullWidth
          label="Price"
          name="price"
          value={formData.price}
          onChange={handleChange}
          margin="normal"
          type="number"
        />
        <TextField
          fullWidth
          label="Quantity"
          name="quantity"
          value={formData.quantity}
          onChange={handleChange}
          margin="normal"
          type="number"
        />
        <TextField
          fullWidth
          label="Category"
          name="category"
          value={formData.category}
          onChange={handleChange}
          margin="normal"
        />
        <Box sx={{ mt: 2, display: "flex", justifyContent: "flex-end" }}>
          <Button onClick={handleClose} sx={{ mr: 1 }}>
            Cancel
          </Button>
          <Button variant="contained" onClick={handleSubmit}>
            Save
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default EditProductModal;
