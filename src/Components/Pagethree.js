import React from "react";
import g1 from "./g1.webp";
import g2 from "./g2.webp";
import g3 from "./g3.webp";

function Pagethree() {
  return (
    <div style={{ marginBottom: 100 }}>
      <div>
        <h1>Play To Learn</h1>
      </div>
      <div>
        <h3>Activities and Games designed to make learning super fun</h3>
      </div>
      <div className="cards">
        <img className="card" src={g1} alt="card1" />
        <img className="card" src={g2} alt="card2" />
        <img className="card" src={g3} alt="card3" />
      </div>
    </div>
  );
}

export default Pagethree;
