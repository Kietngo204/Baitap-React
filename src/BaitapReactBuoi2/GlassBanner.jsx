import React, { useState } from "react";
import Model from "./Model";
import GlassList from "./GlassList";
import dataGlasses from "./dataGlasses.json";

export default function GlassBanner() {
  const [listGlass, setListGlass] = useState({});
  const [isCheck, setIsCheck] = useState(false);
  const handleChangeGlass = (glass) => {
    setListGlass(glass);
    setIsCheck(true);
  };

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
      <div
        className=" z-2 position-absolute d-flex justify-content-center flex-column"
        style={{ marginTop: "100px" }}
      >
        <Model listGlass={listGlass} onCheck={isCheck} />
        <div
          className="row container d-flex justify-content-center align-items-center"
          style={{ backgroundColor: "white" }}
        >
          <GlassList
            onChangeGlass={handleChangeGlass}
            dataGlasses={dataGlasses}
          />
        </div>
      </div>
    </div>
  );
}
