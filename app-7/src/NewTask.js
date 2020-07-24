import React, { Component } from 'react'

class NewTask extends Component{
    constructor() {
        super()

        this.state = {
            task: "",
        }
    }

    handleChange(value){
        this.setState({ task: value})
    }
    render(){
        return(
            <div>
                <input onChange={(e) => {this.handleChange(e.target.value)}}/>
                <button onClick={() => this.props.addTask(this.state.task)}>add</button>
            </div>
        )
    }
}

export default NewTask