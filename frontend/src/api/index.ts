import axios from "axios";

//サーバと繋いでいる
export default () => {
  return axios.create({
    baseURL: `http://localhost:3000/`,
  });
};
