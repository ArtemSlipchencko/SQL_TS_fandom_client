import actions from "../actions/dataActions";
import api from "../../services/backendService";

class Data {
  getData = () => async (dispatch) => {
    dispatch(actions.getPostsRequest);

    try {
      const response = await api.getPosts();
      dispatch(actions.getPostsSuccess(response.data));
    } catch (err) {
      dispatch(actions.getPostsError(err));
    }
  };

  createData = (data, token) => async (dispatch) => {
    api.setToken(token);

    dispatch(actions.createPostRequest());

    try {
      const posts = await api.createPost(data);
      dispatch(actions.createPostSuccess(posts.data));
      api.unsetToken();
    } catch (err) {
      dispatch(actions.createPostError(err));
    }
  };

  editData = (data, token) => async (dispatch) => {
    api.setToken(token);

    dispatch(actions.editPostRequest());

    try {
      const posts = await api.editPost(data);
      dispatch(actions.editPostSuccess(posts.data));
    } catch (err) {
      dispatch(actions.editPostError(err));
    }
  };

  deleteData = (data, token) => async (dispatch) => {
    api.setToken(token);

    dispatch(actions.deletePostRequest());

    try {
      const posts = await api.removePost(data);
      dispatch(actions.deletePostSuccess(posts.data));
    } catch (err) {
      dispatch(actions.deletePostError(err));
    }
  };
}

const data = new Data();

export default data;
