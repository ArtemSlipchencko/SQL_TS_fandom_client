import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import userOperations from "../../redux/operations/userOperations";
import "./authForm.scss";
import { useDispatch } from "react-redux";

export default function AuthForm() {
  const dispatch = useDispatch();
  const [isRegister, setRegister] = useState(true);

  return (
    <div className="form-container">
      <Formik
        initialValues={
          isRegister
            ? { name: "", password: "", login: "" }
            : { name: "", password: "" }
        }
        onSubmit={(values) => {
          dispatch(userOperations.createUser({ ...values }));
        }}
      >
        <Form>
          <Field
            type="name"
            name="name"
            placeholder="name"
            className="input-form"
          />
          <ErrorMessage
            name="name"
            component="span"
            className="span-form-error"
          />
          {isRegister && (
            <>
              <Field
                type="text"
                name="login"
                placeholder="login"
                className="input-form"
              />
              <ErrorMessage
                name="login"
                component="span"
                className="span-form-error"
              />
            </>
          )}
          <Field
            type="password"
            name="password"
            placeholder="password"
            className="input-form"
          />
          <ErrorMessage
            name="password"
            component="span"
            className="span-form-error"
          />
          <div className="button-container">
            <button
              className="toggle button"
              type="button"
              onClick={() => {
                setRegister(!isRegister);
              }}
            >
              {isRegister ? "Sign In" : "Sign Up"}
            </button>
            <button className="submit button" type="submit">
              Submit
            </button>
          </div>
        </Form>
      </Formik>
    </div>
  );
}
