import React from "react";
import TableData from "./jsonData/table.json";
const Table = () => {
  const tableInfo = TableData.map((items) => {
    return (
      <tr>
        <td>{items.title}</td>
        <td className="content">{items.content}</td>
      </tr>
    );
  });
  return (
    <div>
      <h2 className="heading">Nutrition</h2>
      <p>
        The table below shows nutritional values per serving without the
        additional fillings.
      </p>
      <table>{tableInfo}</table>
    </div>
  );
};

export default Table;
