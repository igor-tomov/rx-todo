import React from 'react/addons';
import StoreListener from '../utils/mixins/StoreListener'
import config from '../configs';

import TodoHeader from './TodoHeader';

import {TodoListMap, createTodoStore} from '../stores/TodoStore';
import TodoActions from '../actions/TodoActions';


let TodoApp = React.createClass({

  mixins: [ StoreListener( createTodoStore ) ],

  getInitialState(){
    return TodoListMap();
  },

  componentWillMount: function(){
    TodoActions.create( 'Do some job' );
  },

  render(){
    return (
        <section>
          <TodoHeader {...this.state} title={config.title} />
        </section>
    );
  }
});

export default TodoApp;