import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super()
    
    this.state ={
      arrList: ['Jimi H', 'Guayaki', 'Boo Boo', 'Compass'],
    }
  }

  render(){
    let arrListDisplay = this.state.arrList.map((element, index) => {
      return <h2 key={index}>{element}</h2>
    })

    return(
      <div className="App">{arrListDisplay}</div>
    )
  }
}

export default App