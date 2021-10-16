import { useState } from 'react'
import initialState from '../../initialState'

const useInitialState = () => {
  const [state, setState] = useState(initialState)

  const newWord = () => {
    const randomNumber = () => (parseInt(Math.random() * (20 - 0)))

    if(state.levelValue === 1 ) {
      const wordRender = state.levelOne.words[randomNumber()];
      setState({...state, word:wordRender})
    }

    else if (state.levelValue === 2 ) {
      const wordRender = state.levelTwo.words[randomNumber()];
      setState({...state, word:wordRender})
    }

    else if (state.levelValue === 3 ) {
      const wordRender = state.levelThree.words[randomNumber()];
      setState({...state, word:wordRender})
    }

  }

  return {
    state,
    newWord
  }
}

export default useInitialState
