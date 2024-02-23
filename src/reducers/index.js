import { ADD_TODO, SET_TODOS, SET_USERS, TOGGLE_TODO } from '../actions/index';

const initialStateUsers = {
    users: [],
};

export const UsersReducer = (state = initialStateUsers, action) => {
    switch (action.type) {
        case SET_USERS:
            return { ...state, users: action.payload };
        default:
            return state;
    }
};


const initialStateTodos = {
    todos: [],
};

export const TodosReducer = (state = initialStateTodos, action) => {
    switch (action.type) {
        case SET_TODOS:
            return { ...state, todos: action.payload };
        case ADD_TODO:
            return { ...state, todos: [...state.todos, action.payload] };
        case TOGGLE_TODO:
            return {
                ...state,
                todos: state.todos.map(todo =>
                    todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo
                ),
            };
        default:
            return state;
    }
};