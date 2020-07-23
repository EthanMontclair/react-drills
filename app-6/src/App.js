import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Todo from './Todo'

class App extends Component {
  constructor(){
    super()

    this.state = {
      todoList: [],
      input: ""
    }

  this.handleAddTask = this.handleAddTask.bind(this);

  }

  handleInputChange(value) {
    this.setState({ input: value });
  }

  handleAddTask() {
    this.setState({
      list: [...this.state.todoList, this.state.input],
      input: ""
    });
  }

  render() {
    let list = this.state.todoList.map((element, index) => {
      return <Todo key={index} task={element} />;
    });

    return (
      <div className="App">
        <h1>My to-do list:</h1>

        <div>
          <input
            value={this.state.input}
            placeholder="Enter new task"
            onChange={e => this.handleInputChange(e.target.value)}
          />

          <button onClick={this.handleAddTask}>Add</button>
        </div>
       {list}
      </div>
    );
  }
}

export default App