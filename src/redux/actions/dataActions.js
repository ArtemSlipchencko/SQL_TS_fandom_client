import { createAction } from "@reduxjs/toolkit";

const getPostsRequest = createAction("data/getPostsRequest");
const getPostsSuccess = createAction("data/getPostsSuccess");
const getPostsError = createAction("data/getPostsError");

const createPostRequest = createAction("data/createPostRequest");
const createPostSuccess = createAction("data/createPostSuccess");
const createPostError = createAction("data/createPostError");

const actions = {
  getPostsRequest,
  getPostsSuccess,
  getPostsError,
  createPostRequest,
  createPostSuccess,
  createPostError,
};

export default actions;
