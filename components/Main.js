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

  unMountPlayer: function() {
    this.setState({currentTrack: null, tracks: this.state.tracks});
  },

  render() {
    return (
      <div>
        <h1>Songodoro</h1>
        <Timer ref="timer" activatePlayer={this.mountPlayer} deactivatePlayer={this.unMountPlayer} displayTimer={this.state.currentTrack ? false : true }/>
        {this.state.currentTrack ? <SpotifyPlayer track={this.state.currentTrack}/>  : null }
      </div>
    )
  }

});
