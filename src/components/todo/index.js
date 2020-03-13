import React, { Component } from "react";
import "./style.css";

class Todo extends React.Component {
  takeTitle = e => {
    this.setState({ newTitle: e.target.value });
  };
  takeDesc = e => {
    this.setState({ newCar: e.target.value });
  };
  state = {
    newTitle: "",
    newCar: ""
  };
  edit = e => {
    e.preventDefault();
    this.props.update(this.props.id, this.state.newTitle, this.state.newCar);
  };
  qwe = e => {
    e.preventDefault();
    this.props.qwe(this.props.id);
  };
  render() {
    return (
      <form className="todo">
        <h2 className="todo__title">{this.props.title}</h2>
        <input
          type="text"
          className="mytittle"
          value={this.state.newTitle}
          onChange={this.takeTitle}
        />
        <p className="todo__description">{this.props.desc}</p>
        <input
          type="text"
          className="myDesc"
          defaultValue={this.state.desc}
          onChange={this.takeDesc}
        />
        <button onClick={this.edit}>edit</button>
        <button onClick={this.qwe}>delete</button>
      </form>
    );
  }
}

export default Todo;
