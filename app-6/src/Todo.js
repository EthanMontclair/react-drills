import React, { Component } from 'react';

class Todo extends Component {
    render() {
        return(
            <h1>{this.props.task}</h1>
        )
    }
}

    export default Todo 