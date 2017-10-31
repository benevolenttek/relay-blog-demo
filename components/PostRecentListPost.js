import React from 'react';
import { createFragmentContainer, graphql } from 'react-relay';
import classnames from 'classnames';
import Link from 'next/link'

class PostRecentListPost extends React.Component {
  render() {
    return (
      <li>
        <h3>{this.props.entry.title}</h3>
        <div>ID: {this.props.entry.id}</div>
      </li>
    );
  }
}

export default createFragmentContainer(PostRecentListPost, {
  entry: graphql`
    fragment PostRecentListPost_entry on Entry {
      id,
      title
    }
  `,
});