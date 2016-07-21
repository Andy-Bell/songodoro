import React from 'react'
import ClockControl from './ClockControl'

export default React.createClass({
  getInitialState: () => {
    return {timeRemaining: 1499, secDisplay: '00', minDisplay: '25'};
    this.tick = this.tick.bind(this);
  },
  tick: function () {
    this.setState({timeRemaining: this.state.timeRemaining - 1,
                    seconds: ('0' + this.state.timeRemaining % 60).slice(-2),
                    minutes: ('0' + Math.floor(this.state.timeRemaining / 60)).slice(-2)
    });
  },
  startFunc: function () {
    if (this.interval) {
    } else {
      this.interval = setInterval(this.tick, 1000)
    }
  },
  pauseFunc: function() {
    clearInterval(this.interval);
  },
  resetFunc: function() {
    clearInterval(this.interval);
    this.setState({timeRemaining: 1499, seconds: '00', minutes: '25'});
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
     	<span>{this.state.minutes}:{this.state.seconds}</span>
      <ClockControl start={this.startFunc} pause={this.pauseFunc} reset={this.resetFunc} />
      </div>
    );
  }
});
