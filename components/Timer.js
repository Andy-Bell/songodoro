import React from 'react'
import ClockControl from './ClockControl'

export default React.createClass({
  getInitialState: () => {
    return {timeRemaining: 1, seconds: '10', minutes: '00', break: false};
    this.tick = this.tick.bind(this);
  },
  tick: function () {
    this.setState({timeRemaining: this.state.timeRemaining - 1,
                    seconds: ('0' + this.state.timeRemaining % 60).slice(-2),
                    minutes: ('0' + Math.floor(this.state.timeRemaining / 60)).slice(-2),
                    break: this.state.break
    });
  },
  breakTimer: function() {
    this.setState({timeRemaining: 40000000, seconds: '05', minutes: '00', break: true});
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
    this.setState({timeRemaining: 9, seconds: '10', minutes: '00', break: false});
  },
  componentWillUnmount: () => {
    clearInterval(this.interval);
    this.interval = null
  },
  componentWillUpdate: function () {
    if (this.state.timeRemaining === 0 && this.state.break === true) {
      this.props.deactivatePlayer();
      this.resetFunc();
    } else if (this.state.timeRemaining === 0) {
      this.props.activatePlayer();
      this.breakTimer();
    };
  },
  render: function () {
    return (
      <div className="timer">
     	{this.props.displayTimer ? <div className="numbers">{this.state.minutes}:{this.state.seconds}</div> : null}
      <ClockControl start={this.startFunc} pause={this.pauseFunc} reset={this.resetFunc} />
      </div>
    );
  }
});
