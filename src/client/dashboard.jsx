import React from 'react';
import { connect } from 'react-redux';

import TopArtists from './components/top-artists';
import TopTracks from './components/top-tracks';
import TopStats from './components/top-stats';
import CookieBanner from './components/cookie-banner';

class Dashboard extends React.Component {
  render() {
    return(
      <div className="c-dashboard">
        <h1>Spotboard</h1>
        <ul className="time-frames">
          <li><a href="/?time_frame=long_term">All time</a></li>
          <li><a href="/?time_frame=medium_term">Past 6 months</a></li>
          <li><a href="/?time_frame=short_term">Past 4 weeks</a></li>
          <li><a href="/logout">Logout!</a></li>
        </ul>
        <TopArtists {...this.props.artists} />
        <TopTracks {...this.props.tracks} />
        <TopStats profile={this.props.profile} features={this.props.features} />
        <CookieBanner />
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    ...state
  };
}

export default connect(mapStateToProps)(Dashboard);
