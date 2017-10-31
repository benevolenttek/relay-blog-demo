import Entry from './PostRecentListPost';

import React from 'react';
import { createFragmentContainer, graphql } from 'react-relay';
import Router from 'next/router'

class PostRecentList extends React.Component {
  _handleNewClick() {
    Router.push('/admin/entries/new')
  }
  render() {
    return (
      <div>
        <h1>Blog entrys</h1>
        <ol>
            {this.props.viewer.allEntries.edges.map(({ node }) =>
              <Entry key={node.id} entry={node} />
            )}
        </ol>
      </div>
    )
  }
}

export default createFragmentContainer(PostRecentList,
  graphql`
    fragment PostRecentList_viewer on Viewer {
        allEntries(first: 10, orderBy: createdAt_DESC) {
            edges {
                node {
                  id
                  ...PostRecentListPost_entry
                }
            }
        }
    }
  `
);