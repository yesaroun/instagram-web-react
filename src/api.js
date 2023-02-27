import axios from "axios";
import Cookes from "js-cookie";

const instance = axios.create({
  baseURL: "http://127.0.0.1:8000/api/v1/",
  headers: {
    "X-CSRFToken": Cookes.get("csrftoken"),
  },
});

export const getAllFeeds = () => {
  return instance.get("feeds/").then((res) => res.data);
};
