import React from 'react'
import { Link } from 'gatsby'

import logo from '../img/logo.svg'

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer has-background-black has-text-white-ter">
        <div className="content has-text-centered">
          <img
            src={logo}
            alt="Kaldi"
            style={{ width: '14em', height: '10em' }}
          />
        </div>
        <div className="content has-text-centered has-background-black has-text-white-ter">
          <div className="container has-background-black has-text-white-ter">
            <div className="columns">

                    <div className="column">
                      <Link className="footer-item" to="/" >
                        Home
                      </Link>
                    </div>
                    <div className="column">
                      <Link  className="footer-item" to="/about">
                        About
                      </Link>
                    </div>
                    <div  className="column">
                      <a className="footer-item"
                         href="/admin/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Admin
                      </a>
                    </div>
                    <div className="column">
                      <Link  className="footer-item" to="/chapters">
                        Latest Chapters
                      </Link>
                    </div>
              </div>
            <p>
                © 2020 David Lumsden. All rights reserved.
            </p>
              <p>
                  The material on this site may not be reproduced, distributed, transmitted, cached or otherwise used, except with the prior written permission of David Lumsden.
              </p>
            </div>
        </div>
      </footer>
    )
  }
}

export default Footer
