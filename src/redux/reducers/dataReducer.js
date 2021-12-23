import { createReducer } from "@reduxjs/toolkit";
import actions from "../actions/dataActions";

const posts = createReducer([], {
  [actions.getPostsSuccess]: (state, { payload }) => [...payload],
  [actions.createPostSuccess]: (state, { payload }) => [...payload],
  [actions.editPostSuccess]: (state, { payload }) => [...payload],
  [actions.deletePostSuccess]: (state, { payload }) => [...payload],
});

export default posts;
