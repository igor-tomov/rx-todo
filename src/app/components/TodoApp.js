import React from 'react/addons';
import config from '../configs';

import TodoHeader from './TodoHeader';

import createTodoStore from '../stores/TodoStore';
import dispatcher from '../dispatchers/TodoDispatcher';
import actions from '../actions/TodoActions';


class TodoApp extends React.Component {

  constructor(props){
    super(props);

    this.state = { title: config.title };

    // init Store stream
    this.store = createTodoStore( dispatcher );

    actions.testify({ x: 1 });
  }

  render(){
    return (
        <section>
          <TodoHeader {...this.state} />
        </section>
    );
  }
}

export default TodoApp;