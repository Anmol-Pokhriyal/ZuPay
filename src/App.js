import React from "react";
import "./styles.css";
import Home from "./Components/Home";
import Pagetwo from "./Components/Pagetwo";
import Pagethree from "./Components/Pagethree";
import Pagefour from "./Components/Pagefour";
import End from "./Components/End";
import Pagefive from "./Components/Pagefive";

export default function App() {
  return (
    <div className="App Maincolor">
      <Home />
      <Pagetwo />
      <Pagethree />
      <Pagefour />
      <Pagefive />
      <End />
    </div>
  );
}
