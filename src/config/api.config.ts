import axios from "axios";


export const instance = axios.create({
  withCredentials: true,
  baseURL: 'http://localhost:8000/api/',
});

instance.interceptors.request.use(
  (config) => {
    config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
    return config;
  }
);

instance.interceptors.response.use(
  (config) => {
    return config;
  },
  async (error) => {
    const originalRequest = {...error.config};
    originalRequest._retry = true;
    if (
      error.response.status === 401 &&
      error.config &&
      !error.config._retry
    ) {
      try {
        const resp = await instance.post('/auth/token/refresh/');
        localStorage.setItem('token', resp.data.access);
        return instance.request(originalRequest);
      } catch (error) {
        console.log(error);
      }
    }

    throw error;
  }
);
