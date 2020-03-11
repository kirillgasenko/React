import React from 'react';

function Todo(props){
    function qwe(){
        props.qwe(props.id)
    }
    return (
        <div className="todo">
            <h2 className="todo__title">{props.title}</h2>
            <p className="todo__description">{props.desc}</p>
            <button onClick={qwe}>delete</button>
        </div>
    )
}

export default Todo