import React, { useState } from "react";
import Model from "./Model";
import GlassList from "./GlassList";
import dataGlasses from "./dataGlasses.json";

export default function GlassBanner() {
  const [imgGlass, setImgGlass] = useState("");
  const handleChangeGlass = (code) => {};
  return (
    <div
      style={{
        backgroundImage: "url(./glassesImage/background.jpg)",
        backgroundSize: "cover",
        position: "relative",
      }}
      className="d-flex align-items-center justify-content-center fixed-top min-vh-100 z-0 "
    >
      <div
        style={{
          backgroundColor: "black",
          opacity: "0.3",
          position: "absolute",
        }}
        className="z-1 vh-100 vw-100"
      ></div>
      <div className=" z-2 position-absolute d-flex justify-content-center flex-column ">
        <Model glasses={dataGlasses} />
        <GlassList onChangeGlass={handleChangeGlass} />
      </div>
    </div>
  );
}
