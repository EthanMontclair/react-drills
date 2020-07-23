import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Image from './Image'

class App extends Component {
  constructor() {
    super()
    this.state ={
      url1: "https://http.cat/409",
      url2:'https://http.cat/400'
    }
  }
  
  render() {
    return (
      <div className="App">
        <Image url={this.state.url1} />
        <Image url={this.state.url2}/>
      </div>
    );
  }
}

export default App;