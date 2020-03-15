import React, { Component } from "react";
import "./style.css";

class Todo extends React.Component {
  qwe = () => {
    this.props.qwe(this.props.id);
  };
  render() {
    return (
      <div className="todo">
        <h2 className="todo__title">{this.props.title}</h2>
        <p className="todo__description">{this.props.desc}</p>
        <button type="button" onClick={() => this.props.edit(this.props.id)}>Open</button>
        <button onClick={this.qwe}>delete</button>
      </div>
    );
  }
}

export default Todo;
