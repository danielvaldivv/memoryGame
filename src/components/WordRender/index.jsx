import React, {useContext} from 'react'
import AppContext from '../../context/AppContext'

import './WordRender.styl'


const WordRender = () => {
  const { state } = useContext(AppContext);
  const { renderWord } = state;
  
  return <h3 className="WordRender">{renderWord}</h3>
}

export default WordRender
