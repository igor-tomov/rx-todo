import React from 'react/addons';
import TodoItem from './TodoItem';
import TodoAction from '../actions/TodoActions';
import FilterConst from '../constants/TodoFilterConstants';


var propTypes = React.PropTypes;



export default React.createClass({

  mixins: [React.addons.PureRenderMixin],



  propTypes: {
    todoItems: propTypes.array.isRequired,
    todoFilterList: propTypes.array.isRequired,
    onToggleComplete: propTypes.func.isRequired,
    onToggleCompleteAll: propTypes.func.isRequired,
    onTodoItemDestroy: propTypes.func.isRequired,
    todoFilter: propTypes.string.isRequired
  },



  getDefaultProps(){
    return {
      todoFilter: FilterConst.ALL
    }
  },



  _onToggleCompleteAll(){
    this.props.onToggleCompleteAll();
  },


  _renderTodoItems(){
    var { todoFilter, todoItems, onToggleComplete, onTodoItemUpdate, onTodoItemDestroy } = this.props;

    return todoItems.filter( item => {
      switch ( todoFilter ){
        case ( FilterConst.ALL ):
          return true;

        case FilterConst.ACTIVE:
          return ! item.completed;

        case FilterConst.COMPLETED:
          return item.completed;
      }
    }).map( item =>
      <TodoItem
        {...item}
        key={item.id}
        onToggleComplete={onToggleComplete}
        onItemDestroy={onTodoItemDestroy}
        onItemUpdate={onTodoItemUpdate}
      />
    );
  },



  render(){
    var {todoItems, allCompleted} = this.props;

    if ( ! todoItems.length ){
      return null;
    }

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
        <ul id="todo-list" className='todo-list'>{this._renderTodoItems()}</ul>
      </section>
    );
  }
});