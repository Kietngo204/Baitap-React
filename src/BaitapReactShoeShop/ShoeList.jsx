import React from "react";
import ShoeItem from "./ShoeItem";

export default function ShoeList({ products, onSetModal, onGetProduct }) {
  return (
    <div className="row mt-5">
      {products.map((product) => {
        return (
          <div key={product.id} className="col-md-4 mb-4">
            <ShoeItem
              product={product}
              onSetModal={onSetModal}
              onGetProduct={onGetProduct}
            />
          </div>
        );
      })}
    </div>
  );
}
