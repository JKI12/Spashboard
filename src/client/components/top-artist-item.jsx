import React from 'react';

export default (props) => {
  return(
    <div className="top-item">
      <img className="top-item__media" src={props.images[0].url} />
      <p className="top-item__text"><b>{`#${props.ranking}`}</b>: {props.name}</p>
    </div>
  );
};
