import React from 'react';
import BoardCollab from './components/BoardCollab/index'
import NextPlayer from './components/NextPlayer/index'

const App = () => (
    <>
        <NextPlayer />
        <BoardCollab qtd="9" />
    </>
)

export default App;
