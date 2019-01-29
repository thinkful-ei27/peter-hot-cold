import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import store from './store';
 
import './reset.css';
import './index.css';

import Game from './components/game';

ReactDOM.render(
  <Provider store={store}>
    <Game />
  </Provider>,
  document.getElementById('root')
);

// console.log('INITIAL STATE ==========', store.getState());

// store.dispatch(addGuess(37));
// store.dispatch(addGuess(4));
// store.dispatch(addGuess(95));
// store.dispatch(addGuess(56));
// console.log('ADD_GUESS ==========', store.getState());

// store.dispatch(resetGame());
// console.log('RESET_GAME ==========', store.getState());