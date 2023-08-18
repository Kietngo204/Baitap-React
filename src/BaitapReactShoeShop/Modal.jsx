import React from "react";

export default function Modal({ product, onSetModal }) {
  return (
    <>
      <div className="modal" tabIndex={-1} style={{ display: "block" }}>
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Chi tiết sản phẩm</h5>
              <button
                type="button"
                className="btn-close"
                onClick={() => {
                  onSetModal(false);
                }}
              />
            </div>
            <div className="modal-body">
              <ul class="list-group">
                <li className="list-group-item d-flex align-items-center">
                  <p style={{ width: "20%" }}>Tên:</p>
                  <p>{product.name}</p>
                </li>
                <li className="list-group-item d-flex align-items-center">
                  <p style={{ width: "20%" }}>Giá:</p>
                  <p>{product.price} $</p>
                </li>
                <li className="list-group-item d-flex align-items-center">
                  <p style={{ width: "20%" }}>Hình ảnh:</p>
                  <div>
                    <img
                      src={product.image}
                      alt={product.name}
                      width="100px"
                      height="100px"
                    />
                  </div>
                </li>
                <li className="list-group-item d-flex align-items-center">
                  <p style={{ width: "20%" }}>Mô tả:</p>
                  <p>{product.description}</p>
                </li>
              </ul>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                onClick={() => {
                  onSetModal(false);
                }}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="modal-backdrop fade show"></div>
    </>
  );
}
