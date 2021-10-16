import React, { useContext } from 'react';
import AppContext from '../../context/AppContext';

const StartGameButton = () => {
  const { newWord } = useContext(AppContext);

  return (
    <>
      <button type="button" onClick={ newWord } >Nueva Palabra</button>
    </>
  )
}

export default StartGameButton