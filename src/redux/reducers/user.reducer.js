const initialState = {
  loginResponse: null,
  regResponse: null,
  errorMessage: "",
  userInfo: null,
};
export default function (state = initialState, action) {
  const { type, payload } = action;
  const newState = { ...state };
  switch (type) {
    case "LOGIN_USER":
      newState.loginResponse = payload;
      return newState;
    case "REGISTER_USER":
      newState.regResponse = payload;
      return newState;
    case "USER_INFO":
      newState.userInfo = payload;
      return newState;
    case "LOGIN_USER_ERROR":
      newState.errorMessage = payload;
      return newState;
    default:
      return state;
  }
}
