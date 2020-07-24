import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import List from './List';
import NewTask from './NewTask';

class App extends Component {
  constructor() {
    super()

    this.state = {
      list: ['chocolate', 'vanilla']
    }
  }

addTask = (value) => {
  // let newList = this.state.list.slice()
  // newList.push(value)
  // this.setState({ list: newList})
  this.setState ({ list: [ ...this.state.list, value ] })
}

  render() {
    return(
      <div>
        <List taskList={this.state.list}/>
        <NewTask addTask={this.addTask}/>
      </div>
    )
  }
}

export default App