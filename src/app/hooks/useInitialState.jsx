import { useState } from 'react'
import initialState from '../../initialState'

const useInitialState = () => {
  const [state, setState] = useState(initialState)

  const setWord = (setNewWord) => {
    setState({...state, word:(setNewWord)})
  }

  const newWord = () => {
    const randomNumber = () => (parseInt(Math.random() * (20 - 0)))

    if(state.levelValue === 1 ) {
      const wordRender = state.levelOne.words[randomNumber()];
      // setState({...state, word:wordRender})
      setWord(wordRender)
    }

    else if (state.levelValue === 2 ) {
      const wordRender = state.levelTwo.words[randomNumber()];
      setWord(wordRender)
    }

    else if (state.levelValue === 3 ) {
      const wordRender = state.levelThree.words[randomNumber()];
      setWord(wordRender)
    }

  }

  return {
    state,
    newWord
  }
}

export default useInitialState
