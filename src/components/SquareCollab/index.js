import React, { Component } from 'react';
import './styles.css';

class SquareCollab extends Component{
    constructor(props){
        super(props);
        this.state = {
            content: "X"
        }
    }

    handleClick = () => {
        const newState = {}
        this.state.content === "X" ? newState.content = "0" : newState.content = "X"
        this.setState(newState)
    }

    render(){
        return (<button onClick={this.handleClick} className="square-collab">{this.state.content}</button>)
    }
}

export default SquareCollab;