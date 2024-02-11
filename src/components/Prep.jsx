import React from "react";
import jsonData from "./jsonData/prep.json";
const Prep = () => {
  const prepData = jsonData.map((info) => {
    return (
      <li>
        <span className="title"> {info.title}</span>: {info.content}
      </li>
    );
  });

  return (
    <section className="prep">
      <h4>Preparation time</h4>
      <ul>{prepData}</ul>
    </section>
  );
};

export default Prep;
