import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component{
  constructor() {
    super()

    this.state = {
      filterString: "",
      movies: ['LOTR', 'Good Will Hunting', 'Signs', 'Oblivian', 'Manchester By The Sea'],
    }
  }

  handleChange(filter) {
    this.setState({ filterString: filter })
  }

  render(){
    let moviesDisplay = this.state.movies.filter((element, index) => { 
      return element.includes(this.state.filterString)
    })
    .map((element, index) => { 
    return <h2 key= {index}>{element}</h2>
    } )
    return(
      <div className="App">
        <input onChange={e => this.handleChange(e.target.value)} type="text" />
        {moviesDisplay}
      </div>
    )
  }
}

export default App;