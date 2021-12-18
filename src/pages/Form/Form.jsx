import React from "react";
import AuthForm from "../../components/AuthForm/AuthForm";
import NotImplemented from "../../components/NotImplemented/NotImplemented";
import CreateForm from "../../components/CreateForm/CreateForm";

export default function Form(props) {
  if (props.type === "auth") {
    return <AuthForm />;
  } else if (props.type === "create") {
    return <CreateForm />;
  } else if (props.type === "edit") {
    return <NotImplemented />;
  }
}
