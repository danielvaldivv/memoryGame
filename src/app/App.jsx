import React from 'react'
import useInitialState from '../hooks/useInitialState';
import AppContext from '../context/AppContext';

import Description from '../components/Description';
import StartGameButton from '../components/StartGameButton';
import WordRender from '../components/WordRender';
import Verification from '../components/Verification';

const App = () => {

  const initialState = useInitialState();
  console.log(initialState.state)

  let render

  if (initialState.state.strike === 3) { render = <h3>You Lose</h3>}

  else if (initialState.state.levelValue===3 && initialState.state.points ===3){ render = <h3>You Win</h3>}

  else {
    render =
      <section className="MemoryGame--Interface">
        <p>Level: {initialState.state.levelValue} de 3</p>
        <p>Points: {initialState.state.points} de 2</p>
        <p>Strike: {initialState.state.strike} de 3</p>
        <StartGameButton />
        <WordRender />
        <Verification />
      </section>
  }


  return (
    <AppContext.Provider value={initialState}>
      <header>
        <h1>Memory Game</h1>
      </header>

      <main>
        {render}
        <Description />
      </main>
    </AppContext.Provider>
  )
}

export default App;