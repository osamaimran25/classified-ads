import * as Types from "../Action/Type";
const int = {
  user: "root",
  email: "root@gmail.com",
  password: "root123",
  number: "+9955663322",
};
const createTodo = (state = int, action) => {
  switch (action.type) {
    case Types.CREATE_TODO:
      return [...state, { id: action.id, text: action.text, completed: false }];
    default:
      return state;
  }
};
export default createTodo;
