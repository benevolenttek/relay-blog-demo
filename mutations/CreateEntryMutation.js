import {
  commitMutation,
  graphql,
} from 'react-relay'
import { ConnectionHandler } from 'relay-runtime'

const mutation = graphql`
  mutation CreateEntryMutation($input: CreateEntryInput!) {
    createEntry(input: $input) {
      entry {
        id
        title
      }
    }
  }
`

let tempID = 0;

function commit(environment,title,callback) {
  const variables = {
    input: {
      title,
      clientMutationId: (tempID++).toString()
    },
  }

  commitMutation(
    environment,
    {
      mutation,
      variables,
      onCompleted: () => {
        callback("Success!")
      },
      onError: err => {
        console.error(err)
        callback(err)
      },
    },
  )
}

export default {commit};