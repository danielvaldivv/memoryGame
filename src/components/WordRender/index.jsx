import React, {useContext} from 'react'
import AppContext from '../../context/AppContext'

const WordRender = () => {
  const { state } = useContext(AppContext);
  const { renderWord } = state;
  
  return <h3>{renderWord}</h3>
}

export default WordRender
