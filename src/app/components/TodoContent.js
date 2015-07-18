import React from 'react/addons';

import TodoBox from './TodoBox';
import TodoFooter from './TodoFooter';



export default React.createClass({

  mixins: [React.addons.PureRenderMixin],



  render(){
    var props     = this.props,
        todoItems = props.todoItems;

    var allCompleted = todoItems.every( item => item.completed );


    return (
        <div>
          <TodoBox
            todoItems={props.todoItems}
            todoFilterList={props.todoFilterList}
            todoFilter={props.todoFilter}
            allCompleted={allCompleted}
            onToggleComplete={props.onTodoItemToggleComplete}
            onToggleCompleteAll={props.onToggleCompleteAll}
            onTodoItemUpdate={props.onTodoItemUpdate}
            onTodoItemDestroy={props.onTodoItemDestroy}
          />
          <TodoFooter
            todoItems={props.todoItems}
            todoFilterList={props.todoFilterList}
            todoFilter={props.todoFilter}
            onClearCompleted={props.onClearCompleted}
          />
        </div>
    );
  }
});