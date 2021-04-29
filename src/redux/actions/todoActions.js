import { todoConstants } from "../actionTypes";

let TodoId = 2;

export const createTodo = (data) => (dispatch) => {
  dispatch({
    type: todoConstants.CREATE_TODO,
    id: TodoId++,
    text: data,
  });
};
