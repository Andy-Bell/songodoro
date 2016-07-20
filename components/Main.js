import React from 'react';
import SpotifyPlayer from './SpotifyPlayer';
import ClockControl from './ClockControl';
import Timer from './Timer'


export default React.createClass({

  getInitialState: () => { return {spotify: ''}
  },
  renderPlayer: function () {
    this.setState({spotify: <SpotifyPlayer />})
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
