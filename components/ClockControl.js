import React from 'react';
import Timer from './Timer';

export default React.createClass({

  render() {
    return (
      <div className="buttons">
        <button id="startButton" onClick={this.props.start}> - START - </button>

        <button id="pauseButton" onClick={this.props.pause}> - PAUSE - </button>

        <button id="resetButton" onClick={this.props.reset}> - RESET - </button>
      </div>
    );
  }

});
