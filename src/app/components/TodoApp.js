import React from 'react/addons';
import StoreListener from '../utils/mixins/StoreListener'
import config from '../configs';

import TodoHeader from './TodoHeader';
import TodoBox from './TodoBox';

import {TodoListMap, createTodoStore} from '../stores/TodoStore';
import TodoActions from '../actions/TodoActions';
import KeyCodes from '../constants/KeyCodeConstants';

export default React.createClass({

  mixins: [ StoreListener( createTodoStore ) ],

  getInitialState(){
    return this.props.todos || TodoListMap().toJS();
  },

  // Todos event handlers
  onInputTextUpdate( text ){
    TodoActions.updateText( text );
  },

  onInputTextEnter( text ){
    var trimmedText = text.trim();

    trimmedText && TodoActions.create( trimmedText );
  },

  onTodoItemToggleComplete( id ){
    TodoActions.toggleComplete( id );
  },

  onToggleCompleteAll(){
    TodoActions.toggleCompleteAll();
  },

  onTodoItemUpdate( id, text ){
    TodoActions.updateItem( id, text );
  },

  onTodoItemDestroy( id ){
    TodoActions.destroy( id );
  },

  render(){
    return (
        <section className='todoapp'>
          <TodoHeader
            title={config.title}
            todoText={this.state.todoText}
            onTextUpdate={this.onInputTextUpdate}
            onTextEnter={this.onInputTextEnter}
          />
          <TodoBox
            todoItems={this.state.todoItems}
            onToggleComplete={this.onTodoItemToggleComplete}
            onToggleCompleteAll={this.onToggleCompleteAll}
            onTodoItemUpdate={this.onTodoItemUpdate}
            onTodoItemDestroy={this.onTodoItemDestroy}
          />
        </section>
    );
  }
});
