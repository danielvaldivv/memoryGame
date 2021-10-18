import React from 'react'
import useInitialState from '../hooks/useInitialState';
import AppContext from '../context/AppContext';

import Description from '../components/Description';
import StartGameButton from '../components/StartGameButton';
import WordRender from '../components/WordRender';
import Verification from '../components/Verification';

import './App.styl'

const App = () => {

  const initialState = useInitialState();
  // console.log(initialState.state)

  let render

  if (initialState.state.strike === 3) { render = <h1 className="loseMessege">You Lose</h1>}

  else if (initialState.state.levelValue===3 && initialState.state.points ===2){ render = <h1 className="winMessege">You Win</h1>}

  else {
    render =
      <section className="MemoryGame--Interface">
        <section className="MemoryGame--Interface__info">
          <p>Level: <span className="levels">{initialState.state.levelValue}</span> de <span> 3</span></p>
          <p>Points: <span className="points">{initialState.state.points}</span> de <span> 2</span></p>
          <p>Strike: <span className="strikes">{initialState.state.strike}</span> de <span> 3</span></p>
        </section>
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