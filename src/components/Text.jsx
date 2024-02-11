import React from "react";
import Prep from "./Prep";
import Ingredients from "./Ingredients";
import Instructions from "./Instructions";
import Table from "./Table";
import "./components.css";
const Text = () => {
  return (
    <div>
      <h1 className="heading">Simple Omelette Recipe</h1>
      <p>
        An easy and quick dish, perfect for any meal. This classic omelette
        combines beaten eggs cooked to perfection, optionally filled with your
        choice of cheese, vegetables, or meats.
      </p>
      <Prep />
      <Ingredients />
      <hr />
      <Instructions />
      <hr />
      <Table />
    </div>
  );
};

export default Text;
