import React, { Component } from "react";
import "../../App.css";

import Add from "../add";
import Header from "../header";
import Todo from "../todo";
import Modal from '../modal';

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
    todos: [],
    editPopup: null
  };

  handleAdd = (title, car) => {
    const state = this.state.todos;
    const arr = {
      id: state.length + 1,
      title: title,
      desc: car
    };
    state.push(arr);
    this.setState({
      todos: state
    });
  };

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

  edit = data => {
    const {state:{todos}} = this;
    const editedArray = todos.map(item => {
      if (item.id === data.id) {
        item.title = data.title;
        item.desc = data.desc;
        console.log(item.title + item.desc)
        return item;
      }
      return item;
    });
    
    this.setState({todos: editedArray});
    this.closeEditing();
  }

  openEditing = id => {
    const {
      state: {
        todos,
      }
    } = this
    if(todos.length > 0){
        const edittableItem = todos.find(item => {
          return item.id === id
        })
        if(edittableItem){
          this.setState({editPopup: (
            <Modal id={edittableItem.id} edit={this.edit} title={edittableItem.title} desc={edittableItem.desc}/>
          )
        })
       }
    }
  }
  closeEditing = () => {
    this.setState({editPopup: null})
  }

  render() {
    const {
      state: {
        todos,
        editPopup
      }
    } = this
    return (
      <div className="App">
        <Header />
        {!!editPopup && editPopup}
        <hr />
        <div className="content">
          <h1>Туду лист</h1>
          <Add add={this.handleAdd} />
          {!todos.length && <span>Nothing</span>}
          {todos.map(item => {
            return (
              <Todo
                qwe={this.btn}
                id={item.id}
                title={item.title}
                desc={item.desc}
                key={item.id}
                edit={this.openEditing}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default App;
