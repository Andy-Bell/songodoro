import React from 'react';
import Timer from './Timer'
import SpotifyPlayer from './SpotifyPlayer'
var Spotifyapi = require('spotify-web-api-js')


export default React.createClass({


  getInitialState: () => { return {spotify: null}
  },
  componentWillMount: function () {
    var spotifyApi = new Spotifyapi()
    spotifyApi.setAccessToken('BQCqkQ_H8EO-y7VfWqtH5qB8FdjWYlze3abpP2cdc1pV9MfP7kmY5sQQkx2hHEVlwNMVFT2xj7CsJwJcqhS6vPERNlmvq1QcNUn6iIOoJfeOTXEansMXNLieB7rEWiWU1a281BgX8YG3kqVxJqK8mrjb')
    spotifyApi.getPlaylistTracks('cameronepstein','7Cm8i57BnVpMhJIA7671xv').then( (data) => {

    this.setState({spotify: this.state.spotify, tracks: data.items.reduce(function(track_uri_array, track_obj) {
                track_uri_array.push(track_obj.track.uri)
                return track_uri_array
                },[])
              })
              console.log(this.state.tracks)        
    })
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
        {this.state.tracks}
      </div>
    );
  }

});
