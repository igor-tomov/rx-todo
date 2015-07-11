import React from 'react/addons';
import TodoTextInput from './TodoTextInput';


var propTypes = React.PropTypes;

export default React.createClass({

  mixins: [React.addons.PureRenderMixin],



  propTypes: {
    title: propTypes.string.isRequired,
    todoText: propTypes.string.isRequired,
    onTextEnter: propTypes.func.isRequired,
    onTextUpdate: propTypes.func
  },

  _onTextEnter( text ){
    var trimmedText = text.trim();

    trimmedText && this.props.onTextEnter( trimmedText );
  },

  render(){
    var { title, todoText, onTextUpdate } = this.props;

    return (
      <header id='header'>
        <h1>{title}</h1>
        <TodoTextInput
          id='new-todo'
          className='new-todo'
          value={todoText}
          onEnter={this._onTextEnter}
          onUpdate={onTextUpdate}
        />
      </header>
    );
  }
});