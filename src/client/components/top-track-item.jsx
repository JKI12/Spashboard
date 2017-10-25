import React from 'react';

let audio;

const playPreview = (props) => {
  const url = props.previewUrl;
  audio = new Audio(url);
  audio.play();
};

const stopPreview = () => {
  if (audio) {
    audio.pause();
    audio.currentTime = 0;
  }
};

export default (props) => {
  const artistsMap = props.artists.map((artist) => {
    return artist.name;
  });

  const artists = artistsMap.join(', ');

  return(
    <div className="top-item">
      <img className="top-item__media" src={props.album.images[0].url} onMouseEnter={() => playPreview(props)} onMouseLeave={stopPreview} />
      <p className="top-item__text"><b>{`#${props.ranking}`}</b>: {props.name}</p>
      <p className="top-item__sub-text">{artists}</p>
    </div>
  );
};
