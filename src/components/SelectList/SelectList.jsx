import React from "react";
import "./selectList.scss";

export default function SelectList() {
  const items = [
    {
      action: "Create post",
    },
    {
      action: "Find post",
    },
  ];

  return (
    <div className="select-list">
      <ul>
        {items.map((el, i) => {
          return (
            <li key={i}>
              <button type="button">{el.action}</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
