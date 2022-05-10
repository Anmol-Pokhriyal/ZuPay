import React from "react";
import s3 from "./s3.webp";
import s from "./s.webp";
import s2 from "./s2.webp";

function Pagetwo() {
  return (
    <div style={{ marginBottom: 200 }}>
      <div className="container">
        <div>
          <img className="top2" src={s3} alt="top" />
        </div>

        <h1>At ZuAcademy</h1>
      </div>
      <div>
        <h3>
          We make sure smart money habits are cultivated at an early age. We
          make sure managing money becomes a commonsense for kids.
        </h3>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          marginTop: -120,
          alignItems: "flex-end"
        }}
      >
        <img className="rocket" src={s} alt="bottom1" />
        <img className="magnet" src={s2} alt="bottom2" />
      </div>
    </div>
  );
}

export default Pagetwo;
