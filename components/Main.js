import React from 'react';
import Timer from './Timer'

export default React.createClass({

  getInitialState: () => { return {spotify: <div>NO MUSIC</div>}
  },
  renderPlayer: function () {
    this.setState({spotify: <div>MUSIC TIME</div>})
  },

  render() {
    return (
      <div>
        <h1>{this.props.hello}</h1>
        <Timer activatePlayer={this.renderPlayer}/>
        {this.state.spotify}
      </div>
    );
  }

});
