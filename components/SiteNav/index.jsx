import React from 'react'
// eslint-disable-next-line import/no-extraneous-dependencies
import { Link } from 'react-router'
// eslint-disable-next-line import/no-extraneous-dependencies
import { prefixLink } from 'gatsby-helpers'
import './style.css'

class SiteNav extends React.Component {
  static propTypes = {
    location: React.propTypes.object,
  }
  render () {
    const { location } = this.props
    return (
      <nav className="blog-nav">
        <ul>
          <li>
            <Link to="/" className={location.pathname === prefixLink('/') ? 'current' : null} >
              Articles
            </Link>
          </li>
          <li>
            <Link
              to="/about/"
              className={location.pathname === prefixLink('/about/') ? 'current' : null}
            >
              About me
            </Link>
          </li>
          <li>
            <Link
              to="/contact/"
              className={location.pathname === prefixLink('/contact/') ? 'current' : null}
            >
              Contact me
            </Link>
          </li>
        </ul>
      </nav>
    )
  }
}

export default SiteNav
