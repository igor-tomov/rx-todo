import React from 'react/addons';
import TodoTextInput from './TodoTextInput';
import TodoBox from './TodoBox';

var propTypes = React.PropTypes;

export default React.createClass({

  propTypes: {
    title: propTypes.string.isRequired,
    todoText: propTypes.string.isRequired,
    todoItems: propTypes.array.isRequired
  },

  render(){
    var { title, todoText, todoItems } = this.props;

    return (
      <header id='header'>
        <h1>{title}</h1>
        <TodoTextInput text={todoText} />
        <TodoBox todoItems={todoItems} />
      </header>
    );
  }
});