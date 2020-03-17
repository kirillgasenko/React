import React, { Component } from "react";
import {connect} from 'react-redux';
import "../../App.css";
import { removeTextTask, addTextTask, editTextTask } from '../../actions/index.js'

import Add from "../add";
import Header from "../header";
import Todo from "../todo";
import Modal from '../modal';

class App extends Component {
  state = {
    todos: [],
    editPopup: null,
    textEdit: []
  };

  addTask = (title, car) => {
    const {addTextTask} = this.props;
    addTextTask(title, car)
  };

  handleRemoveClick = id => {
    const {props: { removeTextTask } } = this;
    removeTextTask(id);
  };


  editTask = data => {
    const {editTextTask} = this.props;
    editTextTask(data)
    this.closeEditing();
  };

  openEditing = id => {
    const {todos} = this.props

    if(todos.length > 0){
      const todo = todos.find(item => {
        return item.id === id
      })
      if(todo){
        this.setState({textEdit: todo})
        this.setState({editPopup: true})
      }
    }
  };
  
  closeEditing = () => {
    this.setState({editPopup: null})
  };
  
  render() {
    const {todos} = this.props
    const {editPopup, textEdit} = this.state;
    
    return (
      <div className="App">
        <Header />
        {editPopup && <Modal edit={this.editTask} id={textEdit.id} title={textEdit.title} desc={textEdit.desc}/>}
        <hr />
        <div className="content">
          <h1>Туду лист</h1>
          <Add onAdd={this.addTask} />
          {!todos.length && <span>Nothing</span>}
          {todos.map(item => {
            return (
              <Todo
                onRemoveTask={this.handleRemoveClick}
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
  };
}

export default connect(
  state => ({
    todos: state.todos
  }), 
  {removeTextTask, addTextTask, editTextTask})(App);
