import React from 'react';
import Timer from './Timer'

export default React.createClass({
  spotifyPlayer: () => {
    window.alert('MUSIC TIME')
  },
  render() {
    return (
      <div>
        <h1>{this.props.hello}</h1>
        <Timer activatePlayer={this.spotifyPlayer}/>
      </div>
    );
  }

});
