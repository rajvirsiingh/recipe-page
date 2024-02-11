import React from "react";
import InstructionData from "./jsonData/instructions.json";
const Instructions = () => {
  const instructionsList = InstructionData.map((items) => {
    return (
      <li>
        <span className="title">{items.title}</span>: {items.content}
      </li>
    );
  });
  return (
    <div>
      <h2 className="heading">Instructions</h2>
      <ol>{instructionsList}</ol>
    </div>
  );
};

export default Instructions;
