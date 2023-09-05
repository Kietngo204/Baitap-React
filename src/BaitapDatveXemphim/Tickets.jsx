import React from "react";

export default function Tickets() {
  return (
    <div className="d-flex justify-content-center flex-column text-center ps-5">
      <h3 style={{ color: "white", marginBottom: "40px" }}>
        Danh sách ghế bạn chọn
      </h3>
      <div className="d-flex align-items-center mb-1">
        <div className="gheDuocChon"></div>
        <div style={{ fontSize: "20px", marginLeft: "10px" }}>Ghế đã đặt</div>
      </div>
      <div className="d-flex align-items-center mb-1">
        <div className="gheDangChon"></div>
        <div style={{ fontSize: "20px", marginLeft: "10px" }}>
          Ghế đang chọn
        </div>
      </div>
      <div className="d-flex align-items-center mb-1">
        <div className="ghe" style={{ backgroundColor: "white" }}></div>
        <div
          style={{
            fontSize: "20px",
            marginLeft: "10px",
          }}
        >
          Ghế chưa đặt
        </div>
      </div>
      <table
        className="text-start me-3"
        style={{ backgroundColor: "transparent" }}
      >
        <thead>
          <tr className="">
            <th style={{ width: "20%" }}>Số ghế</th>
            <th style={{ width: "60%" }}>Giá</th>
            <th>Huỷ</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>A1</td>
            <td>100.000</td>
            <td>X</td>
          </tr>
          <tr>
            <td>Tổng tiền</td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
