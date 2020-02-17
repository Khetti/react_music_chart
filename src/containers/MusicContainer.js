import React, {Component} from 'react';

class MusicContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      songs: []
    };
  }

  render() {
    return(
      <div>
      <h1>Top 20 Chart</h1>
      </div>
    );
  }

}

export default MusicContainer;
