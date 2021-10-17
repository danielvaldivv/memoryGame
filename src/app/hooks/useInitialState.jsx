import { useState } from 'react'
import initialState from '../../initialState'

const useInitialState = () => {
  const [state, setState] = useState(initialState)

  const setWord = (setNewWord, time) => {
    setState({...state, word:(setNewWord), renderWord:(setNewWord), disabledInput:(false)})

    setTimeout(() => {
      // console.log('int')
      setState({...state, word:(setNewWord), renderWord:(" "), disabledInput:(false)})
    }, time);
  }

  // const disabledInputSwitch = () => {
  //   setState({...state, })
  // }

  const newWord = () => {
    const randomNumber = () => (parseInt(Math.random() * (20 - 0)))

    // disabledInputSwitch()

    if(state.levelValue === 1 ) {
      const wordRender = state.levelOne.words[randomNumber()];
      // setState({...state, word:wordRender})
      setWord(wordRender, state.levelOne.time)
    }

    else if (state.levelValue === 2 ) {
      const wordRender = state.levelTwo.words[randomNumber()];
      setWord(wordRender, state.levelTwo.time)
    }

    else if (state.levelValue === 3 ) {
      const wordRender = state.levelThree.words[randomNumber()];
      setWord(wordRender, state.levelThree.time)
    }

  }

  const setPointsUp = () => {
    if (state.points < 2) {
      setState({...state, points:(state.points + 1), word:(""), disabledInput:(true)})
    } else if ( state.points === 2) {
      setState({...state, levelValue:(state.levelValue + 1), points:(0), word:(""),  disabledInput:(true)})
    }

  }

  const setPointsDown = () => {
    if (state.points > 0) {
      setState({...state, points:(state.points - 1),  disabledInput:(true)})
    } else if ( state.points === 0 && state.levelValue > 1) {
      setState({...state, levelValue:(state.levelValue - 1),  disabledInput:(true)})
    } else {
      setState({...state, strike:(state.strike + 1),  disabledInput:(true)})
    }
  }


  return {
    state,
    newWord,
    setPointsUp,
    setPointsDown,
    // disabledInputSwitch,
  }
}

export default useInitialState
