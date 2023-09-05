import React, { useState } from "react";

export default function SeatItem({ seatList }) {
  let classes = "";
  let cursor1 = "";
  const [isDisabled, setIsDisable] = useState(false);
  const handleDisable = (soGhe) => {
    alert(123);
  };
  return (
    <div className="row">
      {seatList.map((seat) => {
        if (typeof seat.soGhe === "number") {
          classes = "col mb-3 text-center button";
          cursor1 = "text";
        } else {
          classes = "col ghe";
          cursor1 = "pointer";
        }
        return (
          <button
            key={seat.soGhe}
            className={classes}
            style={{
              cursor: `${cursor1}`,
            }}
            onClick={() => {
              handleDisable(seat.soGhe);
            }}
          >
            {seat.soGhe}
          </button>
        );
      })}
    </div>
  );
}
