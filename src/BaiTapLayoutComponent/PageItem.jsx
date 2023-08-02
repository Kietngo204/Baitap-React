import React from "react";

export default function PageItem() {
  return (
    <div>
      <div className="card">
        <div
          className="card-header bg-secondary-subtle"
          style={{ height: "150px" }}
        ></div>
        <div className="card-body text-center py-5">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
        <div className="card-footer text-center p-3">
          <button className="btn btn-primary">Find Out More</button>
        </div>
      </div>
    </div>
  );
}
