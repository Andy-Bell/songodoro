var React = require('react');


export default React.createClass({

  render: function() {
    return (
      <div className="spotify-player">
        <iframe src={"https://embed.spotify.com/?uri=" + this.props.track} width="100%" height="100%" frameborder="0" allowtransparency="true"></iframe>
      </div>
    );
  }

});


// https://api.spotify.com/v1/users/cameronepstein/playlists/7Cm8i57BnVpMhJIA7671xv/tracks?offset=0&limit=100&market=ES
