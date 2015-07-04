import React from 'react/addons';
import TodoTextInput from './TodoTextInput';


var propTypes = React.PropTypes;

export default React.createClass({

  propTypes: {
    title: propTypes.string.isRequired,
    todoText: propTypes.string.isRequired,
    onTextEnter: propTypes.func.isRequired,
    onTextUpdate: propTypes.func
  },

  render(){
    var { title, todoText, onTextUpdate, onTextEnter } = this.props;

    return (
      <header id='header'>
        <h1>{title}</h1>
        <TodoTextInput
          id='new-todo'
          className='new-todo'
          value={todoText}
          onEnter={onTextEnter}
          onUpdate={onTextUpdate}
        />
      </header>
    );
  }
});