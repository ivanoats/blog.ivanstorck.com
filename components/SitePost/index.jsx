import React from 'react'
import moment from 'moment'
import { Link } from 'react-router'
// eslint-disable-next-line import/no-extraneous-dependencies
import { prefixLink } from 'gatsby-helpers'
// eslint-disable-next-line import/no-extraneous-dependencies
import { config } from 'config'
import ReadNext from '../ReadNext'
import './style.css'
import '../../static/css/highlight.css'

class SitePost extends React.Component {
  static propTypes = {
    route: React.PropTypes.shape({
      name: React.PropTypes.string,
    }),
    post: React.PropTypes.shape({
      title: React.PropTypes.string,
      slug: React.PropTypes.string,
    }).isRequired,
  }
  render () {
    const { route } = this.props
    const post = route.page.data
    console.log('FKSHdjlkfgsdkjghsfdkjghsfg')
    const home = (
      <div>
        <Link className="gohome" to={prefixLink('/')}>
          All Articles
        </Link>
      </div>
    )

    return (
      <div>
        { home }
        <div className="blog-single">
          <div className="text">
            <h1>{ post.title }</h1>
            <div dangerouslySetInnerHTML={{ __html: post.body }} />
            <div className="date-published">
              <em>Published { moment(post.datePublished).format('D MMM YYYY') }</em>
            </div>
          </div>
          <div className="footer">
            <ReadNext post={post} {...this.props} />
            <hr />
            <p>
              { config.siteDescr }
              <a href={config.siteTwitterUrl}>
                <br />
                <strong>{ config.siteAuthor }</strong> on Twitter</a>
            </p>
          </div>
        </div>
      </div>
    )
  }
}

export default SitePost
