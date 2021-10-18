import React, { useContext  } from 'react'
import AppContext from '../../context/AppContext'

import './Verification.styl'

const Verification = () => {
  const { state, setPointsUp, setPointsDown } = useContext(AppContext)
  const { word, disabledInput } = state
  const wordState = word.toLowerCase()

  // const shoot = undefined

  const compareWords = () => {
    const wordInput = document.getElementById("word").value.toLowerCase()

    if (wordInput === wordState) { setPointsUp() }
    else { setPointsDown()}
  }

  return (
    <form >
      <input id="word" type="text" placeholder="Ingresa el texto del recuadro" word="word" disabled={disabledInput} /> <br/>
      <button type="button" onClick={ compareWords } disabled={disabledInput}>Comparar</button>
    </form>
  )
};

export default Verification;
