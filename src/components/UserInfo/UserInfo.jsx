import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import userOperations from "../../redux/operations/userOperations";
import SelectList from "../SelectList/SelectList";
import "./userInfo.scss";

export default function UserInfo() {
  const isAuth = useSelector((state) => state.auth.isAuth);
  const name = useSelector((state) => state.auth.name);
  const token = useSelector((state) => state.auth.token);

  const [isOpen, setOpen] = useState(false);

  const dispatch = useDispatch();
  const handleClick = function () {
    dispatch(userOperations.logoutUser(token));
  };

  return (
    <>
      {isAuth && isOpen && (
        <div
          onClick={() => {
            setOpen(false);
          }}
          className="select-list-wrapper"
        >
          <SelectList />
        </div>
      )}
      <div className="user-info-box">
        {isAuth ? (
          <>
            <span
              className="name"
              onClick={() => {
                setOpen(!isOpen);
              }}
            >
              {name}
            </span>{" "}
            <button onClick={handleClick} type="button">
              Log Out
            </button>
          </>
        ) : (
          <NavLink className="sign-link" to="/auth">
            Sign In
          </NavLink>
        )}
      </div>
    </>
  );
}
