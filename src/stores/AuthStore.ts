import { makeAutoObservable, action } from "mobx";
import Cookies from "js-cookie";

import agent from "../agent";

class AuthStore {
  isAuth: boolean = false;
  isAuthInProgress: boolean = false;
  errors: string[] = [];

  values = {
    username: "",
    email: "",
    password: "",
  };

  constructor() {
    makeAutoObservable(this);
  }

  setUsername(username: string) {
    this.values.username = username;
  }

  setEmail(email: string) {
    this.values.email = email;
  }

  setPassword(password: string) {
    this.values.password = password;
  }

  setLoading(loading: boolean) {
    this.isAuthInProgress = loading;
  }

  checkAuth() {
    this.isAuth = !!localStorage.getItem('access');
  }

  reset() {
    this.values.username = "";
    this.values.email = "";
    this.values.password = "";
  }

  current() {
    this.isAuthInProgress = true;
    this.errors = [];
    return agent.Auth.current()
      .catch(action((error) => {
        throw error;
      }))
      .finally(action(() => this.isAuthInProgress = false));
  }

  login() {
    this.isAuthInProgress = true;
    this.errors = [];
    return agent.Auth.login(this.values.username, this.values.password)
      .then((response) => {
        localStorage.setItem("access", response.data.access);
        Cookies.set("refresh", response.data.refresh);
        this.isAuth = true;
      })
      .catch(action((error) => {
        const errors = error.response.data;
        this.errors = Object.values(errors);
        throw error;
      }))
      .finally(action(() => this.isAuthInProgress = false));
  }

  register() {
    this.isAuthInProgress = true;
    this.errors = [];
    return agent.Auth.register(this.values.username, this.values.email, this.values.password)
      .then((response) => {
        localStorage.setItem("access", response.data.access);
        Cookies.set("refresh", response.data.refresh);
        this.isAuth = true;
      })
      .catch(action((error) => {
        const errors = error.response.data;
        for (const err in Object.values(errors)) {
          this.errors.push(`${err}`);
        }
        throw error;
      }))
      .finally(action(() => this.isAuthInProgress = false));
  }

  logout() {
    this.isAuthInProgress = true;
    localStorage.removeItem("access");
    Cookies.remove("refresh");
    this.isAuth = false;
    this.isAuthInProgress = false;
    return Promise.resolve();
  }
}

export default new AuthStore();
