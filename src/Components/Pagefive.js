import React from "react";
import z1 from "./z1.jpg";
import z2 from "./z2.png";
import chat from "./chat.webp";

function Pagefive() {
  return (
    <div className="container" style={{ marginBottom: 200 }}>
      <div
        style={{
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "center"
        }}
      >
        <img className="pal0" src={chat} alt="card1" />
        <h1>Here fom Parents</h1>
      </div>
      <div>
        <img className="pal" src={z2} alt="card1" />
        <img className="pal" src={z2} alt="card1" />
        <img className="pal" src={z2} alt="card1" />
        <img className="pal" src={z2} alt="card1" />
        <img className="pal" src={z2} alt="card1" />
        <img className="pal" src={z2} alt="card1" />
      </div>
    </div>
  );
}

export default Pagefive;
