import React from 'react'
import ClockControl from './ClockControl'

export default React.createClass({
  getInitialState: () => {
    return {timeRemaining: 4, seconds: '40', minutes: '01'};
  },
  testing: function() {
    console.log('Andy');
  },
  tick: function () {
    this.setState({timeRemaining: this.state.timeRemaining - 1,
                    seconds: ('0' + this.state.timeRemaining % 60).slice(-2),
                    minutes: ('0' + Math.floor(this.state.timeRemaining / 60)).slice(-2)
    });
  },
  startFunc: function () {
    this.interval = setInterval(this.tick, 1000)
  },
  pauseFunc: function() {
    clearInterval(this.interval);
  },
  resetFunc: function() {
    clearInterval(this.interval);
    this.setState({timeRemaining: 4, seconds: '40', minutes: '01'});
  },
  componentWillUnmount: () => {
    clearInterval(this.interval);
  },
  componentWillUpdate: function () {
    if (this.state.timeRemaining === 0) {
      this.props.activatePlayer();
      clearInterval(this.interval);
    }
  },
  render: function () {
    return (
      <div className="timer">
     	{this.state.minutes}:{this.state.seconds}
      <ClockControl start={this.startFunc} pause={this.pauseFunc} reset={this.resetFunc} />
      </div>
    );
  }
});
