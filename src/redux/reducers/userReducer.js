import { createReducer } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import authActions from "../actions/userActions";

const user = createReducer(null, {
  [authActions.registerSuccess]: (state, { payload }) => payload,
  [authActions.loginSuccess]: (state, { payload }) => payload,
  [authActions.getCurrentUserSuccess]: (state, { payload }) => payload,
});

const token = createReducer(null, {});

const isAuthenticated = createReducer(false, {});

export default combineReducers({
  user,
  token,
  isAuthenticated,
});
