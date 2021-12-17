import React from "react";
import { Link } from "react-router-dom";
import UserInfo from "../UserInfo/UserInfo";
import "./header.scss";

export default function Header() {
  return (
    <>
      <div className="header">
        <span>FANDOM</span>
        <ul>
          <li>
            <Link to="/">Main</Link>
          </li>
        </ul>
        <UserInfo />
      </div>
    </>
  );
}
