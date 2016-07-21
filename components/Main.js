import React from 'react';
import SpotifyPlayer from './SpotifyPlayer';
import Timer from './Timer'
import { trackList } from '../tracks'
import sample from 'lodash/sample'

export default React.createClass({

  getInitialState: () => {
    return { currentTrack: null, tracks: trackList };
  },

  mountPlayer: function () {
    this.selectTrack();
  },

  selectTrack: function () {
    let chosenTrack = sample(this.state.tracks);
    this.setState({ currentTrack: chosenTrack,
                    tracks: (this.state.tracks).filter( (track) => {
                      return track != chosenTrack
                    })
                  })
    return chosenTrack;
  },


  render() {

    return (
      <div>
        <h1>Songodoro</h1>
        <Timer activatePlayer={this.mountPlayer}/>
        {this.state.currentTrack ? <SpotifyPlayer track={this.state.currentTrack}/> : null}
      </div>
    )
  }

});
