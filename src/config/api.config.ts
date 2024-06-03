import axios from "axios";
import Cookies from "js-cookie";

export const instance = axios.create({
  withCredentials: true,
  baseURL: 'http://localhost:8000/api/',
});

instance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (config) => {
    return config;
  },
  async (error) => {
    const originalRequest = error.config;
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      const refreshToken = Cookies.get('refresh');
      if (refreshToken) {
        try {
          const res = await instance.post('/auth/token/refresh/', {refresh: refreshToken})
          const newAccess = res.data.access;
          localStorage.setItem('token', newAccess);
          originalRequest.headers.Authorization = `Bearer ${newAccess}`;
          return instance(originalRequest);
        } catch (e) {
          console.log('Refresh token error', e);
        }
      }
    }
    return Promise.reject(error);
  }
);
