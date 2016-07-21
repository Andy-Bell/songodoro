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
    this.spawnNotification('Music Time!')
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
    this.spawnNotification('Break Over :(')
  },

  spawnNotification: function(bodyTxt) {
    var options = {
        body: bodyTxt,
        icon: './note.png'
    }
    var n = new Notification('Songodoro',options);
  },

  render() {
    return (
      <div>
        <div className="title"><span className="slash">//  </span><span className="title-name">Songodoro</span><span className="slash">  //</span></div>
        {this.state.currentTrack ? <SpotifyPlayer track={this.state.currentTrack}/>  : null }
        <Timer ref="timer" activatePlayer={this.mountPlayer} deactivatePlayer={this.unMountPlayer} displayTimer={this.state.currentTrack ? false : true }/>
      </div>
    )
  }

});
