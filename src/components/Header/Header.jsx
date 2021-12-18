import React from "react";
import { NavLink } from "react-router-dom";
import UserInfo from "../UserInfo/UserInfo";
import "./header.scss";

export default function Header() {
  return (
    <>
      <div className="header">
        <span>FANDOM</span>
        <ul className="nav-list">
          <li>
            <NavLink className="nav-link" to="/">
              Main
            </NavLink>
          </li>
          <li>
            <NavLink className="nav-link" to="/home">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className="nav-link" to="/about">
              About Us
            </NavLink>
          </li>
        </ul>
        <UserInfo />
      </div>
    </>
  );
}
