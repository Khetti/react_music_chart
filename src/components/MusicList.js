import React, {Fragment} from 'react';
import MusicItem from '../components/MusicItem.js'

function MusicList(props) {
  const chartList = props.songs.map((song, index) => {
    return(
      <MusicItem title={song.entry.name.label} key={index}>
      {song.entry.artist.label}
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
