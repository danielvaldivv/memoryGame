import React, { useContext, useState  } from 'react'
import AppContext from '../../context/AppContext'

import './Verification.styl'

const Verification = () => {
  const { state, setPointsUp, setPointsDown } = useContext(AppContext)
  const { word, disabledInput } = state
  const wordState = word.toLowerCase()

  const [wordInput, setWordInput] = useState("");

  const handleChange = (event) => {
    setWordInput(event.target.value.toLowerCase())
  }
  
  const compareWords = (wordInt) => {
    if (wordInt === wordState) { setPointsUp() }
    else { setPointsDown()}
  }

  const handleSubmit = (event) => {
    compareWords(wordInput)
    setWordInput("")
    event.preventDefault()
  }


  return (
    <form onSubmit={handleSubmit} >
      <input
        id="word"
        type="text"
        value={wordInput}
        placeholder="Ingresa el texto del recuadro"
        onChange={handleChange} disabled={disabledInput}
      /> <br/>
      <button type="submit" disabled={disabledInput}>Comparar</button>
    </form>
  )
};

export default Verification;
