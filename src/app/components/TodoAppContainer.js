import React from 'react/addons';

import config from '../configs';
import filterList from '../configs/todoFilterList';
import FilterConst from '../constants/TodoFilterConstants';

import StoreListener from '../utils/mixins/StoreListener'
import {TodoListMap, createTodoStore} from '../stores/TodoStore';
import TodoActions from '../actions/TodoActions';

import todoStorage from '../services/todoStorageService';

import TodoApp from './TodoApp';



export default React.createClass({

  mixins: [ StoreListener( createTodoStore ) ],



  getDefaultProps(){
    return {
      todoFilter: FilterConst.ALL
    }
  },



  getInitialState(){
    return this.props.todos || TodoListMap().toJS();
  },



  componentDidMount: function(){
    Rx.Observable
      .interval( config.autoSaveInterval )
      .do( () => console.info( 'Todo autosave:', this.state ) )
      .subscribe(
        () => todoStorage.save( config.storageName, this.state )
      );
  },



  callbacks: {
    onInputTextEnter: text => TodoActions.create( text ),
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
          {...this.callbacks}
          title={config.title}
          todoFilterList={filterList}
          todoFilter={this.props.todoFilter}
          allCompleted={allCompleted}
          allUncompleted={allUncompleted}
        />
    );
  }
});