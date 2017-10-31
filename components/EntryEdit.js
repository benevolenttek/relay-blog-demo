import CreateEntryMutation from '../mutations/CreateEntryMutation';
import UpdateEntryMutation from '../mutations/UpdateEntryMutation';
import DeleteEntryMutation from '../mutations/DeleteEntryMutation';

import React from 'react';
import { createFragmentContainer, graphql } from 'react-relay';
import classnames from 'classnames';
import Router from 'next/router'

class EntryEdit extends React.Component {
  state = {
    is404: !this.props.entry && this.props.pathId !== "new",
    isNew: this.props.pathId === "new",
    title: (this.props.entry ? this.props.entry.title : ''),
  };
  _handleSaveClick = () => {
    if (this.state.isNew) {
      CreateEntryMutation.commit(
        this.props.relay.environment,
        this.state.title.trim(),
        (result) => alert(result)
      );
    } else {
      UpdateEntryMutation.commit(
        this.props.relay.environment,
        this.state.title.trim(),
        this.props.entry,
        (result) => alert(result)
      );
    }
  };
  _handleDestroyClick = () => {
    DeleteEntryMutation.commit(
      this.props.relay.environment,
      this.props.entry,
      this.props.viewer,
      (result) => {
        alert(result)
        if (result == "Success!")
          Router.push('/admin/entries')
      }
    );
  };
  // _handleTitleChange = (e) => {
  //   this.setState({title: e.target.value});
  // };
  render404Warning = () => {
    return (
      <p>ERROR: Entry Not Found</p>
    );
  }
  renderForm = () => {
    return (
      <form onSubmit={this._handleSaveClick}>
        <h1 style={{display:'none'}}>{this.state.title}</h1>
        <p>Title:<br/>
          <input
            className={this.props.className}
            defaultValue={this.state.title}
            onChange={(e) => this.setState({title: e.target.value})}
            style={{fontSize:"xx-large"}}
          />
        </p> 
        <p>ID: {this.props.pathId}</p>
        <p>
          <input type="submit" value="Save" />
          <button onClick={this._handleDestroyClick}>Delete</button>
        </p>
      </form>

    )
  }
  render() {
    return (
      <div>
        {this.state.is404 && this.render404Warning()}
        {!this.state.is404 && this.renderForm()}
      </div>
    );
  }
}

// export default EntryEdit;
export default createFragmentContainer(EntryEdit,
  graphql`
    fragment EntryEdit_entry on Entry {
      id,
      title
    }
  `,
);