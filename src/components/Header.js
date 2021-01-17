import React from "react";

const Header = () => {
  return (
    <div
      style={{
        backgroundColor: "var(--green)",
        height: "12vh",
      }}
    >
      <div
        className="container"
        style={{
          display: "flex",
          height: "100%",
        }}
      >
        <h1 className="title_display">westworld</h1>
      </div>
    </div>
  );
};

export default Header;
