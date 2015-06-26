import React from 'react/addons';
import TodoTextInput from './TodoTextInput';


var propTypes = React.PropTypes;

export default React.createClass({

  propTypes: {
    title: propTypes.string.isRequired,
    todoText: propTypes.string.isRequired,
    onTextUpdate: propTypes.func.isRequired
  },

  render(){
    var { title, todoText, onTextUpdate } = this.props;

    return (
      <header id='header'>
        <h1>{title}</h1>
        <TodoTextInput text={todoText} onTextUpdate={onTextUpdate} />
      </header>
    );
  }
});