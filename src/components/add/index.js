import React from "react";
class Add extends React.Component {
    state = {
      title: "",
      car: ""
    };
    handleTitle = e => {
      this.setState({ title: e.target.value });
    };
    handleDescription = e => {
      this.setState({ car: e.target.value });
    };
    handleAdd = e => {
      e.preventDefault();
      this.props.onAdd(this.state.title, this.state.car);
    };
    render() {
      return (
        <form className="content__add">
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
          <button onClick={this.handleAdd}>Add</button>
        </form>
    );
  }
}

export default Add;
