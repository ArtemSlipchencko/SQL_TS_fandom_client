import React from "react";
import UserInfo from "../UserInfo/UserInfo";
import "./header.scss";

export default function Header() {
  return (
    <>
      <div className="header">
        <span>FANDOM</span>
        <ul>
          <li>
            <a href="/main">Main</a>
          </li>
        </ul>
        <UserInfo />
      </div>
    </>
  );
}
