import React from 'react/addons';

import TodoHeader from './TodoHeader';
import TodoBox from './TodoBox';
import TodoFooter from './TodoFooter';



export default React.createClass({

  render(){
    var props = this.props;

    return (
        <section className='todoapp'>
          <TodoHeader
            title={props.title}
            todoText={props.todoText}
            onTextUpdate={props.onInputTextUpdate}
            onTextEnter={props.onInputTextEnter}
          />
          <TodoBox
            todoItems={props.todoItems}
            allCompleted={props.allCompleted}
            onToggleComplete={props.onTodoItemToggleComplete}
            onToggleCompleteAll={props.onToggleCompleteAll}
            onTodoItemUpdate={props.onTodoItemUpdate}
            onTodoItemDestroy={props.onTodoItemDestroy}
          />
          <TodoFooter
            todoItems={props.todoItems}
            allUncompleted={props.allUncompleted}
            onClearCompleted={props.onClearCompleted}
          />
        </section>
    );
  }
});
