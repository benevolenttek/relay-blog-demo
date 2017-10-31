import React, { Component } from 'react'
import { graphql } from 'react-relay'
import withData from '../../../lib/withData'
import Header from '../../../components/Header'
import EntryTable from '../../../components/EntryTable'

class Entries extends Component {
  static displayName = `Entry Table`

  render (props) {
    return (
      <div>
        <Header />
        <EntryTable viewer={this.props.viewer} />
      </div>
    )
  }
}

export default withData(Entries, {
  query: graphql`
        query entries_Query {
            viewer {
                ...EntryTable_viewer
            }
        }
    `
})
