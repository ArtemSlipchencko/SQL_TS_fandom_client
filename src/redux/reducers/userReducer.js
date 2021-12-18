import { createReducer } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import authActions from "../actions/userActions";

const ID = createReducer(null, {
  [authActions.getCurrentUserSuccess]: (_, { payload }) => payload.data.ID,
  [authActions.loginSuccess]: (_, { payload }) => payload.data.result[0].ID,
  [authActions.logOutSuccess]: (_, { payload }) => null,
});

const name = createReducer(null, {
  [authActions.getCurrentUserSuccess]: (_, { payload }) => payload.data.name,
  [authActions.loginSuccess]: (_, { payload }) => payload.data.result[0].name,
  [authActions.logOutSuccess]: (_, { payload }) => null,
});

const rights = createReducer(null, {
  [authActions.getCurrentUserSuccess]: (_, { payload }) => payload.data.rights,
  [authActions.loginSuccess]: (_, { payload }) => payload.data.result[0].rights,
  [authActions.logOutSuccess]: (_, { payload }) => null,
});

const token = createReducer(null, {
  [authActions.loginSuccess]: (_, { payload }) => payload.data.result[0].token,
  [authActions.logOutSuccess]: (_, { payload }) => null,
});

const isAuth = createReducer(false, {
  [authActions.loginSuccess]: (_, action) => true,
  [authActions.getCurrentUserSuccess]: (_, action) => true,
  [authActions.logOutSuccess]: (_, action) => false,
});

export default combineReducers({
  ID,
  name,
  rights,
  token,
  isAuth,
});
