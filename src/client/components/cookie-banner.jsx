import React from 'react';

class CookieBanner extends React.Component {
  constructor() {
    super();

    this.state = {
      seenCookieBanner: false
    };

    this.dismissCookieBanner = this.dismissCookieBanner.bind(this);
  }

  componentDidMount() {
    let seenCookieBanner = this.state.show;
    
    if (window) {
      seenCookieBanner = window.localStorage.getItem('seenCookieBanner') || false;
    }

    this.setState({
      seenCookieBanner
    });
  }

  dismissCookieBanner() {
    const seenCookieBanner = true;

    if (window) {
      window.localStorage.setItem('seenCookieBanner', seenCookieBanner);
    }

    this.setState({
      seenCookieBanner
    });
  }

  render() {
    if (!this.state.seenCookieBanner) {
      return (
        <div className="c-cookie-banner">
          <div className="c-cookie-banner__contents">
            <p>This website uses cookies to ensure you get the best experience on our website. <a href="http://cookiesandyou.com/">Learn More -></a></p>
            <div className="c-cookie-banner__button">
              <a role="button" onClick={this.dismissCookieBanner}>Okay Cool!</a>
            </div>
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
};

export default CookieBanner;
