import React, { Component } from "react";
import "./App.css";
import Header from "./components/header";
import Todo from "./components/todo";
import Add from "./components/add";

class App extends Component {
  constructor(props) {
    super(props);
    this.some = { isToggleOn: true };
    this.handleClick = this.handleClick.bind(this);
    this.btn = this.btn.bind(this);
  }

  handleClick() {
    this.setState(some => ({
      isToggleOn: !some.isToggleOn
    }));
  }

  btn(id) {
    this.setState({
      todos: this.state.todos.filter(item => item.id !== id)
    });
  }

  state = {
    todos: []
  };

  handleAdd = (tit, car) => {
    const state = this.state.todos;
    console.log(tit);
    console.log(car);
    const arr = {
      id: state.length + 1,
      title: tit,
      desc: car
    };
    console.log(arr);
    state.push(arr);
    this.setState({
      todos: state
    });
  };

  // handleUpdate = (id, title, desc) => {
  //   const arr = {
  //     title: title,
  //     desc: desc
  //   };
  //   const mas = this.state.todos.map(item => {
  //     if (item.id === id) {
  //       item.title = arr.title;
  //       item.desc = arr.desc;
  //       console.log(item);
  //       this.setState({});
  //     }
  //   });
  // };

  shouldComponentUpdate(nextState) {
    return true;
  }

  componentWillReceiveProps(nextProps) {
    console.log("componentWillReceiveProps()");
  }

  componentDidMount = () => {
    setTimeout(() => {
      this.setState({
        todos: [
          {
            id: 1,
            title: "Car",
            desc: "Subaru"
          },
          {
            id: 2,
            title: "Car",
            desc: "Audi"
          },
          {
            id: 3,
            title: "Car",
            desc: "Mercedes"
          },
          {
            id: 4,
            title: "Car",
            desc: "BMW"
          }
        ]
      });
    }, 0);
  };

  render() {
    return (
      <div className="App">
        <Header />
        <div className="content">
          <h1>Туду лист</h1>
          <Add add={this.handleAdd} />
          {/* <button onClick={this.handleClick}>
            {this.state.isToggleOn ? "Включено" : "Выключено"}
          </button> */}
          {!this.state.todos.length && <span>Nothing</span>}
          {this.state.todos.map(item => {
            return (
              <Todo
                update={this.handleUpdate}
                qwe={this.btn}
                id={item.id}
                title={item.title}
                desc={item.desc}
                key={item.id}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default App;
