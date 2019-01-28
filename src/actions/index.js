const ADD_GUESS = 'ADD_GUESS';
const SET_FEEDBACK = 'SET_FEEDBACK';
const SET_AURAL_STATUS = 'SET_AURAL_STATUS';
const SET_CORRECT_ANSWER = 'SET_CORRECT_ANSWER';

const addGuess = guess => ({
  type: ADD_GUESS,
  guess
});

const setFeedback = feedback => ({
  type: SET_FEEDBACK,
  feedback
});

const setAuralStatus = auralStatus => ({
  type: SET_AURAL_STATUS,
  auralStatus
});

const setCorrectAnswer = answer => ({
  type: SET_CORRECT_ANSWER,
  answer
});

export default {
  ADD_GUESS,
  SET_FEEDBACK,
  SET_AURAL_STATUS,
  SET_CORRECT_ANSWER,
  addGuess,
  setFeedback,
  setAuralStatus,
  setCorrectAnswer
}