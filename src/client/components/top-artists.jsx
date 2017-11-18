import React from 'react';
import TopArtistItem from './top-artist-item';

class TopArtists extends React.Component {
  get errorText() {
    if (this.props.error !== "") {
      return <p>There has been an error getting top artists</p>;
    }
  }

  get topArtists() {
    if (this.props.top.length > 0) {
      return this.props.top.map((artist, index) => {
        return <TopArtistItem key={index} {...artist} ranking={index + 1} />
      });
    } else {
      return <p>No top artists, this is generally because you haven't had Spotify for around a year - Try the other tabs above</p>
    }
  }

  get title() {
    if (this.props.top.length > 0) {
      return <div><h2>Your Top Artists:</h2><p>Scroll to see more</p></div>
    }
  }

  render() {
    return(
      <div className="c-top">
        <div className="c-top__content">
          { this.errorText }
          { this.title }
          { this.topArtists }
        </div>
      </div>
    );
  }
}

export default TopArtists;
