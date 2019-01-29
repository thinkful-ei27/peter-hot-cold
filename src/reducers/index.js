import { ADD_GUESS, RESET_GAME } from '../actions/index';
import {SECRET_ANSWER} from '../config'
console.log(SECRET_ANSWER)

const initialState = {
  guesses: [],
  feedback: 'Make your guess!',
  auralStatus: '',
  // correctAnswer: SECRET_ANSWER
}

function getAuralStatus(guesses, feedback) {
  // If there's not exactly 1 guess, we want to
  // pluralize the nouns in this aural update.
  const pluralize = guesses.length !== 1;

  let  auralStatus = `Here's the status of the game right now: ${feedback} You've made ${guesses.length} ${pluralize ? 'guesses' : 'guess'}.`;

  if (guesses.length > 0) {
    auralStatus += ` ${pluralize ? 'In order of most- to least-recent, they are' : 'It was'}: ${guesses.reverse().join(', ')}`;
  }
  return  auralStatus;
}

function getFeedback (guess, answer) {
  guess = parseInt(guess, 10);
  if (isNaN(guess)) {
    return 'Please enter a valid number';
  }

  const difference = Math.abs(guess - answer);

  if (difference >= 50) {
    return 'You\'re Ice Cold...';
  } else if (difference >= 30) {
    return 'You\'re Cold...';
  } else if (difference >= 10) {
    return 'You\'re Warm.';
  } else if (difference >= 1) {
    return 'You\'re Hot!';
  } else {
    return 'You got it!';
  }
}

const hotColdReducer = (state = initialState, action) => {
  if (action.type === ADD_GUESS) {
    return {
      ...state,
      guesses: [...state.guesses, action.guess],
      feedback: getFeedback(action.guess, state.correctAnswer),
      auralStatus: getAuralStatus(state.guesses, state.feedback)
    }
  } else if (action.type === RESET_GAME) {
    return ({
      ...initialState,
      correctAnswer: SECRET_ANSWER()
    })
  }
  return state;
}

export default hotColdReducer;