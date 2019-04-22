import React, { Component } from 'react'
import BoardCollab from '../BoardCollab/index'
import NextPlayer from '..//NextPlayer/index'

import './styles.css'

class BoardWrapper extends Component{
    state = { player: "X"}

    handleClick = () => {
        this.setState({ player: this.state.player === "X" ? "0" : "X"})
    }

    render(){
        return (
            <main className="board-wrapper">
                <NextPlayer player={this.state.player} />
                <BoardCollab onClick={this.handleClick}  />
            </main>
        )
    }
}

export default BoardWrapper;