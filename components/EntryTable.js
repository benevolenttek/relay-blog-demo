import Entry from './EntryTableEntry';

import React from 'react';
import { createFragmentContainer, graphql } from 'react-relay';
import Link from 'next/link'
import Router from 'next/router'

class EntryTable extends React.Component {
  _handleNewClick() {
    Router.push('/admin/entries/new')
  }
  render() {
    return (
      <div>
        <h1>Blog entrys</h1>
        <table width="100%">
          <thead>
            <tr>
              <th>Title</th>
              <th>Type</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {this.props.viewer.allEntries.edges.map(({ node }) =>
              <Entry key={node.id} entry={node} />
            )}
          </tbody>
          <style jsx>{`
            table {
              text-align: left;
              border-collapse:collapse;
              border:1px solid #EEE;
            }
            table th, table td {
              border:1px solid #EEE;
            }
          `}</style>
        </table>
        <button onClick={this._handleNewClick}>New</button>
        <p>Tip: Double click a field to edit in-line. When you deselect it will be saved.</p>
      </div>
    )
  }
}

export default createFragmentContainer(EntryTable,
  graphql`
    fragment EntryTable_viewer on Viewer {
        allEntries(first: 10, orderBy: createdAt_DESC) {
            edges {
                node {
                  id
                  ...EntryTableEntry_entry
                }
            }
        }
    }
  `
);