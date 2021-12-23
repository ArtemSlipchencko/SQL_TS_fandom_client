import { createAction } from "@reduxjs/toolkit";

const getPostsRequest = createAction("data/getPostsRequest");
const getPostsSuccess = createAction("data/getPostsSuccess");
const getPostsError = createAction("data/getPostsError");

const createPostRequest = createAction("data/createPostRequest");
const createPostSuccess = createAction("data/createPostSuccess");
const createPostError = createAction("data/createPostError");

const editPostRequest = createAction("data/editPostRequest");
const editPostSuccess = createAction("data/editPostSuccess");
const editPostError = createAction("data/editPostError");

const deletePostRequest = createAction("data/deletePostRequest");
const deletePostSuccess = createAction("data/deletePostSuccess");
const deletePostError = createAction("data/deletePostError");

const actions = {
  getPostsRequest,
  getPostsSuccess,
  getPostsError,
  createPostRequest,
  createPostSuccess,
  createPostError,
  editPostRequest,
  editPostSuccess,
  editPostError,
  deletePostRequest,
  deletePostSuccess,
  deletePostError,
};

export default actions;
