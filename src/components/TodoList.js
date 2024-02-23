import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { addTodo, fetchTodos, toggleTodo } from "../actions";


const TodoCard = styled.div`
    border: 1px solid #ccc;
    margin-bottom: 1em;
    padding: 1em;
    border-radius: 5px;

    `;

const StyledLink = styled(Link)`
    display: inline-block;
    margin-right: 1em;
    text-decoration: none;
    background-color: #5f9ea0;
    color: white;
    padding: 0.1em 1em;
    border-radius: 14px;
    position : absolute;
    top: 53px;
    left: 0;
    `;

const TodoList = () => {
    //función dispatch
    const dispatch = useDispatch(); 
    const { todos } = useSelector(state => state.todos); 

    const [newTodo, setNewTodo] = useState("");
    const { id } = useParams();

    useEffect(() => {
        dispatch(fetchTodos()); 
    }, [dispatch]);

    const handleComplete = (todo) => {
        dispatch(toggleTodo(todo.id));
    };

    const handleAddTodo = () => {
        const todo = {
            id: Math.max(...todos.map((t) => t.id)) + 1,
            userId: Number(id),
            title: newTodo,
            completed: false,
        };
        dispatch(addTodo(todo)); 
        setNewTodo("");
    };

    return (
        <div>
            <div className="Contenedor-cabecera">
                <StyledLink to={`/users/${id}`}>Ver perfil del usuario</StyledLink>
                <div className="input-group mb-3">
                    <input type="text" className="form-control" placeholder="Nueva tarea"
                        aria-label="Nueva tarea" aria-describedby="button-addon2" value={newTodo} onChange={(e) => setNewTodo(e.target.value)} />
                    <button className="btn btn-outline-secondary" type="button" id="button-addon2" onClick={handleAddTodo}>Agregar</button>
                </div>
            </div>
            {todos
                .filter((todo) => todo.userId === Number(id))
                .map((todo) => (
                    <TodoCard key={todo.id}>
                        <input
                            type="checkbox"
                            checked={todo.completed}
                            onChange={() => handleComplete(todo)}
                        />
                        <label>{todo.title}</label>
                    </TodoCard>
                ))}
        </div>
    );
};

export default TodoList;
