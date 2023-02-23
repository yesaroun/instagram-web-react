import axios from "axios";
import Cookes from "js-cookie";

const instance = axios.create({
  baseURL: "http://127.0.0.1/api/v1/feeds",
  headers: {
    "X-CSRFToken": Cookes.get("csrftoken"),
  },
});

export const getAllFeeds = () => {
  // const res = await axios.get("/feeds");
  // console.log(res);
  //
  // return res.data;

  instance.get("feeds/").then((res) => res.data);
};
