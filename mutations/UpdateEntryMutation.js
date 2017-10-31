import {
  commitMutation,
  graphql,
} from 'react-relay';

const mutation = graphql`
  mutation UpdateEntryMutation($input: UpdateEntryInput!) {
    updateEntry(input:$input) {
      entry {
        id
        title
      }
    }
  }
`;

function getOptimisticResponse(title, entry) {
  return {
    updateEntry: {
      entry: {
        id: entry.id,
        title: title
      },
    },
  };
}

let tempID = 0;

function commit(environment,title,entry,callback) {
  return commitMutation(
    environment,
    {
      mutation,
      variables: {
        input: {
          title,
          id: entry.id,
          clientMutationId: (tempID++).toString()
        },
      },
      optimisticResponse: getOptimisticResponse(title, entry),
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
