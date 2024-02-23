import axios from 'axios';


export const SET_USERS = 'SET_USERS';

export const setUsers = users => ({
    type: SET_USERS,
    payload: users,
});

export const fetchUsers = () => {
    return function (dispatch) {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(function (response) {
                dispatch(setUsers(response.data));
            })
            .catch(function (error) {
                console.log(error);
            });
    };
};


export const SET_TODOS = 'SET_TODOS';

export const setTodos = todos => ({
    type: SET_TODOS,
    payload: todos,
});

export const fetchTodos = () => {
    return function (dispatch) {
        axios.get('https://jsonplaceholder.typicode.com/todos')
            .then(function (response) {
                dispatch(setTodos(response.data));
            })
            .catch(function (error) {
                console.log(error);
            });
    };
};

export const ADD_TODO = 'ADD_TODO';

export const addTodo = todo => ({
    type: ADD_TODO,
    payload: todo,
});


export const TOGGLE_TODO = 'TOGGLE_TODO';

export const toggleTodo = id => ({
    type: TOGGLE_TODO,
    payload: id,
});