import React from "react";
import styles from './Add.module.css';

class Add extends React.Component {
    state = {
      title: "",
      car: ""
    };
    handleTitleChange = e => {
      this.setState({ title: e.target.value });
    };
    handleDescriptionChange = e => {
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
            onChange={this.handleTitleChange}
            placeholder="Enter title"
          />
          <input
            type="pasword"
            onChange={this.handleDescriptionChange}
            className="car"
            placeholder="Enter car"
          />
          <button className={styles.add} onClick={this.handleAdd}>Add</button>
        </form>
    );
  }
}

export default Add;