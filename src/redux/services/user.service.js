import Axios from "axios";
import { commonUrl } from "./common-util";
const loginService = (body) => {
  return new Promise((resolve, rej) => {
    Axios.post(commonUrl + "/login", body)
      .then((res) => {
        saveToken(res.data.token);
        resolve(true);
      })
      .catch((e) => {
        rej("Incorrect Username/Password");
      });
  });
};

const registrationService = (body) => {
  return new Promise((resolve, rej) => {
    Axios.post(commonUrl + "/register", body)
      .then((res) => res.data)
      .then((res) => {
        console.log(res);
        resolve(true);
      })
      .catch((err) => {
        console.log(err);
        rej(err);
      });
  });
};

const saveToken = (token) => {
  return localStorage.setItem("islamic-token", token);
};

const getToken = () => {
  return new Promise((res, rej) => {
    try {
      res(localStorage.getItem("islamic-token"));
    } catch (e) {
      rej(e);
    }
  });
};

const getUserDetial = () => {
  return new Promise((res, rej) => {
    getToken().then((token) => {
      res(parseJwt(token));
    });
  });
};

const parseJwt = (token) => {
  if (token) {
    var base64Url = token.split(".")[1];
    var base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
    var jsonPayload = decodeURIComponent(
      atob(base64)
        .split("")
        .map((c) => {
          return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
        })
        .join("")
    );

    return JSON.parse(jsonPayload);
  }
};

export const UserSerivce = {
  loginApi: (body) => loginService(body),
  registerApi: (body) => registrationService(body),
  getToken: () => getToken(),
  getUserDetail: () => getUserDetial(),
};
