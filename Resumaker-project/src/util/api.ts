import axios from "axios";
import { store } from "../store";
import { LOGOUT } from "../modules/auth/action";

const config = {
  baseURL: "https://www.heejaerica.online/api",
  // baseURL: "http://localhost:8081/api",
};

const api = axios.create(config);

api.interceptors.response.use(
  (res) => res,
  (err) => {
    if (err.response.status === 401) {
      //dispatch log out
      store.dispatch({ type: LOGOUT });
    }
    return Promise.reject(err);
  }
);

export default api;
