import axios from "axios";

const url = "http://localhost:5500/";

axios.defaults.baseURL = url;

class Backend {
  setToken(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  }

  unsetToken() {
    axios.defaults.headers.common.Authorization = `Bearer ''`;
  }

  getPosts() {
    return axios.get("publish/article");
  }

  createUser(credentials) {
    return axios.post("users/register", credentials);
  }

  loginUser(credentials) {
    return axios.post("users/login", credentials);
  }

  currentUser() {
    return axios.get("users/current");
  }

  logoutUser() {
    return axios.post("users/logout");
  }
}

const backend = new Backend();

export default backend;
