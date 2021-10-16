import React, {useContext} from 'react'
import AppContext from '../../context/AppContext'

const WordRender = () => {
  const { state } = useContext(AppContext);
  const { word } = state;

  
  return <h3>{word}</h3>
}

export default WordRender
