import React, { Suspense, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import Header from "./components/Header/Header";
import Main from "./pages/Main/Main";
import Form from "./pages/Form/Form";
import NotImplemented from "./components/NotImplemented/NotImplemented";
import NotFound from "./pages/NotFound/NotFound";
import userOperations from "./redux/operations/userOperations";
import "./sass/main.scss";

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
          <Route path="/auth" element={<Form type="auth" />} />
          <Route path="/create" element={<Form type="create" />} />
          <Route path="/home" element={<NotImplemented />} />
          <Route path="/about" element={<NotImplemented />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </>
  );
}
