import React from "react";
import { useNavigate } from "react-router-dom";
import "./selectList.scss";

export default function SelectList() {
  const navigate = useNavigate();

  const items = [
    {
      action: "Create post",
      type: "create",
    },
    {
      action: "Find post",
      type: "find",
    },
  ];

  const handleClick = function (type) {
    if (type === "create") {
      navigate("/create");
    }
  };

  return (
    <div className="select-list">
      <ul>
        {items.map((el, i) => {
          return (
            <li key={i}>
              <button
                onClick={() => {
                  handleClick(el.type);
                }}
                type="button"
              >
                {el.action}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
