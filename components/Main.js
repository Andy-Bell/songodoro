import React from 'react';
import Timer from './Timer'
import SpotifyPlayer from './SpotifyPlayer'
import { trackList } from '../tracks'
import sample from 'lodash/sample'



export default React.createClass({

  getInitialState: () => {
    return { spotify: null, tracks: trackList };
  },

  mountPlayer: function () {
    this.setState({spotify: <SpotifyPlayer />, tracks: this.state.tracks });
    this.selectTrack();
  },

  selectTrack: function () {
    let chosenTrack = sample(this.state.tracks);
    this.setState({ spotify: this.state.spotify,
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
        {this.state.spotify}
        {this.state.tracks.length}
      </div>
    )
  }

});
