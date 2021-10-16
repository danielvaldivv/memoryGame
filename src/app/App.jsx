import React from 'react'
import useInitialState from './hooks/useInitialState';
import AppContext from '../context/AppContext';

import Description from '../components/Description';
import StartGameButton from '../components/StartGameButton';

const App = () => {

  const initialState = useInitialState();
  console.log(initialState.state)

  return (
    <AppContext.Provider value={initialState}>
      <header>
        <h1>Memory Game</h1>
      </header>

      <main>
        <Description />
        <section className="MemoryGame--Interface">
          <StartGameButton />
          <h3>{initialState.state.word}</h3>
          <form>
            <input type="text" id="word" placeholder="Ingresa el texto del recuadro azúl" />
          </form>
        </section>
      </main>
    </AppContext.Provider>
  )
}

export default App;