import React from 'react'
import { createFragmentContainer, graphql } from 'react-relay'

const EntryPreview = props => {
  return (
    <div key={props.entry.id}>{props.entry.title}</div>
  )
}

export default createFragmentContainer(EntryPreview,
  graphql`
        fragment EntryPreview_entry on Entry {
            id
            title
        }
    `
)
