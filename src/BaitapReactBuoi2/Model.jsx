import React from "react";

export default function Model({ listGlass, onCheck }) {
  return (
    <div className="text-center mb-5">
      <div
        style={{
          position: "relative",
        }}
      >
        <img src="./glassesImage/model.jpg" alt="Model" width="25%" />
        {onCheck ? (
          <img
            src={listGlass.url}
            alt="..."
            style={{
              position: "absolute",
              top: "25%",
              left: "50%",
              transform: "translateX(-50%)",
              opacity: ".8",
            }}
            width="12%"
          />
        ) : null}
        {onCheck ? (
          <div
            style={{
              position: "absolute",
              bottom: "0",
              left: "50%",
              transform: "translateX(-50%)",
              backgroundColor: "orange",
              width: "25%",
              padding: "10px 0",
              opacity: "0.7",
            }}
          >
            <div className="glassName" style={{ color: "blue" }}>
              {listGlass.name}
            </div>
            <div className="glassText" style={{ color: "white" }}>
              {listGlass.desc}
            </div>
            <div className="glassPrice" style={{ color: "red" }}>
              {listGlass.price}
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}
