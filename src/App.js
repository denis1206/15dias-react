import React from 'react';
import BoardCollab from './components/BoardCollab/index'
import NextPlayer from './components/NextPlayer/index'
import BoardWrapper from './components/BoardWrapper/index'

const App = () => (
    <BoardWrapper>
        <NextPlayer />
        <BoardCollab qtd="9" />
    </BoardWrapper>
)

export default App;
