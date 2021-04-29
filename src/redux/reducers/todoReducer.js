import { todoConstants } from "../actionTypes";

const initialState = {
  user: "root",
  email: "root@gmail.com",
  password: "root123",
  number: "+9955663322",
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case todoConstants.CREATE_TODO:
      return [...state, { id: action.id, text: action.text, completed: false }];
    default:
      return state;
  }
};

export default todoReducer;
