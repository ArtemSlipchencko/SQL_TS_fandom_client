import { createAction } from "@reduxjs/toolkit";

const getPostsRequest = createAction("data/getPostsRequest");
const getPostsSuccess = createAction("data/getPostsSuccess");
const getPostsError = createAction("data/getPostsError");

const actions = {
  getPostsRequest,
  getPostsSuccess,
  getPostsError,
};

export default actions;
