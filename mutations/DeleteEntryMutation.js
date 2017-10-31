import {
  commitMutation,
  graphql,
} from 'react-relay';
import {ConnectionHandler} from 'relay-runtime';

const mutation = graphql`
  mutation DeleteEntryMutation($input: DeleteEntryInput!) {
    deleteEntry(input: $input) {
      deletedId
    }
  }
`;

let tempID = 0;

function commit(environment,entry,user,callback) {
  return commitMutation(
    environment,
    {
      mutation,
      variables: {
        input: {id: entry.id, clientMutationId: (tempID++).toString()},
      },
      onCompleted: () => {
        callback("Success!")
      },
      onError: err => {
        console.error(err)
        callback(err)
      },
    }
  );
}

export default {commit};
