import React from "react";
import ingredientsData from "./jsonData/ingredients.json";
const Ingredients = () => {
  const ingredientsList = ingredientsData.map((items) => {
    return <li>{items.ingredient}</li>;
  });
  return (
    <div>
      <h2 className="heading">Ingredients</h2>
      <ul>{ingredientsList}</ul>
    </div>
  );
};

export default Ingredients;
