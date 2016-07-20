import React from 'react'

export default React.createClass({
  getInitialState: () => {
    return {timeRemaining: 5, secDisplay: '00', minDisplay: '25'};
  },
  tick: function () {
    this.setState({timeRemaining: this.state.timeRemaining - 1,
                    seconds: ('0' + this.state.timeRemaining % 60).slice(-2),
                    minutes: ('0' + Math.floor(this.state.timeRemaining / 60)).slice(-2)
    });
  },
  componentDidMount: function () {
    this.interval = setInterval(this.tick, 1000)
  },
  componentWillUnmount: () => {
    clearInterval(this.interval);
  },
  componentWillUpdate: function () {
    if (this.state.timeRemaining === 0) { this.props.activatePlayer(),
                                          clearInterval(this.interval) }
  },
  render: function () {
    return (
      <div>
     	{this.state.minutes}:{this.state.seconds}
      </div>
    );
  }
});
