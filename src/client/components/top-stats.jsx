import React from 'react';
import Profile from './profile';
import Features from './features';

class TopStats extends React.Component {
  get profile() {
    const profile = this.props.profile;
    return profile.error !== "" ? <p>There has been an error getting your profile</p> : <Profile {...profile} />;
  }

  get features() {
    const features = this.props.features;
    return features.error !== "" ? <p>There has been an error getting your features</p> : <Features {...features} />;
  }

  render() {
    return(
      <div className="c-top">
        <div className="c-top-box__top">
          { this.profile }
        </div>
        <div className="divider" />
        <div className="c-top-box__bottom">
          { this.features }
        </div>
      </div>
    );
  }
}

export default TopStats;
