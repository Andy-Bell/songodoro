import React from 'react';
import SpotifyPlayer from './SpotifyPlayer';
import ClockControl from './ClockControl';

export default React.createClass({

  render() {
    return (
      <div>
        <SpotifyPlayer />
        <ClockControl />
      </div>
    );
  }

});
