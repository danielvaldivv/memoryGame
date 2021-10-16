import initialState from "./initialState";

export function newWord() {
  const state = initialState
  const levelValue = state.levelValue

  const showWord = () => {
    switch (levelValue) {
      case  1:
        level = initialState.levelOne;
        break;

      case 2:
        level = initialState.levelTwo;
        break;

      case 3:
        level = initialState.levelThree;
        break

      default:
        console.log('error')
    }

  return ( )
}