import { combineReducers } from 'redux';
import createTodo from './TodoReducer';

const rootReducer = combineReducers({
	createTodo,
});
export default rootReducer;
