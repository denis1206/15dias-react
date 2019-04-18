import React from 'react'
import SquareCollab from '../SquareCollab';

import './styles.css'

const squareCollabs = qtd =>{
    const squares = [];

    while(qtd--){
        squares.push(<SquareCollab key={qtd} />)
    }

    return squares;
}

const BoardCollab = ({qtd}) => (
    <article className="board-collab">{squareCollabs(qtd)}</article>
);

export default BoardCollab;