import React from "react";

const ImgTextData = ({ img, one }) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <figure className="img-box" style={{ width: "6rem", height: "4rem" }}>
        <img
          src={img}
          width="100%"
          height="100%"
          alt="card"
          title="card"
          className="img"
          style={{ objectFit: "contain", width: "100%", height: "100%" }}
        />
      </figure>
      <span style={{ marginLeft: "2rem", fontSize: "1.2rem" }}>{one}</span>
    </div>
  );
};

export default ImgTextData;
