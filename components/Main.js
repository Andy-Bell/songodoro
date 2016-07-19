import React from 'react';
import Timer from './Timer'

export default React.createClass({

  render() {
    return (
      <div>
        <h1>{this.props.hello}</h1>
        <Timer />
      </div>
    );
  }

});
