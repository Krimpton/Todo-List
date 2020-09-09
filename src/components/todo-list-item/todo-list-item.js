import React, {Component} from "react";
import './todo-list-item.css';

export default class TodoListItem extends Component { //наследываем в этом классе, класс Рекат Component

    render() {
        const {label, important = false} = this.props; //деструктурируем обьект, получаем значения, которые хранятся в this.props
        const style = {
            color: important ? 'tomato' : 'black',
            fontWeight: important ? 'bold' : 'normal'

        };
        return (
            <span className="todo-list-item">
        <span
            className="todo-list-item-label"
            style={style}>
            {label}
        </span>
        <button type="button"
                className="btn btn-outline-success btn-sm float-right">
        <i className="fa fa-exclamation"/>
         </button>

        <button type="button"
                className="btn btn-outline-danger btn-sm float-right">
        <i className="fa fa-trash-o"/>
    </button>
    </span>
        );
    };
}

