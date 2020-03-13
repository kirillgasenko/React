import React, { Component } from "react";
class Add extends React.Component {
  handleTitle = e => {
    this.setState({ title: e.target.value });
  };
  handleDescription = e => {
    this.setState({ car: e.target.value });
  };
  state = {
    title: "",
    car: ""
  };
  someNew = e => {
    e.preventDefault();
    this.props.add(this.state.title, this.state.car);
  };
  render() {
    return (
      <form className="header">
        <input
          type="text"
          className="title"
          onChange={this.handleTitle}
          placeholder="Enter title"
        />
        <input
          type="pasword"
          onChange={this.handleDescription}
          className="car"
          placeholder="Enter car"
        />
        <button onClick={this.someNew}>Add</button>
      </form>
    );
  }
}

export default Add;
