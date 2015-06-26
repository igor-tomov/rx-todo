import React from 'react/addons';
import StoreListener from '../utils/mixins/StoreListener'
import config from '../configs';

import TodoHeader from './TodoHeader';
import TodoBox from './TodoBox';

import {TodoListMap, createTodoStore} from '../stores/TodoStore';
import TodoActions from '../actions/TodoActions';

var ENTER_KEY_CODE = 13;

export default React.createClass({

  mixins: [ StoreListener( createTodoStore ) ],

  getInitialState(){
    return this.props.todos || TodoListMap().toJS();
  },

  // Todos event handlers
  onInputTextUpdate( event ){
    var text = event.target.value;

    TodoActions.updateText( text );

    if ( event.which === ENTER_KEY_CODE && text.trim() ){
      TodoActions.create( text.trim() );
    }
  },

  onTodoItemToggleComplete( id ){
    TodoActions.toggleComplete( id );
  },

  render(){
    return (
        <section className='todoapp'>
          <TodoHeader
            title={config.title}
            todoText={this.state.todoText}
            onTextUpdate={this.onInputTextUpdate}
          />
          <TodoBox
            todoItems={this.state.todoItems}
            onToggleComplete={this.onTodoItemToggleComplete}
          />
        </section>
    );
  }
});
