import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useQuery } from "@tanstack/react-query";
import { fetchProducts } from "../services/fetchProduct";
import { setProducts } from "../feature/productsSlice";
import TableProducts from "./TableProducts";

const AdminView = () => {
  return (
    <div style={{ padding: "20px", backgroundColor: "#161718" }}>
      <TableProducts isAdmin={true} />
    </div>
  );
};

export default AdminView;
