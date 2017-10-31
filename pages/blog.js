import React, { Component } from 'react'
import { graphql } from 'react-relay'
import withData from '../lib/withData'
import Header from '../components/Header'
import PostRecentList from '../components/PostRecentList'

class Blog extends Component {
  static displayName = `Entry Table`

  render (props) {
    return (
      <div>
        <Header />
        <PostRecentList viewer={this.props.viewer} />
      </div>
    )
  }
}

export default withData(Blog, {
  query: graphql`
        query blog_Query {
            viewer {
                ...PostRecentList_viewer
            }
        }
    `
})
