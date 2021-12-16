import React from "react";
import { useDispatch, useSelector } from "react-redux";

export default function UserInfo() {
  const isAuth = useSelector((state) => state.auth.isAuthenticated);

  return (
    <>
      <div>{isAuth ? <span>user</span> : <a href="/auth">Log In</a>}</div>
    </>
  );
}
