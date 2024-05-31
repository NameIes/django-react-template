import { makeAutoObservable } from "mobx";
import AuthService from "./services/AuthService";


class AuthStore {
  isAuth: boolean = false;
  isAuthInProgress: boolean = false;

  constructor() {
    makeAutoObservable(this, {}, { autoBind: true });
  }

  async login(username: string, password: string) {
    this.isAuthInProgress = true;
    try {
      const res = await AuthService.login(username, password);
      localStorage.setItem('token', res.data.access);
      this.isAuth = true;
    } catch (e) {
      console.log('Login error', e);
    } finally {
      this.isAuthInProgress = false;
    }
  }

  async refreshToken() {
    this.isAuthInProgress = true;
    try {
      const res = await AuthService.refreshToken();
      localStorage.setItem('token', res.data.access);
      this.isAuth = true;
    } catch (e) {
      console.log('Refresh token error', e);
    } finally {
      this.isAuthInProgress = false;
    }
  }

  async checkAuth() {
    this.isAuthInProgress = true;
    try {
      await AuthService.verifyToken();
      this.isAuth = true;
    } catch (e) {
      this.refreshToken();
    } finally {
      this.isAuthInProgress = false;
    }
  }

  async logout() {
    this.isAuthInProgress = true;
    try {
      await AuthService.logout();
      localStorage.removeItem('token');
      this.isAuth = false;
    } catch (e) {
      console.log('Logout error', e);
    } finally {
      this.isAuthInProgress = false;
    }
  }
}

export default new AuthStore();
