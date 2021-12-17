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

  loginUser = (credentials) => async (dispatch) => {
    dispatch(actions.loginRequest);

    try {
      const user = await api.loginUser(credentials);
      dispatch(actions.loginSuccess(user));
    } catch (err) {
      dispatch(actions.loginError(err));
    }
  };

  logoutUser = (token) => async (dispatch) => {
    api.setToken(token);
    dispatch(actions.logOutRequest);

    try {
      const user = await api.logoutUser(token);
      api.unsetToken(token);
      dispatch(actions.logOutSuccess(user));
    } catch (err) {
      api.unsetToken(token);
      dispatch(actions.logOutError(err));
    }
  };

  currentUser = () => async (dispatch, getState) => {
    const {
      auth: { token: persistedToken },
    } = getState();

    api.setToken(persistedToken);

    dispatch(actions.getCurrentUserRequest());

    try {
      const user = await api.currentUser(persistedToken);
      api.unsetToken(persistedToken);
      dispatch(actions.getCurrentUserSuccess(user));
    } catch (err) {
      api.unsetToken();
      dispatch(actions.getCurrentUserError(err));
    }
  };
}

const userOperations = new User();

export default userOperations;
