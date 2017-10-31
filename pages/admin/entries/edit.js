import React, { Component } from 'react'
import { graphql } from 'react-relay'
import withData from '../../../lib/withData'
import Header from '../../../components/Header'
import EntryEdit from '../../../components/EntryEdit'

// import {installRelayDevTools} from 'relay-devtools';
// installRelayDevTools();

class Edit extends Component {
  static displayName = `Edit Entry`

  static getInitialProps ({ query: { id } }) {
    return { id }
  }

  render (props) {
    return (
      <div>
        <Header />
        <h3>Edit Entry</h3>
        <EntryEdit pathId={this.props.id} entry={this.props.viewer.Entry} />
      </div>
    )
  }
}

// export default Edit;
export default withData(Edit, {
  query: graphql`
        query edit_Query($id: ID) {
            viewer {
                Entry(id: $id) {
                  id
                  ...EntryEdit_entry
                }
            }
        }
    `
})
