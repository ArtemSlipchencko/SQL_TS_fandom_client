import actions from "../actions/userActions";
import api from "../../services/backendService";

class User {
  createUser = (credentials) => async (dispatch) => {
    dispatch(actions.registerRequest);

    try {
      const user = await api.createUser(credentials);
      dispatch(actions.registerSuccess(user));
    } catch (err) {
      dispatch(actions.registerError(err));
    }
  };
}

const userOperations = new User();

export default userOperations;
