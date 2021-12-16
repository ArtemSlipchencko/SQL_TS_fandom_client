import React, { lazy } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Suspense, useEffect } from "react";
import { useDispatch } from "react-redux";
import Header from "./components/Header/Header";
import Main from "./pages/Main/Main";
import Auth from "./pages/Auth/Auth";
import NotFound from "./pages/NotFound/NotFound";
import data from "./redux/operations/dataOperations";
import "./sass/main.scss";

export default function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(data.getData());
  });

  return (
    <>
      <Header />
      <Suspense fallback="Loading">
        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route exact path="/auth" element={<Auth />} />
        </Routes>
      </Suspense>
    </>
  );
}
