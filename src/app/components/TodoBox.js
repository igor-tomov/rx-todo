import React from 'react/addons';
import TodoItem from './TodoItem';
import TodoAction from '../actions/TodoActions';

var propTypes = React.PropTypes;

export default React.createClass({

  propTypes: {
    todoItems: propTypes.array.isRequired,
    onToggleComplete: propTypes.func.isRequired,
    onToggleCompleteAll: propTypes.func.isRequired,
    onTodoItemDestroy: propTypes.func.isRequired
  },

  _onToggleCompleteAll(){
    this.props.onToggleCompleteAll();
  },

  render(){
    var {todoItems, onToggleComplete, onTodoItemUpdate, onTodoItemDestroy} = this.props;

    if ( ! todoItems.length ){
      return null;
    }

    var allCompleted = todoItems.every( item => item.completed );

    var todoList = todoItems.map( item =>
          <TodoItem
            key={item.id} {...item}
            onToggleComplete={onToggleComplete}
            onItemDestroy={onTodoItemDestroy}
            onItemUpdate={onTodoItemUpdate}
          />
        );

    return (
      <section id='main' className='main'>
        <input
          id='toggle-all'
          className='toggle-all'
          type='checkbox'
          checked={allCompleted ? 'checked' : ''}
          onChange={this._onToggleCompleteAll}
        />
        <label htmlFor="toggle-all">Mark all as complete</label>
        <ul id="todo-list" className='todo-list'>{todoList}</ul>
      </section>
    );
  }
});