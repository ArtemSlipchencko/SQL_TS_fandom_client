import axios from "axios";

const url = "http://localhost:5500/";

axios.defaults.baseURL = url;

class Backend {
  getPosts() {
    return axios.get("publish/article");
  }

  createUser(credentials) {
    return axios.post("users/register", credentials);
  }

  loginUser(credentials) {
    return axios.post("users/login", credentials);
  }

  currentUser(credentials) {
    return axios.post("users/current", credentials);
  }

  logoutUser(credentials) {
    return axios.post("users/logout", credentials);
  }
}

const backend = new Backend();

export default backend;
