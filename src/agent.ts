import axios from "axios";
import Cookies from "js-cookie";

import AuthStore from "./stores/AuthStore";

const agent = axios.create({
  baseURL: "http://localhost:8000/api/",
  withCredentials: true,
  xsrfCookieName: "csrftoken",
  xsrfHeaderName: "X-CSRFTOKEN",
});

agent.interceptors.request.use(
  (config) => {
    const accessToken = localStorage.getItem("access");
    if (accessToken) {
      config.headers.Authorization = `JWT ${accessToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

agent.interceptors.response.use(
  (config) => {
    return config;
  },
  async (error) => {
    const originalRequest = error.config;

    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      const refreshToken = Cookies.get("refresh");
      if (refreshToken) {
        try {
          const res = await agent.post("auth/jwt/refresh/", {refresh: refreshToken});
          const newAccessToken = res.data.access;
          localStorage.setItem("access", newAccessToken);
          originalRequest.headers.Authorization = `JWT ${newAccessToken}`;
          return agent(originalRequest);
        } catch (error) {
          console.log('Refresh token error', error);
        }
      }
    }

    AuthStore.logout();
    return Promise.reject(error);
  }
);

const Auth = {
  current: () =>
    agent.get("auth/users/me/"),
  login: (username: string, password: string) =>
    agent.post("auth/jwt/create/", {username, password}),
  register: (username: string, email: string, password: string) =>
    agent.post("auth/users/", {username, email, password}),
};

export default { Auth };
