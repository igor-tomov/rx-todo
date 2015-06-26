import React from 'react/addons';
import TodoItem from './TodoItem';
import TodoAction from '../actions/TodoActions';

export default React.createClass({

  propTypes: {
    todoItems: React.PropTypes.array.isRequired
  },

  _onToggleCompleteAll(){
    TodoAction.toggleCompleteAll();
  },

  render(){
    var {todoItems} = this.props;

    var allCompleted = todoItems.every( item => item.completed ),
        todoList     = todoItems.map( item => <TodoItem {...item} /> );

    return (
      <section id='main'>
        <input
          id='toggle-all'
          type='checkbox'
          checked={allCompleted ? 'checked' : ''}
          onChange={this._onToggleCompleteAll}
        />
        <label htmlFor="toggle-all">Mark all as complete</label>
        <ul id="todo-list">{todoList}</ul>
      </section>
    );
  }
});