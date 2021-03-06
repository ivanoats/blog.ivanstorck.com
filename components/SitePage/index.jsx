import React from 'react'
import SiteSidebar from '../SiteSidebar'
import './style.css'

class SitePage extends React.Component {
  static propTypes = {
    post: React.PropTypes.object.isRequired,
    pages: React.PropTypes.array,
  }
  render () {
    const { route } = this.props
    const post = route.page.data

    return (
      <div>
        <SiteSidebar {...this.props} />
        <div className="content">
          <div className="main">
            <div className="main-inner">
              <div className="blog-page">
                <div className="text">
                  <h1>{ post.title }</h1>
                  <div dangerouslySetInnerHTML={{ __html: post.body }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default SitePage
