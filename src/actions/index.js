const ADD_GUESS = 'ADD_GUESS';
const RESET_GAME = 'RESET_GAME';

const addGuess = guess => ({
  type: ADD_GUESS,
  guess
});


const resetGame = answer => ({
  type: RESET_GAME,
  answer
});

export default {
  ADD_GUESS,
  RESET_GAME
}