import React from 'react';

function MusicItem(props) {
  return(
    <div>
    <h4>{props.key}</h4>
    <p>{props.title}</p>
    <p>{props.children}</p>
    </div>
  )
}

export default MusicItem;
