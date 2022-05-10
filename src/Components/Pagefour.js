import React from "react";
import styled from "styled-components";
import x1 from "./x1.png";
import x2 from "./x2.webp";
import x3 from "./x3.webp";
import x4 from "./x4.png";

function downloadApp() {
  alert("YOu clicked me");
}
const Button = styled.button`
  font-family: "Inter", sans-serif;
  background-color: red;
  color: white;
  font-size: 25px;
  padding: 5px 5px;
  border-radius: 90px;
  width: 200px;
  cursor: pointer;
`;

function Pagefour() {
  return (
    <div className="container" style={{ marginBottom: 200 }}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          position: "relative"
        }}
      >
        <div
          style={{ paddingLeft: 20, display: "flex", flexDirection: "column" }}
        >
          <h1 className="page4"> Practice On The App</h1>
          <h2 className="header2">
            Learn practically. Buy real Stocks, ETFs, and Gold once you learn
            all about them. Get rewarded for best money habbits.
          </h2>
          <Button onClick={downloadApp}>Download App</Button>
        </div>
        <div style={{ position: "relative" }}>
          <img className="hand1" src={x2} alt="card2" />
          <img className="mobile" src={x1} alt="card1" />
          <img className="smily" src={x4} alt="card4" />
        </div>
        <img className="hand2" src={x3} alt="card3" />
      </div>
    </div>
  );
}

export default Pagefour;
