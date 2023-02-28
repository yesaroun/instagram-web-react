import axios from "axios";
import Cookes from "js-cookie";

const instance = axios.create({
  baseURL: "http://127.0.0.1:8000/api/v1/",
  headers: {
    "X-CSRFToken": Cookes.get("csrftoken"),
  },
  withCredentials: true,
});

export const getAllFeeds = () => {
  return instance.get("feeds/").then((res) => res.data);
};

// http://127.0.0.1:8999/api/v1/feeds/username
export const getUserFeeds = ({ queryKey }) => {
  console.log("api - username", queryKey[1]);
  let username = queryKey[1];
  console.log("api - username", username);

  return instance.get("feeds/" + username).then((res) => res.data);
};

export const usernameLogin = ({ username, password }) => {
  return instance
    .post("users/login", { username, password })
    .then((res) => res.data);
};

export const logout = () => {
  return instance.post("user/logout", "").then((res) => res.data);
};
