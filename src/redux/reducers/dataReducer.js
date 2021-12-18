import { createReducer } from "@reduxjs/toolkit";
import actions from "../actions/dataActions";

const posts = createReducer([], {
  [actions.getPostsSuccess]: (state, { payload }) => [...payload],
  [actions.createPostSuccess]: (state, { payload }) => [...payload],
});

export default posts;
