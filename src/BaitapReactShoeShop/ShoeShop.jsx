import React, { useState } from "react";
import ShoeList from "./ShoeList";
import data from "./data.json";
import Modal from "./Modal";

export default function ShoeShop() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const handleSetModal = (bool) => {
    setIsOpen(bool);
  };
  const handleGetProduct = (product) => {
    setSelectedProduct(product);
  };
  return (
    <div className="container">
      <h1 className="text-center text-primary">ShoeShop</h1>

      <ShoeList
        products={data}
        onSetModal={handleSetModal}
        onGetProduct={handleGetProduct}
      />

      {isOpen && (
        <Modal product={selectedProduct} onSetModal={handleSetModal} />
      )}
    </div>
  );
}
