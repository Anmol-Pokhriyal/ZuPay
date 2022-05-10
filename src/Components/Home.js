import React from "react";
import styled from "styled-components";
import Hero2 from "./hero2.webp";
import Hero1 from "./Hero1.webp";

function sayHello() {
  alert("YOu clicked me");
}
const Button = styled.button`
  font-family: "Inter", sans-serif;
  background-color: red;
  color: white;
  font-size: 20px;
  padding: 10px 60px;
  border-radius: 90px;
  /* margin: 10px 500px; */
  font-weight: "bold";
  cursor: pointer;
`;

const Home = () => {
  return (
    <div style={{ marginBottom: 200 }}>
      <div className="container">
        <h1>
          Build Super Smart <br /> Money Habits
        </h1>
        <div>
          <Button onClick={sayHello}>Learn Now </Button>
        </div>
        <div className="heroimages">
          <img className="hero" src={Hero1} alt="dollar" />
          <img className="hero2" src={Hero2} alt="pc" />
        </div>
      </div>
    </div>
  );
};

export default Home;
