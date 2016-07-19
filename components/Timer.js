import React from 'react'

export default React.createClass({
  getInitialState: () => {
    return {timeRemaining: 10};
  },
  tick: function () {
    this.setState({timeRemaining: this.state.timeRemaining - 1,
    				mins: Math.floor(this.state.timeRemaining/60),
                    seconds: this.state.timeRemaining % 60});
  },
  componentDidMount: function () {
    this.interval = setInterval(this.tick, 1000)
  },
  componentWillUnmount: () => {
    clearInterval(this.interval);
  },
  componentWillUpdate: function () {
    if (this.state.timeRemaining === 0) { window.alert('MUSIC TIME')}
  },
  render: function () {
    return (
      <div>
     	{this.state.mins}:{this.state.seconds}
      </div>
    );
  }
});
