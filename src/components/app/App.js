import React from 'react';
import './App.css';
import TodoList from '../todo-list';
import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import ItemStatusFilter from '../items-status-filter';

function App() {

    const Todos = [
        {label: 'Drink Coffee', important: false, id: 0},
        {label: 'Build Awesome App', important: true, id: 1},
        {label: 'Remember new words', important: false, id: 2}
    ]

    return (
        <div className="todo-app">
            <AppHeader toDo={1} done={3}/>
            <div className="div top-panel d-flex">
                <SearchPanel/>
                <ItemStatusFilter/>
            </div>

            <TodoList todos={Todos}/>
        </div>
    );
}

export default App;
