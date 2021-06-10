import { UserSerivce } from "../services/user.service";

const loginUser = (body) => {
  return (dispatch) => {
    UserSerivce.loginApi(body)
      .then((data) => {
        dispatch({
          type: "LOGIN_USER",
          payload: data,
        });
      })
      .catch((e) => {
        dispatch({
          type: "LOGIN_USER_ERROR",
          payload: e,
        });
      });
  };
};

const registerUser = (body) => {
  return (dispatch) => {
    UserSerivce.registerApi(body).then((data) => {
      dispatch({
        type: "REGISTER_USER",
        payload: data,
      });
    });
  };
};

const getTokenStatus = () => {
  return (dispatch) => {
    UserSerivce.getToken().then((tokenStatus) => {
      dispatch({
        type: "LOGIN_USER",
        payload: tokenStatus ? true : false,
      });
    });
  };
};

const getUserDetail = () => (dispatch) => {
  UserSerivce.getUserDetail().then((payload) => {
    dispatch({
      type: "USER_INFO",
      payload,
    });
  });
};

const checkLogin = () => (dispatch) => {
  const token = localStorage.getItem("islamic-token");
  console.log(token ? true : false);
  dispatch({
    type: "USER_LOGIN",
    payload: token ? true : false,
  });
};

export const UserAction = {
  loginAction: (body) => loginUser(body),
  registerAction: (body) => registerUser(body),
  getTokenStatus: () => getTokenStatus(),
  getUserDetail: () => getUserDetail(),
  checkLogin,
};
