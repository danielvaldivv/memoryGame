import React, { useContext  } from 'react'
import AppContext from '../../context/AppContext'

const Verification = () => {
  const { state, setPointsUp, setPointsDown } = useContext(AppContext)
  const { word } = state
  const wordState = word.toLowerCase()

  // const shoot = undefined

  const compareWords = () => {
    const wordInput = document.getElementById("word").value.toLowerCase()

    if (wordInput === wordState) { setPointsUp() }
    else { setPointsDown()}
  }

  return (
    <form >
      <input id="word" type="text" placeholder="Ingresa el texto del recuadro azúl" word="word" />
      <button type="button" onClick={ compareWords }>Comparar</button>
    </form>
  )
};

export default Verification;