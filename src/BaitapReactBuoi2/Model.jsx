import React from "react";

export default function Model({ glasses }) {
  console.log(glasses);
  return (
    <div className="row text-center mb-5">
      <div className="col-md-6">
        <img src="./glassesImage/model.jpg" alt="..." width="70%" />
      </div>
      <div className="col-md-6">
        <img src="./glassesImage/model.jpg" alt="..." width="70%" />
      </div>
    </div>
  );
}
