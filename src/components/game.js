import React from 'react';

import Header from './header';
import GuessSection from './guess-section';
import StatusSection from './status-section';
import InfoSection from './info-section';
import { connect } from 'react-redux';
import { addGuess, resetGame } from '../actions/index';

class Game extends React.Component {

  render() {
    const { feedback, guesses, auralStatus } = this.props;
    const guessCount = guesses.length;
    document.title = feedback ? `${feedback} | Hot or Cold` : 'Hot or Cold';
    return (
      <div>
        <Header
          onRestartGame={() => this.props.dispatch(resetGame())}
          onGenerateAuralUpdate={() => this.generateAuralUpdate()}
        />
        <main role="main">
          <GuessSection
            feedback={feedback}
            guessCount={guessCount}
            onMakeGuess={guess => this.props.dispatch(addGuess(guess))}
          />
          <StatusSection guesses={guesses} 
            auralStatus={auralStatus}
          />
          <InfoSection />
        </main>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  guesses: state.guesses,
  feedback: state.feedback,
  auralStatus: state.auralStatus,
  // correctAnswer: state.correctAnswer
})

export default connect(mapStateToProps)(Game);