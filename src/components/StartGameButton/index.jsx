import React, { useContext } from 'react';
import AppContext from '../../context/AppContext';

const StartGameButton = () => {
  const { newWord, state } = useContext(AppContext);
  const { disabledWordGenerator } = state

  return (
    <>
      <button type="button" onClick={ newWord } disabled={disabledWordGenerator} >Nueva Palabra</button>
    </>
  )
}

export default StartGameButton