import React from 'react';
import Timer from './Timer';

export default React.createClass({

  render() {
    return (
      <div>
        <button id="startButton" onClick={this.props.start}> Start </button>

        <button id="pauseButton" onClick={this.props.pause}> Pause </button>

        <button id="resetButton" onClick={this.props.reset}> Reset </button>
      </div>
    );
  }

});
