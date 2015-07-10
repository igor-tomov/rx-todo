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



  _saveTodo(){
    TodoActions.saveToStorage( config.storageName, this.state );
  },



  getDefaultProps(){
    return {
      todoFilter: FilterConst.ALL
    }
  },



  getInitialState(){
    return TodoListMap().toJS();
  },



  componentWillMount(){
    TodoActions.init( config.storageName );
  },



  componentDidMount: function(){
    // init autosave stream
    Rx.Observable
      .interval( config.autoSaveInterval )
      .takeUntil( Rx.Observable.fromEvent( window, 'beforeunload' ) )
      //.do( () => console.info( 'autosave:', this.state ) )
      .subscribe(
          this._saveTodo,
          null,
          this._saveTodo
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