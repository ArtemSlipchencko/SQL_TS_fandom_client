import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import data from "../../redux/operations/dataOperations";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import "../AuthForm/authForm.scss";
import "./createForm.scss";
import { useSelector } from "react-redux";

export default function AuthForm() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.token);

  return (
    <div className="form-container">
      <Formik
        initialValues={{
          title: "",
          text: "",
        }}
        onSubmit={(values) => {
          dispatch(data.createData(values, token));

          navigate("/", { replace: true });
        }}
      >
        <Form>
          <Field
            type="text"
            name="title"
            placeholder="Title for your post..."
            className="input-form"
          />
          <ErrorMessage
            name="title"
            component="span"
            className="span-form-error"
          />
          <Field
            type="text"
            name="text"
            placeholder="Text for your post..."
            className="input-form"
          />
          <ErrorMessage
            name="text"
            component="span"
            className="span-form-error"
          />
          <button className="submit button create" type="submit">
            Post
          </button>
        </Form>
      </Formik>
    </div>
  );
}
