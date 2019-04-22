import React, { Component } from 'react';
import './styles.css';

class SquareCollab extends Component{
    constructor(props){
        super(props);
        this.state = {
            content: ""
        }
    }

    handleClick = () => {       
        this.setState(this.state.content === "X" ? {content: "0"} : {content: "X"})
    }

    render(){
        return (<button onClick={this.handleClick} className="square-collab">{this.state.content}</button>)
    }
}

export default SquareCollab;