import React, { Component } from 'react';
import './App.css';
import Header from './components/header';
import Todo from './components/todo'


class App extends Component {
    state = {
      todos: []
  }

  componentDidMount = () =>{
    setTimeout(() => {
      this.setState({
        todos: [
          {
              id: 1,
              title: 'Some 1',
              desc: "something 1"
            },
            {
              id: 2,
              title: 'Some 2',
              desc: "something 2"
            },
            {
              id: 3,
              title: 'Some 3',
              desc: "something 3"
            },
            {
              id: 4,
              title: 'Some 4',
              desc: "something 4"
            }
        ]
      })
    }, 5000)
  }

  render(){
    return (
      <div className="App">
        <Header />
        <div className="content">
          <h1>Туду лист</h1>
          {!this.state.todos.length && (<span>Nothing</span>)}
          {
            this.state.todos.map(item => {
              return <Todo title={item.title} desc={item.desc} key={item.id}/>
            })
          }
        </div>
      </div>
    );
  }
}

export default App;
