import React, {Component, Fragment} from 'react';
import MusicList from '../components/MusicList.js';

class MusicContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      songs: []
    };
  }

  componentDidMount() {
    const url = "https://itunes.apple.com/gb/rss/topsongs/limit=20/json";
    fetch(url)
    .then(res => res.json())
    .then(data => this.setState({songs: data}))
    .catch(err => console.error);
  }

  render() {
    return(
      <Fragment>
      <h1>Top 20 Chart</h1>
      <MusicList songs={this.state.songs}/>
      </Fragment>
    );
  }

}

export default MusicContainer;
