import DeleteEntryMutation from '../mutations/DeleteEntryMutation';
import UpdateEntryMutation from '../mutations/UpdateEntryMutation';
import EntryTitleInput from './EntryTitleInput';

import React from 'react';
import { createFragmentContainer, graphql } from 'react-relay';
import classnames from 'classnames';
import Link from 'next/link'

class EntryTableEntry extends React.Component {
  state = {
    isEditing: false,
  };
  _handleDestroyClick = () => {
    this._removeEntry();
  };
  _handleLabelDoubleClick = () => {
    this._setEditMode(true);
  };
  _handleTitleInputCancel = () => {
    this._setEditMode(false);
  };
  _handleTitleInputDelete = () => {
    this._setEditMode(false);
    this._removeEntry();
  };
  _handleTitleInputSave = (title) => {
    this._setEditMode(false);
    UpdateEntryMutation.commit(
      this.props.relay.environment,
      title,
      this.props.entry,
      (result) => alert(result)
    );
  };
  _removeEntry = () => {
    DeleteEntryMutation.commit(
      this.props.relay.environment,
      this.props.entry,
      this.props.viewer,
      (result) => alert(result)
    );
  };
  _setEditMode = (shouldEdit) => {
    console.log("Setting isEditing = " + shouldEdit);
    this.setState({isEditing: shouldEdit});
  };
  renderTitleInput = () => {
    return (
      <EntryTitleInput
        className="edit"
        commitOnBlur={true}
        initialValue={this.props.entry.title}
        onCancel={this._handleTitleInputCancel}
        onDelete={this._handleTitleInputDelete}
        onSave={this._handleTitleInputSave}
      />
    );
  }
  renderTitleLabel() {
    return (
      <label onDoubleClick={this._handleLabelDoubleClick}>{this.props.entry.title}</label>
    );
  }
  render() {
    return (
      <tr
        className={classnames({
          editing: this.state.isEditing,
        })}
      >
        <td>
          {!this.state.isEditing && this.renderTitleLabel()}
          {this.state.isEditing && this.renderTitleInput()}
        </td>
        <td>Post</td>
        <td>
          <Link href={{ pathname: '/admin/entries/'+this.props.entry.id}}><a>Edit</a></Link>
          <button className="destroy" onClick={this._handleDestroyClick}>Delete</button>
        </td>
      </tr>
    );
  }
}

export default createFragmentContainer(EntryTableEntry, {
  entry: graphql`
    fragment EntryTableEntry_entry on Entry {
      id,
      title
    }
  `,
});