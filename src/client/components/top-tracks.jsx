import React from 'react';
import TopTrackItem from './top-track-item';

class TopTracks extends React.Component {
  get errorText() {
    if (this.props.error !== "") {
      return <p>There has been an error getting top tracks</p>;
    }
  }

  get topTracks() {
    if (this.props.top.length > 0) {
      return this.props.top.map((track, index) => {
        return <TopTrackItem key={index} {...track} ranking={index + 1} />
      });
    } else {
      return  <p>No top tracks, this is generally because you haven't had Spotify for around a year - Try the other tabs above</p>
    }
  }

  get title() {
    if (this.props.top.length > 0) {
      return <div><h2>Your Top Tracks:</h2><p>Scroll to see more - Hover to hear a preview</p></div>
    }
  }

  render() {
    return(
      <div className="c-top">
        <div className="c-top__content">
          { this.errorText }
          { this.title }
          { this.topTracks }
        </div>
      </div>
    );
  }
}

export default TopTracks;
