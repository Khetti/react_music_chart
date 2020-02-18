import React, {Fragment} from 'react';
import MusicItem from '../components/MusicItem.js'

function MusicList(props) {
  const chartList = props.songs.map((song, index) => {
    return(
      <MusicItem
      title={song.[entry].im:name.label}
      key={index}>
      {song.[entry].im:artist.label}
      </MusicItem>
    )
  });

  return(
    <Fragment>
      {chartList}
    </Fragment>
  )
}

export default MusicList;
