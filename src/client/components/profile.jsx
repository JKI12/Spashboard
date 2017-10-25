import React from 'react';

export default (props) => {
  return(
    <div className="c-profile">
      <h2>Me:</h2>
      <img className="c-profile__image" src={props.profileImage} />
      <p className="c-profile__name">{props.name}</p>
      <p className="c-profile__followers">{`Followers: ${props.followers}`}</p>
    </div>
  );
};
