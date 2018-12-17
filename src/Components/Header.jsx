import React from 'react'

class Header extends React.Component {
  render() {
    return (
      <div>
        {/*Thanks to
        https://codepen.io/beben-koben/pen/BoLyf*/}
        <div className="header-title">
          <h1>
            <a href="/" target="_blank" rel="noopener noreferrer">
              GIT COMMANDS
            </a>
          </h1>
        </div>
        <div className="subtitle">
          <p>
            LEARN GIT IN AN INTERACTIVE WAY
          </p>
        </div>
      </div>

    );
  }
}

export default Header;
