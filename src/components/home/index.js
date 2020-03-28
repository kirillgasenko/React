import React, { Component } from "react";
import {connect} from 'react-redux';
import { removeTask, addTask, editTask } from '../../actions/todoActions.js'
import styles from './Home.module.css';

import Add from "../add";
import Header from "../header";
import Todo from "../todo";
import Modal from '../modal';

class App extends Component {
  state = {
    todos: [],
    isEditPopup: false,
    textEdit: []
  };

  addTask = (title, car) => {
    const {addTask} = this.props;
    addTask(title, car)
  };

  handleRemoveTask = id => {
    const {removeTask} = this.props;
    removeTask(id);
  };


  handleEditClick = data => {
    const {editTask} = this.props;
    editTask(data)
    this.closeEditing();
  };

  openEditing = id => {
    const {todos} = this.props
    const selectedTodo = todos.find(item => {
      return item.id === id
    })
    if(selectedTodo){
      this.setState({textEdit: selectedTodo})
      this.setState({isEditPopup: true})
    }
    
  };
  
  closeEditing = () => {
    this.setState({isEditPopup: false})
  };
  
  render() {
    const {todos} = this.props;
    const {isEditPopup, textEdit} = this.state;
   
    return (
      <div className={styles.App}>
        <Header />
        {isEditPopup && <Modal edit={this.handleEditClick} id={textEdit.id} title={textEdit.title} desc={textEdit.desc}/>}
        <hr />
        <div className={styles.content}>
          <h1 className={styles.font}>Туду лист</h1>
          <Add onAdd={this.addTask} />
          {!todos.length && <span>Nothing</span>}
          {todos.map(item => {
            return (
              <Todo
                id={item.id}
                title={item.title}
                desc={item.desc}
                key={item.id}
                onEdit={this.openEditing}
                onRemoveTask={this.handleRemoveTask}
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
    todos: state.todos,
    data: state.data
  }), 
  {removeTask, addTask, editTask})(App);