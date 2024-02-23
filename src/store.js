import { createStore, applyMiddleware, combineReducers } from 'redux';
import { thunk } from 'redux-thunk';
import { TodosReducer, UsersReducer } from './reducers';


const rootReducer = combineReducers({
  users: UsersReducer,
  todos: TodosReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
