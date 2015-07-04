import React from 'react/addons';
import classnames from 'classnames';
import KeyCodes from '../constants/KeyCodeConstants';

import TodoTextInput from './TodoTextInput';

var propTypes = React.PropTypes;



export default React.createClass({

  propTypes: {
    id: propTypes.string.isRequired,
    text: propTypes.string.isRequired,
    completed: propTypes.bool.isRequired,

    onToggleComplete: propTypes.func.isRequired,
    onItemUpdate: propTypes.func.isRequired,
    onItemDestroy: propTypes.func.isRequired
  },



  getInitialState(){
    return {
      isEditing: false
    }
  },



  toggleEditing( toggle ){
    this.setState({ isEditing: toggle });
  },



  _onToggleComplete(){
    this.props.onToggleComplete( this.props.id );
  },



  _onDoubleClick(){
    this.toggleEditing( true );
  },



  _onDestroyClick(){
    this.props.onItemDestroy( this.props.id );
  },



  _onEditComplete( text ){
    var trimmedText = text.trim();

    if ( trimmedText && trimmedText !== this.props.text ) {
      this.props.onItemUpdate( this.props.id, trimmedText );
    }

    this.toggleEditing( false );
  },



  _onEditCancel(){
    this.toggleEditing( false )
  },



  _getEditInput(){
    if ( this.state.isEditing ){
      return (
        <TodoTextInput
          className='edit'
          value={this.props.text}
          autoFocus={true}
          onEnter={this._onEditComplete}
          onBlur={this._onEditCancel}
          onEsc={this._onEditCancel}
        />
      );
    }
  },



  render(){
    var { text, completed } = this.props;

    var classes = classnames({
      completed: completed,
      editing: this.state.isEditing
    });

    return (
      <li className={classes}>
        <div className="view">
          <input
            className="toggle"
            type="checkbox"
            checked={completed}
            onChange={this._onToggleComplete}
          />
          <label onDoubleClick={this._onDoubleClick}>
            {text}
          </label>
          <button className="destroy" onClick={this._onDestroyClick} />
        </div>
        {this._getEditInput()}
      </li>
    );
  }
});