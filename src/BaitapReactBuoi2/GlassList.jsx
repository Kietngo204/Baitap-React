import React from "react";

export default function GlassList({ onChangeGlass, dataGlasses }) {
  return dataGlasses.map((glass) => {
    return (
      <div
        key={glass.id}
        className="card col-2"
        style={{ margin: "10px" }}
        onClick={() => onChangeGlass(glass)}
      >
        <img src={glass.img} alt={glass.name} width="100%" height="100px" />
      </div>
    );
  });
}
