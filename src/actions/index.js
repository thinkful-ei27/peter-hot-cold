const ADD_GUESS = 'ADD_GUESS';
const RESET_GAME = 'RESET_GAME';

const addGuess = guess => ({
  type: ADD_GUESS,
  guess
});


const resetGame = () => ({
  type: RESET_GAME
});

export {
  ADD_GUESS,
  RESET_GAME,
  addGuess,
  resetGame
}