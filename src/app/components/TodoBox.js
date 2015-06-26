import React from 'react/addons';
import TodoItem from './TodoItem';
import TodoAction from '../actions/TodoActions';

var propTypes = React.PropTypes;

export default React.createClass({

  propTypes: {
    todoItems: propTypes.array.isRequired,
    onToggleComplete: propTypes.array.isRequired
  },

  _onToggleCompleteAll(){
    TodoAction.toggleCompleteAll();
  },

  render(){
    var {todoItems, onToggleComplete} = this.props;

    if ( ! todoItems.length ){
      return null;
    }

    var allCompleted = todoItems.every( item => item.completed ),
        todoList     = todoItems.map( item => <TodoItem key={item.id} {...item} onToggleComplete={onToggleComplete}/> );

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