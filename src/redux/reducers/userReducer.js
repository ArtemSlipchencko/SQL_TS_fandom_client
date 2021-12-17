import { createReducer } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import authActions from "../actions/userActions";

const user = createReducer(null, {
  [authActions.loginSuccess]: (_, { payload }) => {
    return {
      ID: payload.data.result[0].ID,
      name: payload.data.result[0].name,
      rights: payload.data.result[0].rights,
    };
  },
  [authActions.getCurrentUserSuccess]: (_, { payload }) => {
    return {
      ID: payload.data.ID,
      name: payload.data.name,
      rights: payload.data.rights,
    };
  },
});

const token = createReducer(null, {
  [authActions.loginSuccess]: (_, { payload }) => payload.data.result[0].token,
});

const isAuth = createReducer(false, {
  [authActions.loginSuccess]: (_, action) => true,
  [authActions.getCurrentUserSuccess]: (_, action) => true,
  [authActions.logOutSuccess]: (_, action) => false,
});

export default combineReducers({
  user,
  token,
  isAuth,
});
