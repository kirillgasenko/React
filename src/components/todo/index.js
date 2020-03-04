import React from 'react';

function Todo(props){
    return (
        <div className="todo">
            <h2 className="todo__title">{props.title}</h2>
            <p className="todo__description">{props.desc}</p>
        </div>
    )
}

export default Todo