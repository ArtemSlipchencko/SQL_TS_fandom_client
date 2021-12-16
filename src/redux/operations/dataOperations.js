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

  //   register = (credentials) => async (dispatch) => {
  //     dispatch(authActions.registerRequest());
  //     try {
  //       const response = await axios.post("/users", credentials);
  //       console.log("register", response);
  //       dispatch(authActions.registerSuccess(response.data));
  //     } catch (error) {
  //       dispatch(authActions.loginError(error.message));
  //     }
  //   };
}

const data = new Data();

export default data;
