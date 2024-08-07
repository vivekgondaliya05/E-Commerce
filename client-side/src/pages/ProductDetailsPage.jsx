import React from "react";
import Navbar from "../components/navbar/Navbar";
import ProductDetails from "../features/product-list/ProductDetails";

const ProductDetailsPage = () => {
  return (
    <Navbar>
      <ProductDetails></ProductDetails>
    </Navbar>
  );
};

export default ProductDetailsPage;
