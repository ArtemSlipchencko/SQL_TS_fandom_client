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
}

const data = new Data();

export default data;
