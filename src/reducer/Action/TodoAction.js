import * as Types from "./Type";
let TodoId = 2;
const createTodo = (data) => (dispatch) => {
  dispatch({ type: Types.CREATE_TODO, id: TodoId++, text: data });
};

export default createTodo;
