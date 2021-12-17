import React, { Suspense, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import Header from "./components/Header/Header";
import Main from "./pages/Main/Main";
import Auth from "./pages/Auth/Auth";
import NotFound from "./pages/NotFound/NotFound";
import userOperations from "./redux/operations/userOperations";
import "./sass/main.scss";
import { useSelector } from "react-redux";

export default function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(userOperations.currentUser());
  });

  return (
    <>
      <Header />
      <Suspense fallback="Loading">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/auth" element={<Auth />} />
          <Route element={<NotFound />} />
        </Routes>
      </Suspense>
    </>
  );
}
