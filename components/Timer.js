import React from 'react'
import ClockControl from './ClockControl'

export default React.createClass({
  getInitialState: () => {
    return {timeRemaining: 1, secDisplay: '05', minDisplay: '00'};
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
    this.interval = null
  },
  resetFunc: function() {
    clearInterval(this.interval);
    this.interval = null
    this.setState({timeRemaining: 10, seconds: '05', minutes: '00'});
  },
  componentWillUnmount: () => {
    clearInterval(this.interval);
    this.interval = null
  },
  componentWillUpdate: function () {
    if (this.state.timeRemaining === 0) {
      this.props.activatePlayer();
      clearInterval(this.interval);
      this.interval = null
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
