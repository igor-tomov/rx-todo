import React from 'react/addons';

import config from '../configs';
import StoreListener from '../utils/mixins/StoreListener'
import {TodoListMap, createTodoStore} from '../stores/TodoStore';
import TodoActions from '../actions/TodoActions';

import TodoApp from './TodoApp';



export default React.createClass({

  mixins: [ StoreListener( createTodoStore ) ],



  getInitialState(){
    return this.props.todos || TodoListMap().toJS();
  },



  callbacks: {
    onInputTextEnter( text ){
      var trimmedText = text.trim();

      trimmedText && TodoActions.create( trimmedText );
    },

    onInputTextUpdate: text => TodoActions.updateText( text ),
    onTodoItemToggleComplete: id => TodoActions.toggleComplete( id ),
    onToggleCompleteAll: () => TodoActions.toggleCompleteAll(),
    onTodoItemUpdate: ( id, text ) => TodoActions.updateItem( id, text ),
    onTodoItemDestroy: id => TodoActions.destroy( id ),
    onClearCompleted: () => TodoActions.clearCompleted()
  },



  render(){
    var todoItems = this.state.todoItems;

    var allCompleted   = todoItems.every( item => item.completed ),
        allUncompleted = todoItems.every( item => ! item.completed );

    return (
        <TodoApp
          {...this.state}
          title={config.title}
          {...this.callbacks}
          allCompleted={allCompleted}
          allUncompleted={allUncompleted}
        />
    );
  }
});