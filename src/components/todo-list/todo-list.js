import React from "react";
import TodoListItem from "../todo-list-item";
import './todo-list.css';

const TodoList = ({todos}) => {

    const TodoLists = todos.map((i) => {

        const {id, ...ItemsAll} = i;

        return (
            <li key={id} className="list-group-item">
                <TodoListItem {...ItemsAll}/> {/*<TodoListItem label={i.label} important={i.important}/>*/}
            </li>
        )
    })

    return (
        <ul className="list-group todo-list">
            {TodoLists}
        </ul>
    )
}

export default TodoList;