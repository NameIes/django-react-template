import { instance } from "../config/api.config";


const AuthService = {
  login(username: string, password: string) {
    return instance.post('/auth/login/', {
      username,
      password
    });
  },
  verifyToken() {
    return instance.post('/auth/token/verify/', {
      token: localStorage.getItem('token')
    });
  },
  refreshToken() {
    return instance.post('/auth/token/refresh/');
  },
  logout() {
    return instance.post('/auth/logout/');
  }
}


export default AuthService;
