import React from "react";

export default function GlassHeader() {
  return (
    <header
      style={{
        backgroundColor: "black",
        color: "white",
        textAlign: "center",
        opacity: "0.7",
        height: "100px",
        fontSize: "30px",
      }}
      className="d-flex align-items-center justify-content-center fixed-top z-3 position-absolute fixed-top "
    >
      TRY GLASSED APP ONLINE
    </header>
  );
}
