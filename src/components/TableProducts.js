import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useQuery } from "@tanstack/react-query";
import { fetchProducts } from "../services/fetchProduct";
import {
  setProducts,
  editProduct,
  disableProduct,
  deleteProduct,
} from "../feature/productsSlice";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  IconButton,
  Box,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import Widgets from "./Widgets";
import EditProductModal from "./EditProductModal";

const TableProducts = ({ isAdmin }) => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);

  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setModalOpen] = useState(false);

  // Fetch products using React Query
  const { data, isLoading, isError } = useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });

  useEffect(() => {
    if (data) {
      dispatch(setProducts(data));
    }
  }, [data, dispatch]);

  if (isLoading) return <p>Loading products...</p>;
  if (isError) return <p>Error loading products. Please try again later.</p>;

  // Handle modal open
  const handleEdit = (product) => {
    setSelectedProduct(product);
    setModalOpen(true);
  };

  // Handle modal close
  const handleCloseModal = () => {
    setSelectedProduct(null);
    setModalOpen(false);
  };

  // Handle product disable
  const handleDisable = (id) => {
    dispatch(disableProduct(id));
  };

  // Handle product delete
  const handleDelete = (id) => {
    dispatch(deleteProduct(id));
  };

  return (
    <Box sx={{ padding: 2 }}>
      {/* Product Table */}
      <Table sx={{ backgroundColor: "#161718" }}>
        <TableHead>
          <TableRow
            style={{
              backgroundColor: "#212124",
            }}
          >
            <TableCell sx={{ color: "#e4e4e4" }}>Name</TableCell>
            <TableCell sx={{ color: "#e4e4e4" }}>Price</TableCell>
            <TableCell sx={{ color: "#e4e4e4" }}>Quantity</TableCell>
            <TableCell sx={{ color: "#e4e4e4" }}>Category</TableCell>
            <TableCell sx={{ color: "#e4e4e4" }}>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {products.map((product) => (
            <TableRow
              key={product.id}
              style={{
                backgroundColor: "#212124",
                opacity: product.disabled ? 0.5 : 1,
              }}
            >
              <TableCell sx={{ color: "#e4e4e4" }}>{product.name}</TableCell>
              <TableCell sx={{ color: "#e4e4e4" }}>{product.price}</TableCell>
              <TableCell sx={{ color: "#e4e4e4" }}>
                {product.quantity}
              </TableCell>
              <TableCell sx={{ color: "#e4e4e4" }}>
                {product.category}
              </TableCell>
              <TableCell>
                <IconButton
                  color="primary"
                  onClick={() => handleEdit(product)}
                  disabled={!isAdmin || product.disabled}
                >
                  <EditIcon />
                </IconButton>
                <IconButton
                  color="secondary"
                  onClick={() => handleDisable(product.id)}
                  disabled={!isAdmin || product.disabled}
                >
                  <VisibilityOffIcon />
                </IconButton>
                <IconButton
                  color="error"
                  disabled={!isAdmin || product.disabled}
                  onClick={() => handleDelete(product.id)}
                >
                  <DeleteIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {/* Edit Product Modal */}
      {selectedProduct && (
        <EditProductModal
          open={isModalOpen}
          handleClose={handleCloseModal}
          product={selectedProduct}
        />
      )}
    </Box>
  );
};

export default TableProducts;
