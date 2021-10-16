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

  const setPointsUp = () => {
    if (state.points < 3) {
      setState({...state, points:(state.points + 1), word:("")})
    } else if ( state.points === 3) {
      setState({...state, levelValue:(state.levelValue + 1), points:(0), word:("")})
    }

  }

  const setPointsDown = () => {
    if (state.points > 0) {
      setState({...state, points:(state.points - 1)})
    } else if ( state.points === 0 && state.levelValue > 1) {
      setState({...state, levelValue:(state.levelValue - 1)})
    } else { 
      setState({...state, strike:(state.strike + 1)})
     }
  }

  return {
    state,
    newWord,
    setPointsUp,
    setPointsDown
  }
}

export default useInitialState
