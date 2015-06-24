import React from 'react/addons';
import TodoTextInput from './TodoTextInput';
import TodoBox from './TodoBox';

class TodoHeader extends React.Component {

  constructor(props){
    super(props);
  }

  render(){
    var { title, text, todoItems } = this.props;

    return (
      <header id='header'>
        <h1>{title}</h1>
        <TodoTextInput text={text} />
        <TodoBox todoItems={todoItems} />
      </header>
    );
  }
}

export default TodoHeader;