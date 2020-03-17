import React from "react";
import "./style.css";

function Todo(props) {
    return (
      <div className="content__todo">
        <h2 className="todo__title">{props.title}</h2>
        <p className="todo__description">{props.desc}</p>
        <button type="button" onClick={() => props.edit(props.id)}>Open</button>
        <button type="button" onClick={() => props.onRemoveTask(props.id)}>remove</button>  
      </div>
    );
  
}

export default Todo;
