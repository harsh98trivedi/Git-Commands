import React, {Component} from 'react';

// stylesheet
import './footer.scss';

class Footer extends Component {
  render() {
    return (<div>
      <footer>
        <h5>A PROJECT BY 3 NERDS</h5>
        <a href="https://twitter.com/WeTheFOSS">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="https://www.instagram.com/WeTheFOSS">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="https://github.com/wethefoss">
          <i className="fab fa-github"></i>
        </a>
        <hr/>
        <a id="src-git" href="https://github.com/WeTheFOSS/Git-Commands"  target="_blank"  rel="noopener noreferrer">STARGRAZE US ON <b>GITHUB</b></a>
      </footer>
    </div>);
  }
}

export default Footer;
