import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

export default function UserInfo() {
  const isAuth = useSelector((state) => state.auth.isAuth);

  return (
    <>
      <div>{isAuth ? <span>"name"</span> : <Link to="/auth">Log In</Link>}</div>
    </>
  );
}
