const initialState = {
  loginResponse: null,
  regResponse: null,
  errorMessage: "",
  userInfo: null,
  loginStatus: true,
};
export default function (state = initialState, action) {
  const { type, payload } = action;
  const newState = { ...state };
  switch (type) {
    case "LOGIN_USER":
      newState.loginResponse = payload;
      newState.loginStatus = true;
      return newState;
    case "REGISTER_USER":
      newState.regResponse = payload;
      newState.loginStatus = true;
      return newState;
    case "USER_INFO":
      newState.userInfo = payload;
      return newState;
    case "LOGIN_USER_ERROR":
      newState.errorMessage = payload;
      return newState;
    case "USER_LOGIN":
      newState.loginStatus = payload;
      return newState;
    default:
      return state;
  }
}
