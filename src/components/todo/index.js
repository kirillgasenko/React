import React from "react";
import styles from './Todo.module.css';

function Todo(props) {
    return (
      <div>
        <h2>{props.title}</h2>
        <p className={styles.description}>{props.desc}</p>
        <button type="button" onClick={() => props.onEdit(props.id)}>Open</button>
        <button type="button" onClick={() => props.onRemoveTask(props.id)}>remove</button>  
      </div>
    );
  
}

export default Todo;