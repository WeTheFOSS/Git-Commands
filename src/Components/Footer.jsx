import React, {Component} from 'react';

// stylesheet
import './footer.scss';

class Footer extends Component {
  render() {
    return (<div>
      <footer>
        <h5>A PROJECT BY 3 NERDS</h5>
        <p>Follow</p>
        <a href="https://twitter.com/WeTheFOSS">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="https://www.instagram.com/WeTheFOSS">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="https://github.com/wethefoss">
          <i className="fab fa-github"></i>
        </a>
      </footer>
    </div>);
  }
}

export default Footer;
